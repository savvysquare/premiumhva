import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const vercelOutputDir = path.join(rootDir, '.vercel', 'output');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('Starting build...');
execSync('vite build', { stdio: 'inherit', cwd: rootDir });

console.log('Preparing .vercel/output...');
if (fs.existsSync(vercelOutputDir)) {
  fs.rmSync(vercelOutputDir, { recursive: true, force: true });
}
fs.mkdirSync(vercelOutputDir, { recursive: true });

// 1. Static files
console.log('Copying static assets...');
const staticDir = path.join(vercelOutputDir, 'static');
copyRecursiveSync(path.join(distDir, 'client'), staticDir);

// 2. Server function
console.log('Preparing server function...');
const funcDir = path.join(vercelOutputDir, 'functions', 'index.func');
fs.mkdirSync(funcDir, { recursive: true });

// Copy server bundle into the function directory
copyRecursiveSync(path.join(distDir, 'server'), funcDir);

// Create .vc-config.json
const vcConfig = {
  runtime: 'edge',
  entrypoint: 'index.js'
};
fs.writeFileSync(path.join(funcDir, '.vc-config.json'), JSON.stringify(vcConfig, null, 2));

// Create wrapper index.js if needed, or rename dist/server/index.js to index.js
// Based on logs, dist/server/index.js already exists.
// We need to ensure it's a valid edge function entry point.
// src/server.ts exports default { fetch }. Vercel Edge expects 'export default fetch' or similar.

const entryContent = `
import server from './index.js';
export default server.fetch;
`;
// Rename existing index.js to internal-server.js to avoid collision
fs.renameSync(path.join(funcDir, 'index.js'), path.join(funcDir, 'internal-server.js'));
fs.writeFileSync(path.join(funcDir, 'index.js'), `
import server from './internal-server.js';
export default server.fetch;
`);

// 3. Routing config
console.log('Creating config.json...');
const config = {
  version: 3,
  routes: [
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/' }
  ]
};
fs.writeFileSync(path.join(vercelOutputDir, 'config.json'), JSON.stringify(config, null, 2));

console.log('Vercel Build Output API structure ready!');

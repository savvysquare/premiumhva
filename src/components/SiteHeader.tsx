import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-premiumhva.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary overflow-hidden">
            <img src={logo} alt="PremiumHVA logo" className="h-6 w-6 object-contain" />
          </span>
          <span className="text-[17px] font-semibold tracking-tight">
            PremiumHVA
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          <Link to="/about" activeProps={{ className: "text-foreground font-medium" }}>About</Link>
          <Link to="/services" activeProps={{ className: "text-foreground font-medium" }}>Services</Link>
          <Link to="/pricing" activeProps={{ className: "text-foreground font-medium" }}>Pricing</Link>
          <Link to="/contact" activeProps={{ className: "text-foreground font-medium" }}>Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:inline text-sm text-foreground/80 hover:text-foreground">Login</Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

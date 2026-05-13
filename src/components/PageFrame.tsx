import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

/**
 * Crescent-style page wrapper: cream canvas + dotted side rules
 * forming the editorial "framed page" look.
 */
export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative">
          {/* vertical dotted rules — the Crescent signature */}
          <div className="hidden lg:block absolute -left-4 top-0 bottom-0 dotted-rule-v" />
          <div className="hidden lg:block absolute -right-4 top-0 bottom-0 dotted-rule-v" />
          <main className="py-10 md:py-16">{children}</main>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export function SectionDivider() {
  return <div className="dotted-rule my-16 md:my-24" />;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm text-muted-foreground tracking-wide">{children}</p>
  );
}

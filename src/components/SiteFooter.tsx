import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-premiumhva.png";

export function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="dotted-rule" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary overflow-hidden">
                <img src={logo} alt="PremiumHVA logo" className="h-6 w-6 object-contain" />
              </span>
              <span className="text-[17px] font-semibold">PremiumHVA</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Executive and Healthcare Virtual Assistants for busy professionals — tailored support, transparent pricing, and dependable service.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>help@premiumhva.com</li>
              <li>(832) 736-0662</li>
              <li>5900 Balcones Dr STE 100<br />Austin, TX 78731</li>
            </ul>
          </div>
        </div>
        <div className="dotted-rule" />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} PremiumHVA. All rights reserved.</p>
          <p>Tailored Virtual Assistance · Austin, TX</p>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, Eyebrow, SectionDivider } from "@/components/PageFrame";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — PremiumHVA" },
      { name: "description", content: "Transparent virtual assistant pricing starting from $9/hour. No surprises, regularly reviewed for reductions." },
      { property: "og:title", content: "Pricing — PremiumHVA" },
      { property: "og:description", content: "Starting from $9/hour. Reviewed frequently for reductions." },
    ],
  }),
  component: PricingPage,
});

const faqs = [
  { q: "What services does PremiumHVA provide?", a: "We offer specialised Executive Virtual Assistants (EVAs) for business professionals and Healthcare Virtual Assistants (HVAs) for medical institutions — including administrative support, scheduling, patient coordination, and more." },
  { q: "How can an Executive Virtual Assistant help my business?", a: "EVAs handle time-consuming administrative tasks such as calendar management, email correspondence, and research, allowing executives to focus on strategic growth." },
  { q: "What tasks can a Healthcare Virtual Assistant perform?", a: "HVAs assist with patient scheduling, medical record management, billing support, and other healthcare-related administrative tasks." },
  { q: "Are your virtual assistants trained professionals?", a: "Yes — all our EVAs and HVAs undergo rigorous training to ensure they meet industry standards." },
  { q: "What is your current pricing structure?", a: "Our hourly rate starts at $9 and is regularly reviewed for reductions. Rates will never increase — as we grow, economies of scale lower our costs." },
];

function PricingPage() {
  return (
    <PageFrame>
      <section className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Simple, transparent pricing.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Designed to suit the needs of professionals and healthcare institutions. Whether you need
            part-time assistance or full-time support, our pricing ensures you get the best value.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Starting from</p>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="text-6xl font-semibold tracking-tight">$9</span>
              <span className="text-muted-foreground">/ hour</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Reviewed frequently for opportunities to reduce.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["All features of the Free Plan", "Email & calendar platform integration", "Employee attendance management"].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />{t}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
              Let's talk
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Frequently asked questions</h2>
        </div>
        <div className="lg:col-span-8">
          <ul className="border-t border-border">
            {faqs.map((f) => (
              <li key={f.q} className="border-b border-border py-6">
                <p className="font-medium">{f.q}</p>
                <p className="mt-2 text-muted-foreground">{f.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageFrame>
  );
}

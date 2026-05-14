import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageFrame, Eyebrow, SectionDivider } from "@/components/PageFrame";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
    meta: [
      { title: "Hire a Virtual Assistant — Contact PremiumHVA Today" },
      { name: "description", content: "Ready to scale? Contact PremiumHVA to hire an expert Executive or Healthcare Virtual Assistant. We provide tailored solutions for busy professionals." },
      { property: "og:title", content: "Contact PremiumHVA — Expert VA Support" },
      { property: "og:description", content: "Get in touch to find the perfect virtual assistant for your business or medical practice." },
    ],
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageFrame>
      <section className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Get in touch with PremiumHVA.
          </h1>
          <p className="mt-6 text-muted-foreground max-w-md">
            Have questions or need assistance? Tell us what you're working on and we'll get back to you shortly.
          </p>

          <div className="mt-10 space-y-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="mt-1 font-medium">help@premiumhva.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Call</p>
              <p className="mt-1 font-medium">(832) 736-0662</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Address</p>
              <p className="mt-1 font-medium">5900 Balcones Drive STE 100<br />Austin, Texas 78731 USA</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-8 grid sm:grid-cols-2 gap-4"
          >
            <Field label="First name" name="first" />
            <Field label="Last name" name="last" />
            <Field label="Email" name="email" type="email" full />
            <Field label="Phone / mobile" name="phone" full />
            <Field label="Subject" name="subject" full />
            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Your message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">{sent ? "Thanks — we'll be in touch shortly." : "We typically reply within one business day."}</p>
              <button type="submit" className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <SectionDivider />
    </PageFrame>
  );
}

function Field({ label, name, type = "text", full = false }: { label: string; name: string; type?: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input id={name} name={name} type={type} required className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

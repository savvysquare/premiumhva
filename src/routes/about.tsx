import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, Eyebrow, SectionDivider } from "@/components/PageFrame";
import execImg from "@/assets/executive-va.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PremiumHVA" },
      { name: "description", content: "Your partner in Executive and Healthcare Virtual Assistance. Customised support for leaders and clinicians." },
      { property: "og:title", content: "About — PremiumHVA" },
      { property: "og:description", content: "Facilitating seamless collaboration for executives and healthcare professionals." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageFrame>
      <section className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <Eyebrow>About PremiumHVA</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Your partner in Executive and Healthcare Virtual Assistance.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Facilitating seamless collaboration for executives and healthcare professionals — with customised
            support, dependable operations, and goal-oriented strategy.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img src={execImg} alt="Executive consultant" loading="lazy" width={1024} height={768} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { t: "Executive Virtual Assistance", d: "Customised administrative support that enhances leadership efficiency." },
          { t: "Healthcare Virtual Assistance", d: "Dedicated assistance for medical professionals for smooth operations." },
          { t: "Strategic Support", d: "Goal-oriented solutions that drive business and healthcare success." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border border-border p-6 bg-card">
            <h3 className="text-lg font-semibold">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            <Link to="/contact" className="mt-5 inline-flex text-sm font-medium text-primary hover:underline">Let's talk →</Link>
          </div>
        ))}
      </section>

      <SectionDivider />

      <section className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Stress-free business and healthcare management.
          </h2>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6">
          {[
            { t: "Custom Solutions", d: "Personalised virtual assistance for executives and clinicians." },
            { t: "Secure Operations", d: "Data confidentiality and compliance with industry standards." },
            { t: "Better Productivity", d: "Our EVAs and HVAs handle tasks so you can focus on growth." },
          ].map((b) => (
            <div key={b.t}>
              <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold">
                {b.t[0]}
              </div>
              <h4 className="mt-4 font-semibold">{b.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, Eyebrow, SectionDivider } from "@/components/PageFrame";
import heroImg from "@/assets/virtual-assistant-services.jpg";
import execImg from "@/assets/executive-virtual-assistant.jpg";
import healthImg from "@/assets/healthcare-virtual-assistant.jpg";
import socialImg from "@/assets/social-media-marketing-virtual-assistant.jpg";
import digitalImg from "@/assets/digital-marketing-virtual-assistant.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PremiumHVA — Top Executive & Healthcare Virtual Assistants" },
      {
        name: "description",
        content:
          "Top-tier Executive, Healthcare, Social Media, and Digital Marketing Virtual Assistants. Expert support for professionals and medical clinics. Transparent pricing.",
      },
      { property: "og:title", content: "PremiumHVA — Expert Virtual Assistant Services" },
      {
        property: "og:description",
        content:
          "Premium Executive, Healthcare, and Digital Marketing Virtual Assistants tailored to your business needs.",
      },
    ],
  }),
  component: HomePage,
});

function StatCard({
  value,
  label,
  sub,
  tone,
}: {
  value: string;
  label: string;
  sub: string;
  tone: "blue" | "green" | "amber" | "pink";
}) {
  const bg = {
    blue: "bg-stat-blue",
    green: "bg-stat-green",
    amber: "bg-stat-amber",
    pink: "bg-stat-pink",
  }[tone];
  return (
    <div className={`${bg} rounded-2xl p-7 flex flex-col justify-between min-h-[180px]`}>
      <div>
        <p className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{value}</p>
        <p className="mt-1 text-base font-medium text-foreground/80">{label}</p>
      </div>
      <p className="mt-6 text-sm text-foreground/70">{sub}</p>
    </div>
  );
}

function HomePage() {
  return (
    <PageFrame>
      {/* Hero — Crescent customer-story layout */}
      <section className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <Eyebrow>Virtual Assistance</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Executive & Healthcare Virtual Assistants, tailored to you.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            At PremiumHVA, we specialize in providing top-tier Executive Assistance and Virtual
            Healthcare Assistance for busy professionals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Let's talk
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-muted"
            >
              See pricing
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={heroImg}
              alt="Best virtual assistant services for executive and healthcare professionals"
              width={1280}
              height={960}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stat cards — Crescent signature */}
      <section className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          tone="blue"
          value="337k"
          label="Tasks completed"
          sub="Virtual healthcare tasks delivered to date"
        />
        <StatCard
          tone="green"
          value="90%"
          label="Efficiency lift"
          sub="Average improvement reported by clients"
        />
        <StatCard
          tone="amber"
          value="321k"
          label="Appointments scheduled"
          sub="Booked by our virtual assistants"
        />
        <StatCard
          tone="pink"
          value="930k"
          label="Hours saved"
          sub="Returned to professionals' calendars"
        />
      </section>

      <SectionDivider />

      {/* Pull quote */}
      <section className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Eyebrow>Why PremiumHVA</Eyebrow>
        </div>
        <div className="lg:col-span-8">
          <blockquote className="text-2xl md:text-3xl font-medium leading-snug tracking-tight">
            "PremiumHVA's Executive Virtual Assistants have transformed the way I manage my daily
            tasks. Their efficiency and professionalism have been a game-changer for my business."
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-sm font-semibold text-accent-foreground">
              MR
            </div>
            <div>
              <p className="text-sm font-medium">Michael R.</p>
              <p className="text-sm text-muted-foreground">CEO</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* What we do */}
      <section className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Two specialised teams. One reliable partner.
          </h2>
        </div>
        <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-border bg-card overflow-hidden">
            <img
              src={execImg}
              alt="Professional executive virtual assistant providing administrative support"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-primary font-medium">Executive</p>
              <h3 className="mt-2 text-xl font-semibold">Executive Virtual Assistants</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Smart EVAs providing expert support for administrative and operational efficiency,
                so leaders can focus on growth.
              </p>
            </div>
          </article>
          <article className="rounded-2xl border border-border bg-card overflow-hidden">
            <img
              src={healthImg}
              alt="Expert healthcare virtual assistant managing medical records and scheduling"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-primary font-medium">
                Healthcare
              </p>
              <h3 className="mt-2 text-xl font-semibold">Healthcare Virtual Assistants</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Hardworking HVAs supporting medical professionals with scheduling, records, billing
                and patient coordination.
              </p>
            </div>
          </article>
          <article className="rounded-2xl border border-border bg-card overflow-hidden">
            <img
              src={socialImg}
              alt="Social media marketing virtual assistant managing brand engagement"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-primary font-medium">Marketing</p>
              <h3 className="mt-2 text-xl font-semibold">Social Media Marketing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Strategic social media management and content creation to build your brand and
                engage your audience.
              </p>
            </div>
          </article>
          <article className="rounded-2xl border border-border bg-card overflow-hidden">
            <img
              src={digitalImg}
              alt="Digital marketing virtual assistant optimizing SEO and PPC campaigns"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-primary font-medium">Digital</p>
              <h3 className="mt-2 text-xl font-semibold">Digital Marketing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Comprehensive digital strategies including SEO and email marketing to scale your
                business effectively.
              </p>
            </div>
          </article>
        </div>
      </section>

      <SectionDivider />

      {/* Detail rows */}
      <section className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Executive Virtual Assistants (EVAs)
          </h3>
          <p className="mt-4 text-muted-foreground">
            Our EVAs handle essential tasks so executives can focus on strategic growth and
            productivity.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {[
              "Expert administrative support across calendars and inbox",
              "Customised solutions matched to your workflow",
              "Efficiency, discretion, and convenience by default",
            ].map((t) => (
              <li key={t} className="py-4 flex items-start gap-4">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-base">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      <section className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Healthcare Virtual Assistants (HVAs)
          </h3>
          <p className="mt-4 text-muted-foreground">
            Specialised assistance helping medical professionals run smoother operations and deliver
            better patient care.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {[
              "Expert healthcare support for clinical-adjacent tasks",
              "Personalised support for individual practitioners and teams",
              "Streamlined healthcare processes that save time and effort",
            ].map((t) => (
              <li key={t} className="py-4 flex items-start gap-4">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-base">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      <section className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Social Media Marketing
          </h3>
          <p className="mt-4 text-muted-foreground">
            Strategic social media management to build brand awareness and drive engagement across
            all platforms.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {[
              "Full-service management of LinkedIn, Instagram, and more",
              "Engagement-focused content creation and scheduling",
              "Audience growth and community management by experts",
            ].map((t) => (
              <li key={t} className="py-4 flex items-start gap-4">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-base">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      <section className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Digital Marketing</h3>
          <p className="mt-4 text-muted-foreground">
            Comprehensive digital growth strategies designed to increase your visibility and scale
            your results.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {[
              "Data-driven SEO strategies for search engine visibility",
              "Automated email marketing and funnel optimization",
              "Performance tracking and strategic growth consulting",
            ].map((t) => (
              <li key={t} className="py-4 flex items-start gap-4">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-base">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      {/* CTA card */}
      <section className="rounded-3xl bg-foreground text-background p-10 md:p-14">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <Eyebrow>
              <span className="text-background/60">Ready when you are</span>
            </Eyebrow>
            <h3 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              Get an assistant who already knows what you need.
            </h3>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

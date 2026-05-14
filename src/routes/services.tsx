import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, Eyebrow, SectionDivider } from "@/components/PageFrame";
import execImg from "@/assets/executive-virtual-assistant.jpg";
import healthImg from "@/assets/healthcare-virtual-assistant.jpg";
import socialImg from "@/assets/social-media-marketing-virtual-assistant.jpg";
import digitalImg from "@/assets/digital-marketing-virtual-assistant.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Expert Executive & Healthcare Virtual Assistants" },
      {
        name: "description",
        content:
          "Explore our specialized Virtual Assistant services, including Executive support, Healthcare coordination, Social Media management, and Digital Marketing strategies.",
      },
      { property: "og:title", content: "Expert Virtual Assistant Services — PremiumHVA" },
      {
        property: "og:description",
        content:
          "Customized Virtual Assistant solutions for business and healthcare professionals.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageFrame>
      <section>
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl">
          Two specialised practices, one operating standard.
        </h1>
      </section>

      <SectionDivider />

      <section className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-border">
          <img
            src={execImg}
            alt="Executive virtual assistant managing calendars and business operations"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
        <div className="lg:col-span-6">
          <p className="text-xs uppercase tracking-wider text-primary font-medium">Executive</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Executive Virtual Assistants
          </h2>
          <p className="mt-3 text-muted-foreground">
            Smart, dependable assistants for time-poor leaders. Calendar management, inbox triage,
            research, travel, and operational glue across your stack.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Calendar & inbox management",
              "Research & briefings",
              "Travel & expense",
              "Workflow integration",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                {t}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Hire an EVA
          </Link>
        </div>
      </section>

      <SectionDivider />

      <section className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 lg:order-2 overflow-hidden rounded-2xl border border-border">
          <img
            src={healthImg}
            alt="Healthcare virtual assistant supporting medical clinics and patient coordination"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
        <div className="lg:col-span-6 lg:order-1">
          <p className="text-xs uppercase tracking-wider text-primary font-medium">Healthcare</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Healthcare Virtual Assistants
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trained assistants supporting clinics and medical professionals with patient scheduling,
            records, billing, and day-to-day administration.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Patient scheduling & reminders",
              "Medical record management",
              "Billing & insurance support",
              "Front-desk coordination",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                {t}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Hire an HVA
          </Link>
        </div>
      </section>

      <SectionDivider />

      <section className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-border">
          <img
            src={socialImg}
            alt="Social media marketing expert managing brand presence and content strategy"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
        <div className="lg:col-span-6">
          <p className="text-xs uppercase tracking-wider text-primary font-medium">Marketing</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Social Media Marketing</h2>
          <p className="mt-3 text-muted-foreground">
            Elevate your brand with strategic social media management. We handle everything from
            content creation to community engagement.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Social media strategy & planning",
              "Content creation & curation",
              "Community management",
              "Analytics & reporting",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                {t}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Get started
          </Link>
        </div>
      </section>

      <SectionDivider />

      <section className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 lg:order-2 overflow-hidden rounded-2xl border border-border">
          <img
            src={digitalImg}
            alt="Digital marketing virtual assistant executing SEO and performance marketing strategies"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
        <div className="lg:col-span-6 lg:order-1">
          <p className="text-xs uppercase tracking-wider text-primary font-medium">Digital</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Digital Marketing</h2>
          <p className="mt-3 text-muted-foreground">
            Comprehensive digital growth strategies to scale your presence. From SEO to automated
            email campaigns, we drive results.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Search Engine Optimization (SEO)",
              "Pay-Per-Click (PPC) management",
              "Email marketing campaigns",
              "Funnel optimization",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                {t}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Learn more
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}

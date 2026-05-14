import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { PageFrame, Eyebrow, SectionDivider } from "@/components/PageFrame";

// ─── Route ──────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Hire a Virtual Assistant — Contact PremiumHVA Today" },
      {
        name: "description",
        content:
          "Ready to scale? Contact PremiumHVA to hire an expert Executive or Healthcare Virtual Assistant. We provide tailored solutions for busy professionals.",
      },
      { property: "og:title", content: "Contact PremiumHVA — Expert VA Support" },
      {
        property: "og:description",
        content:
          "Get in touch to find the perfect virtual assistant for your business or medical practice.",
      },
    ],
  }),
  component: ContactPage,
});

// ─── Types ───────────────────────────────────────────────────────────────────

interface Fields {
  first: string;
  last: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface Errors {
  first?: string;
  last?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const EMPTY: Fields = {
  first: "",
  last: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

// ─── Validation ───────────────────────────────────────────────────────────────

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.first.trim().length < 2) e.first = "First name is required";
  if (f.last.trim().length < 2) e.last = "Last name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Invalid email address";
  if (f.phone.trim().length < 5) e.phone = "Phone number is required";
  if (f.subject.trim().length < 3) e.subject = "Subject is required";
  if (f.message.trim().length < 10) e.message = "Message must be at least 10 characters";
  return e;
}

// ─── Component ───────────────────────────────────────────────────────────────

// Replace the hash below with your real Formspree form ID after creating a
// free form at https://formspree.io pointing to contact@premiumhva.com
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meenbabj";

function ContactPage() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // Update a single field value
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (touched[name as keyof Fields]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof Errors];
        return next;
      });
    }
  }

  // Mark field as touched on blur so inline errors appear
  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(fields);
    if (fieldErrors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof Errors] }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Run full validation
    const fieldErrors = validate(fields);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      // Mark all as touched so errors show
      setTouched({ first: true, last: true, email: true, phone: true, subject: true, message: true });
      return;
    }

    setStatus("sending");
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: `${fields.first} ${fields.last}`,
          email: fields.email,
          phone: fields.phone,
          subject: fields.subject,
          message: fields.message,
        }),
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        setStatus("sent");
        setFields(EMPTY);
        setErrors({});
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      clearTimeout(timeoutId);
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setFields(EMPTY);
    setErrors({});
    setTouched({});
  }

  // ── helpers ──
  const inputClass = (key: keyof Errors) =>
    `w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${errors[key] ? "border-destructive" : "border-border"
    }`;

  return (
    <PageFrame>
      <section className="grid lg:grid-cols-12 gap-10 items-start">
        {/* ── Left column ── */}
        <div className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Get in touch with PremiumHVA.
          </h1>
          <p className="mt-6 text-muted-foreground max-w-md">
            Have questions or need assistance? Tell us what you're working on and we'll get back to
            you shortly.
          </p>

          <div className="mt-10 space-y-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="mt-1 font-medium">contact@premiumhva.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Call</p>
              <p className="mt-1 font-medium">(832) 736-0662</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Address</p>
              <p className="mt-1 font-medium">
                5900 Balcones Drive STE 100
                <br />
                Austin, Texas 78731 USA
              </p>
            </div>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="lg:col-span-7">
          {status === "sent" ? (
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
              <h2 className="text-2xl font-semibold text-primary">Message Sent!</h2>
              <p className="mt-4 text-muted-foreground">
                Thanks for reaching out. We typically reply within one business day.
              </p>
              <button
                onClick={reset}
                className="mt-8 text-sm font-medium text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-border bg-card p-8 grid sm:grid-cols-2 gap-4"
            >
              {/* First name */}
              <div className="space-y-1">
                <label htmlFor="first" className="text-sm font-medium">
                  First name
                </label>
                <input
                  id="first"
                  name="first"
                  value={fields.first}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("first")}
                />
                {errors.first && (
                  <p className="text-xs text-destructive font-medium mt-1">{errors.first}</p>
                )}
              </div>

              {/* Last name */}
              <div className="space-y-1">
                <label htmlFor="last" className="text-sm font-medium">
                  Last name
                </label>
                <input
                  id="last"
                  name="last"
                  value={fields.last}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("last")}
                />
                {errors.last && (
                  <p className="text-xs text-destructive font-medium mt-1">{errors.last}</p>
                )}
              </div>

              {/* Email */}
              <div className="sm:col-span-2 space-y-1">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="text-xs text-destructive font-medium mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="sm:col-span-2 space-y-1">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone / mobile
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={fields.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("phone")}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive font-medium mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Subject */}
              <div className="sm:col-span-2 space-y-1">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={fields.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("subject")}
                />
                {errors.subject && (
                  <p className="text-xs text-destructive font-medium mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="sm:col-span-2 space-y-1">
                <label htmlFor="message" className="text-sm font-medium">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={fields.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive font-medium mt-1">{errors.message}</p>
                )}
              </div>

              {/* Footer row */}
              <div className="sm:col-span-2 flex items-center justify-between mt-4">
                <p className="text-xs text-muted-foreground">
                  We typically reply within one business day.
                </p>

                {status === "error" && (
                  <p className="text-xs text-destructive font-medium">
                    Something went wrong — please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-all"
                >
                  {status === "sending" ? (
                    <>
                      <span
                        className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <SectionDivider />
    </PageFrame>
  );
}

import { useState, type FormEvent } from "react";
import { Mail, ShieldAlert, Send, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

type Interest =
  | ""
  | "Pilot"
  | "Demo"
  | "Academic License"
  | "Partnership"
  | "Investment";

type FormState = {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
  interest: Interest;
  message: string;
};

const initial: FormState = {
  name: "",
  title: "",
  organization: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

const interests: Exclude<Interest, "">[] = [
  "Pilot",
  "Demo",
  "Academic License",
  "Partnership",
  "Investment",
];

function buildMailto(f: FormState) {
  const interest = f.interest || "General inquiry";
  const subject = `[Encountive] ${interest} — ${f.organization || f.name || "Inquiry"}`;
  const lines = [
    `Name: ${f.name}`,
    `Title: ${f.title}`,
    `Organization: ${f.organization}`,
    `Email: ${f.email}`,
    f.phone ? `Phone: ${f.phone}` : null,
    `Interested in: ${interest}`,
    "",
    "Message:",
    f.message || "(no message provided)",
  ].filter(Boolean);
  const body = lines.join("\n");
  return `mailto:contact@encountive.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const update =
    <K extends keyof FormState>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value as FormState[K] }));

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const href = buildMailto(form);
    window.location.href = href;
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's discuss your{" "}
            <span className="gradient-text">workforce readiness</span> goals
          </>
        }
        subtitle="Have questions about Encountive, pilots, or implementation? We're here to help. We typically respond within 1–2 business days."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <aside className="lg:col-span-2">
            <div className="card h-full">
              <h2 className="text-lg font-semibold text-brand-ink">Contact us</h2>
              <p className="mt-2 text-sm text-brand-muted">
                For general inquiries, product questions, or to learn more about
                our pilots and partnerships.
              </p>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-none text-brand-cyan" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                      Email
                    </dt>
                    <dd>
                      <a
                        href="mailto:contact@encountive.com"
                        className="font-medium text-brand-ink hover:text-brand-cyan"
                      >
                        contact@encountive.com
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 flex-none text-brand-cyan" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                      Security inquiries
                    </dt>
                    <dd>
                      <a
                        href="mailto:security@encountive.com"
                        className="font-medium text-brand-ink hover:text-brand-cyan"
                      >
                        security@encountive.com
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-none text-brand-cyan" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                      Response time
                    </dt>
                    <dd className="text-slate-300">1–2 business days</dd>
                  </div>
                </div>
              </dl>

              <p className="mt-6 text-xs text-brand-muted">
                For urgent security or procurement questions, please include
                your institution name and timeline in your message.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="card">
              <h2 className="text-lg font-semibold text-brand-ink">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-brand-muted">
                Fill out the form below and we'll get back to you. Submission
                opens your email client with the details pre-filled.
              </p>
              <p className="mt-3 rounded-xl bg-brand-cyan/15 px-4 py-3 text-xs text-brand-ink">
                <strong>Note:</strong> Do not include patient identifiers or
                PHI. This form is for training and procurement discussions only.
              </p>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <Field
                  id="name"
                  label="Full name"
                  value={form.name}
                  onChange={update("name")}
                  required
                  autoComplete="name"
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    id="title"
                    label="Title"
                    value={form.title}
                    onChange={update("title")}
                    autoComplete="organization-title"
                  />
                  <Field
                    id="organization"
                    label="Organization"
                    value={form.organization}
                    onChange={update("organization")}
                    autoComplete="organization"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    id="email"
                    label="Work email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    required
                    autoComplete="email"
                  />
                  <Field
                    id="phone"
                    label="Phone (optional)"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    autoComplete="tel"
                    hint="Email is usually best for scheduling."
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-brand-ink"
                  >
                    Interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={form.interest}
                    onChange={update("interest")}
                    className="mt-1 block w-full rounded-xl border border-white/15 bg-brand-surface-2 px-4 py-3 text-sm text-brand-ink focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/30"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {interests.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-ink"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    required
                    className="mt-1 block w-full rounded-xl border border-white/15 bg-brand-surface-2 px-4 py-3 text-sm text-brand-ink focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/30"
                    placeholder="Tell us about your program, unit, or goals — no PHI, please."
                  />
                </div>

                <button type="submit" className="btn-primary mt-2">
                  <Send className="h-4 w-4" />
                  Send request
                </button>

                {submitted && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="mt-3 rounded-xl border border-white/10 bg-brand-surface-2 p-4 text-sm text-slate-300"
                  >
                    Your email client should have opened with the details
                    pre-filled. If it didn't,{" "}
                    <a
                      href={buildMailto(form)}
                      className="font-semibold text-brand-cyan underline"
                    >
                      click here to open it
                    </a>
                    {" "}or email{" "}
                    <a
                      href="mailto:contact@encountive.com"
                      className="font-semibold text-brand-cyan underline"
                    >
                      contact@encountive.com
                    </a>{" "}
                    directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  hint?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  required,
  type = "text",
  autoComplete,
  hint,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-brand-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="mt-1 block w-full rounded-xl border border-white/15 bg-brand-surface-2 px-4 py-3 text-sm text-brand-ink focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/30"
      />
      {hint && <p className="mt-1 text-xs text-brand-muted">{hint}</p>}
    </div>
  );
}

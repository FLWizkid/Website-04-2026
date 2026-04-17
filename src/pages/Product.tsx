import { Link } from "react-router-dom";
import {
  Brain,
  ClipboardList,
  MessagesSquare,
  BarChart3,
  Layers,
  Boxes,
  BookOpen,
  Gauge,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const steps = [
  {
    icon: MessagesSquare,
    title: "1. Scenario practice",
    body: "Simulated patient and persona encounters mirror real clinical calls and branch when learners miss safety gates or hit escalation triggers.",
  },
  {
    icon: ClipboardList,
    title: "2. Automated scoring",
    body: "Every action and documentation entry is audited against scope and safety rubrics. The system flags misses like skipped identity checks or out-of-scope advice.",
  },
  {
    icon: Brain,
    title: "3. Targeted coaching",
    body: "Learners get immediate feedback and adaptive follow-ups — microlearning or retry with adjusted difficulty — to close specific gaps.",
  },
  {
    icon: BarChart3,
    title: "4. Evidence & analytics",
    body: "Dashboards and exports show competency progress, attempt history, and objective scores for compliance and program QA.",
  },
];

const modules = [
  {
    icon: Layers,
    title: "Encountive Sim",
    body: "Adaptive scenario engine with branching logic, scope guardrails, and rubric-based scoring.",
  },
  {
    icon: BookOpen,
    title: "Encountive Learn",
    body: "Microlearning modules automatically served to close specific competency gaps surfaced in sim.",
  },
  {
    icon: MessagesSquare,
    title: "Encountive Tutor",
    body: "AI-guided coaching with structured debrief so every attempt turns into targeted growth.",
  },
  {
    icon: Gauge,
    title: "Encountive Analytics",
    body: "Evidence and insights: completion, repeats, rubric deltas, cohort views, time-to-competence.",
  },
];

const workflows = [
  "Virtual rooming and identity verification",
  "Consent and privacy confirmation",
  "Red-flag recognition and scope-aware escalation",
  "Documentation fidelity in the EHR",
  "Remote HIPAA behaviors",
  "Team communication and handoffs",
];

const differentiators = [
  {
    title: "Scope guardrails built-in",
    body: "Scenario logic prevents or flags out-of-scope actions — purpose-built for MA, allied health, and expanding role boundaries.",
  },
  {
    title: "Rubric-based automation",
    body: "Objective, repeatable scoring of workflow steps and documentation fidelity. No scarce human evaluators required.",
  },
  {
    title: "Adaptive remediation",
    body: "The system selects the next best scenario and micro-coaching based on each learner's error pattern.",
  },
  {
    title: "Evidence first",
    body: "Everything is logged for outcomes reporting and improvement cycles — and survives committee review.",
  },
];

export default function Product() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title={
          <>
            The Complete{" "}
            <span className="gradient-text">Adaptive Clinical Learning</span>{" "}
            Platform
          </>
        }
        subtitle="Encountive is an AI-native simulation platform that coaches real workflows, audits performance against rubrics, and adapts remediation automatically — across web, mobile, and XR."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/solutions/healthcare" className="btn-secondary">
              See solutions
            </Link>
          </>
        }
      />

      <Section
        eyebrow="How it works"
        title="Simple workflow, measurable outcomes"
        subtitle="Designed to give your team a scenario to practice, then review results and feedback without rebuilding your evaluation process each time."
      >
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }) => (
            <li key={title} className="card h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10">
                <Icon className="h-5 w-5 text-brand-cyan" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        tone="muted"
        eyebrow="What's inside"
        title="The Encountive Engine™"
        subtitle="Adaptive clinical intelligence that turns real workflows into coached practice. Four modules, one engine, everything logged."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {modules.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-brand-surface-2 p-8 md:p-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">XR-ready</p>
              <h3 className="mt-3 text-2xl font-bold text-brand-ink">
                Phone-based AR/VR for hands-on skills — when you're ready
              </h3>
              <p className="mt-3 text-brand-muted">
                Start on web and mobile for reach. Plug in XR modules — with
                mastery rules and telemetry — where immersion truly moves the
                needle.
              </p>
            </div>
            <Boxes className="h-16 w-16 text-brand-cyan" aria-hidden />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Workflows covered first"
        title="Real healthcare moments, turned into coached practice"
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {workflows.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-brand-surface-2 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-cyan" />
              <span className="text-sm text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone="muted"
        eyebrow="Why this is different"
        title="Built so practice is safe, auditable, and worth running again"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="card h-full">
              <h3 className="text-lg font-semibold text-brand-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Compliance, safety & accessibility"
        title="Designed for review and for humans"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-ink">
              Instructional, non-clinical
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              Content aligned to delegated duties and scope. No diagnosis or
              treatment training.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-ink">Accessibility</h3>
            <p className="mt-2 text-sm text-brand-muted">
              Captions, transcripts, WCAG-compliant delivery, alt text, keyboard
              navigation.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-ink">
              CE-ready process templates
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              For accredited providers (NCPD / Joint Accreditation) and
              recordkeeping.
            </p>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Want to see a scenario → coaching → analytics walkthrough?"
        subtitle="We'll tailor the demo to your workflows and share how we'd scope a pilot to your priorities."
        primaryLabel="Request a demo"
        secondaryLabel="Explore partnership"
      />
    </>
  );
}

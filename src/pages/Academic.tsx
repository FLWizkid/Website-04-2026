import { Link } from "react-router-dom";
import {
  GraduationCap,
  School,
  FlaskConical,
  BookOpenCheck,
  ClipboardCheck,
  LineChart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const segments = [
  {
    icon: GraduationCap,
    title: "Nursing & MA programs",
    body: "Align course objectives to scenario rubrics and watch competency growth in the data — not just in debriefs.",
  },
  {
    icon: School,
    title: "Vocational & allied health",
    body: "Scope-aware practice for MA, allied health, and expanding role boundaries, with guardrails built into the scenario engine.",
  },
  {
    icon: FlaskConical,
    title: "Simulation centers",
    body: "Extend manikin-based sim with repeatable, asynchronous practice that standardizes evaluation across cohorts.",
  },
];

const outcomes = [
  {
    icon: BookOpenCheck,
    title: "Better prepared graduates",
    body: "Repeatable practice on the moments that matter: identity verification, red-flag recognition, documentation fidelity, scope-of-practice boundaries.",
  },
  {
    icon: ClipboardCheck,
    title: "Competency tracking",
    body: "Rubric-based scoring generates objective, comparable evidence of growth across cohorts and semesters.",
  },
  {
    icon: LineChart,
    title: "Program-level evidence",
    body: "Attempt histories, heatmaps of common misses, and time-to-competence insights you can use for accreditation.",
  },
];

const objectives = [
  "Complete a standardized virtual intake with identity verification and privacy confirmation",
  "Communicate with empathy in difficult calls",
  "Recognize red flags and escalate within scope",
  "Document patient-reported information verbatim in the EHR",
  "Maintain HIPAA-aligned behaviors in remote environments",
];

export default function Academic() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · Academic"
        title={
          <>
            Better prepared graduates — with{" "}
            <span className="gradient-text">evidence programs can defend</span>
          </>
        }
        subtitle="Encountive aligns to your course objectives and rubrics so every learner gets consistent practice, targeted coaching, and measurable growth — without expanding faculty load."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request an academic demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/roi" className="btn-secondary">
              See program outcomes
            </Link>
          </>
        }
      />

      <Section eyebrow="Who we serve" title="Designed around program realities">
        <div className="grid gap-5 md:grid-cols-3">
          {segments.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10">
                <Icon className="h-5 w-5 text-brand-cyan" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Program outcomes"
        title="What Encountive is designed to deliver for programs"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {outcomes.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card h-full">
              <Icon className="h-6 w-6 text-brand-cyan" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-brand-surface-2 p-8 md:p-10">
          <p className="eyebrow">Academic cohort example</p>
          <h3 className="mt-3 text-2xl font-bold text-brand-ink">
            3.88x ROI with{" "}
            <span className="gradient-text">$122k in modeled benefit</span> for a 200-student cohort
          </h3>
          <p className="mt-3 max-w-2xl text-brand-muted">
            Modeled reductions in faculty prep time, improved pass rates, and
            cohort-level competency growth. Full assumptions on our ROI page.
          </p>
          <Link
            to="/roi"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan hover:text-brand-amber"
          >
            See the ROI breakdown <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Proof of learning"
        title="Objectives that map directly to your syllabus"
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {objectives.map((item) => (
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
        eyebrow="Licensing approach"
        title="Annual institutional licensing — scoped to your program"
        subtitle="Pricing scales with learner volume and deployment scope. We start with pilots so programs can evaluate outcomes before committing to scale."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-ink">
              Pilot-based entry
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              Pilots with clear success criteria and conversion terms.
              Faculty time saved, competency deltas, and outcomes briefs you can
              share with your committee.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-ink">
              Drop-in accreditation support
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              Objectives, time-on-task, assessment blueprints, evaluation
              templates, and recordkeeping SOPs to streamline provider approval.
            </p>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Bring Encountive into your program"
        subtitle="Share your objectives and rubrics — we'll map scenarios, outline a pilot, and define the outcomes we'd measure together."
        primaryLabel="Request academic demo"
        secondaryLabel="Map my curriculum"
      />
    </>
  );
}

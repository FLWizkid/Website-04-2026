import { Link } from "react-router-dom";
import {
  Hospital,
  HeartPulse,
  Home as HomeIcon,
  ShieldCheck,
  Clock,
  TrendingDown,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const segments = [
  {
    icon: Hospital,
    title: "Hospitals & health systems",
    body: "Standardize coaching across units and campuses. Surface error patterns before they reach patients.",
  },
  {
    icon: HeartPulse,
    title: "Clinics & staffing agencies",
    body: "Shorten time-to-competence for new hires and traveling staff with rubric-based practice and targeted remediation.",
  },
  {
    icon: HomeIcon,
    title: "Hospice & home health",
    body: "Rehearse safety, consent, and communication for care delivered in the living room — with guidance that adapts to each choice.",
  },
];

const outcomes = [
  {
    icon: TrendingDown,
    title: "Reduce turnover",
    body: "Modeled turnover savings of up to $150,000 per cohort by improving onboarding confidence and role readiness.",
  },
  {
    icon: ShieldCheck,
    title: "Improve safety",
    body: "Rubric-based scoring flags missed identity checks, unsafe documentation, and out-of-scope advice — before they become incidents.",
  },
  {
    icon: Clock,
    title: "Save training time",
    body: "Modeled 40% reduction in faculty prep time. Repeatable, automated scoring replaces manual rubric review.",
  },
];

const tiers = [
  {
    title: "Unit",
    body: "Department-level deployments for single units or rural facilities that want a focused slice of practice.",
    bullets: [
      "Scoped scenario library for your workflows",
      "Structured debrief and exportable evidence",
      "Faculty & preceptor time savings",
    ],
  },
  {
    title: "Enterprise Core",
    body: "Multi-unit or multi-site rollouts with cohort-level analytics and review-ready reporting.",
    bullets: [
      "Centralized admin and cohort management",
      "Rubric alignment to institutional policies",
      "Committee-ready outcomes reporting",
    ],
  },
  {
    title: "Enterprise Plus",
    body: "System-wide implementations with custom integrations and dedicated partnership.",
    bullets: [
      "Custom scenario development",
      "Premium analytics & integrations",
      "Dedicated implementation and success team",
    ],
  },
];

const addOns = [
  "Custom scenario content packs",
  "Premium analytics dashboards",
  "Professional services & implementation",
  "XR modules when hands-on skills benefit from immersion",
];

export default function Healthcare() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · Healthcare"
        title={
          <>
            Safer teams, stronger outcomes — across{" "}
            <span className="gradient-text">hospitals, clinics, and home-based care</span>
          </>
        }
        subtitle="Encountive scales clinical practice and evidence for the teams delivering care: standardized coaching, rubric-based scoring, and outcomes you can defend in committee."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Start a pilot <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/roi" className="btn-secondary">
              See the ROI math
            </Link>
          </>
        }
      />

      <Section eyebrow="Who we serve" title="Purpose-built for clinical operations">
        <div className="grid gap-5 md:grid-cols-3">
          {segments.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient-soft">
                <Icon className="h-5 w-5 text-brand-blue" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Outcomes, not promises"
        title="What Encountive is designed to deliver"
        subtitle="Every figure below is about savings and outcomes — never a price. Your pilot scope and pricing are built around your footprint."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {outcomes.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card h-full">
              <Icon className="h-6 w-6 text-brand-blue" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
          <p className="eyebrow">Hospital cohort example</p>
          <h3 className="mt-3 text-2xl font-bold text-brand-ink">
            Up to <span className="gradient-text">$293k in annual benefit</span> modeled for a 100-nurse cohort
          </h3>
          <p className="mt-3 max-w-2xl text-slate-600">
            Projected 4.0x ROI with payback around 1.3 months. Based on modeled
            reductions in turnover, training hours, and adverse event risk. Full
            assumptions on our ROI page.
          </p>
          <Link
            to="/roi"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-orange"
          >
            See the full ROI breakdown <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Deployment tiers"
        title="Scope matches your footprint, not a price sheet"
        subtitle="Each customer's needs differ. We map deployment, success criteria, and support to what actually fits — then talk numbers together."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.title} className="card h-full">
              <h3 className="text-lg font-semibold text-brand-ink">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{t.body}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-blue" />
                    <span className="text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Add-ons available: {addOns.join(" • ")}.
        </p>
      </Section>

      <Section
        tone="muted"
        eyebrow="Pilot doctrine"
        title="60–90 day pilots with outcomes you can defend"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-ink">Structure</h3>
            <p className="mt-2 text-sm text-slate-600">
              Baseline → post outcomes, faculty time saved, error reduction, and
              learner competency gains. Conversion incentives on success.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-ink">Evidence plan</h3>
            <p className="mt-2 text-sm text-slate-600">
              Scenario rubrics, automated logs, and evaluation reports suitable
              for QI and credentialing.
            </p>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Ready to scope a healthcare pilot?"
        subtitle="Tell us about your units, workflows, and goals. We'll come back with a tailored pilot plan and the outcomes we'd measure together."
        primaryLabel="Start a pilot"
        secondaryLabel="Talk to our team"
      />
    </>
  );
}

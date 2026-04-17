import { Link } from "react-router-dom";
import {
  TrendingDown,
  Clock,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const headline = [
  { value: "4.0x", label: "Projected ROI for hospital cohorts" },
  { value: "Up to $150,000", label: "Turnover cost savings per year" },
  { value: "~1.3 months", label: "Modeled payback period" },
  { value: "40%", label: "Reduction in faculty prep time" },
];

const hospitalBreakdown = [
  {
    icon: TrendingDown,
    title: "Turnover savings",
    body: "Better-onboarded staff stay longer. Modeled savings of up to $150,000 from improved first-year retention.",
  },
  {
    icon: Clock,
    title: "Training hours saved",
    body: "Repeatable, automated scoring replaces manual rubric review — modeled 40% reduction in faculty prep time.",
  },
  {
    icon: ShieldCheck,
    title: "Adverse events avoided",
    body: "Rubric-based scoring surfaces safety gaps in practice, before they reach patients. Exportable evidence for QI.",
  },
];

const academicBreakdown = [
  {
    title: "Faculty time saved",
    body: "Structured coaching and automated evaluation free educators to focus on the moments that need human judgment.",
  },
  {
    title: "Cohort-level evidence",
    body: "Attempt histories, rubric deltas, and time-to-competence insights you can use for accreditation.",
  },
  {
    title: "Learner readiness",
    body: "Repeatable practice on the moments that matter — modeled to improve graduate readiness and pass rates.",
  },
];

export default function ROI() {
  return (
    <>
      <PageHero
        eyebrow="ROI"
        title={
          <>
            Proven <span className="gradient-text">return on investment</span>
          </>
        }
        subtitle="We frame every figure on this page as savings or outcomes — never as price. Your pilot and deployment are scoped and costed together, because every customer's needs differ."
        actions={
          <Link to="/contact" className="btn-primary">
            Calculate your ROI — contact us <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />

      <Section
        eyebrow="Headline numbers"
        title="Savings leaders can model before day one"
        subtitle="Based on modeled potential outcomes and academic program implementations."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {headline.map((stat) => (
            <div key={stat.label} className="card flex h-full flex-col">
              <span className="gradient-text text-3xl font-extrabold md:text-4xl">
                {stat.value}
              </span>
              <p className="mt-3 text-sm text-brand-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Enterprise example"
        title="100-nurse hospital cohort"
        subtitle="Illustrative modeled outcomes — your pilot scope and success criteria are defined together."
      >
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-brand-gradient p-8 text-white shadow-soft">
              <p className="text-sm uppercase tracking-widest text-white/80">
                Modeled annual benefit
              </p>
              <p className="mt-3 text-5xl font-extrabold">$293,088</p>
              <p className="mt-4 text-sm text-white/90">
                4.0x ROI · ~1.3 month payback · Turnover, training hours, and
                adverse event reductions combined.
              </p>
              <p className="mt-6 text-xs text-white/70">
                Illustrative figure. Benefit — not price. Pilot scope and
                pricing are built around your footprint.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:col-span-3">
            {hospitalBreakdown.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card h-full">
                <Icon className="h-6 w-6 text-brand-cyan" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-brand-ink">{title}</h3>
                <p className="mt-2 text-sm text-brand-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Academic example"
        title="200-student program"
        subtitle="Illustrative modeled outcomes for a vocational or nursing program."
      >
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-brand-surface p-8 shadow-soft">
              <p className="eyebrow">Modeled annual benefit</p>
              <p className="mt-3 text-5xl font-extrabold gradient-text">
                $122,000
              </p>
              <p className="mt-4 text-sm text-brand-muted">
                3.88x ROI for a 200-student cohort. Faculty time savings,
                improved readiness, and cohort-level competency evidence.
              </p>
              <p className="mt-6 text-xs text-brand-muted">
                Illustrative figure. Benefit — not price.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:col-span-3">
            {academicBreakdown.map((item) => (
              <div key={item.title} className="card h-full">
                <h3 className="text-lg font-semibold text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-brand-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="What we measure in a pilot"
        title="Outcomes a committee will defend"
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            "Time-to-competence for new hires and students",
            "Faculty and preceptor time saved per cohort",
            "Reduction in rubric misses and safety gaps",
            "Documentation fidelity and escalation accuracy",
            "Learner confidence and perceived preparedness",
            "Retention and first-year turnover deltas",
          ].map((m) => (
            <li
              key={m}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-brand-surface p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-cyan" />
              <span className="text-sm text-slate-300">{m}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Future outcomes"
        title="Outcome-based contracts — on the roadmap"
      >
        <div className="rounded-3xl border border-white/10 bg-brand-surface p-8 md:p-10">
          <Sparkles className="h-6 w-6 text-brand-cyan" aria-hidden />
          <h3 className="mt-4 text-xl font-semibold text-brand-ink">
            Contracts tied to outcomes, not features
          </h3>
          <p className="mt-3 max-w-2xl text-brand-muted">
            As our evidence base matures, we're preparing outcome-based
            contracts tied to the measures your leaders already track — so value
            and cost move together.
          </p>
        </div>
      </Section>

      <CtaBanner
        title="Want your own ROI model?"
        subtitle="Share a bit about your footprint and we'll map modeled savings and outcomes to your scope — before you commit to a pilot."
        primaryLabel="Talk to us"
        secondaryLabel="Plan a pilot"
      />
    </>
  );
}

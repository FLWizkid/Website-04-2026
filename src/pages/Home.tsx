import { Link } from "react-router-dom";
import {
  Building2,
  Hospital,
  GraduationCap,
  Users,
  ShieldCheck,
  Sparkles,
  LineChart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const audiences = [
  {
    icon: GraduationCap,
    title: "Nursing Programs",
    subtitle: "Student training + assessment",
    body: "Align course objectives to scenario rubrics and watch competency growth in the data, not just in debriefs.",
  },
  {
    icon: Hospital,
    title: "Hospital Systems",
    subtitle: "Staff training + competency",
    body: "Standardize coaching across cohorts and sites with exportable evidence your leaders can defend.",
  },
  {
    icon: Building2,
    title: "Clinical Training Centers",
    subtitle: "Scenario delivery + evaluation",
    body: "Scale simulation beyond manikin-based sessions with repeatable, measurable practice.",
  },
  {
    icon: Users,
    title: "Workforce Development",
    subtitle: "Onboarding + readiness",
    body: "Shorten time-to-competence for new hires and traveling staff with rubric-based practice and targeted remediation.",
  },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Rubric-first design",
    body: "Every scenario is anchored to clear competencies. Scoring is transparent and auditable — never a black box.",
  },
  {
    icon: Sparkles,
    title: "Adaptive remediation",
    body: "The platform recognizes error patterns and serves the next best practice: a targeted micro-lesson, branched redo, or harder case.",
  },
  {
    icon: LineChart,
    title: "Evidence at scale",
    body: "Attempt histories, heatmaps of common misses, and time-to-competence insights you can use for QI and accreditation.",
  },
];

const roiStats = [
  { value: "4.0x", label: "Projected ROI for hospital cohorts" },
  { value: "Up to $150,000", label: "Turnover cost savings per year" },
  { value: "~1.3 months", label: "Modeled payback period" },
  { value: "40%", label: "Reduction in faculty prep time" },
];

const beforeAfter = [
  {
    before: "Feedback quality varies by instructor and time pressure",
    after: "Structured coaching and analytics so learners get consistent guidance",
  },
  {
    before: "Hard to prove outcomes beyond anecdotes",
    after: "Exportable evidence: completion, repeats, rubric deltas, cohort views",
  },
  {
    before: "Limited practice hours and scarce simulated patients",
    after: "Repeatable encounters anywhere — desktop, mobile, or XR",
  },
  {
    before: "Rollouts stall on security and governance questions",
    after: "Implementation plan aligned to your review process and policies",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-glow">
        <div className="container-xl grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-center">
          <div className="animate-fade-up lg:col-span-7">
            <p className="eyebrow">AI-adaptive clinical simulation</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-brand-ink md:text-5xl lg:text-6xl">
              AI-Powered Clinical Simulation for{" "}
              <span className="gradient-text">Safer, More Confident</span>{" "}
              Healthcare Teams
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-brand-muted md:text-xl">
              Encountive improves communication, decision-making, emotional
              resilience, and clinical safety across the healthcare workforce.
              Powered by The Encountive Engine™, your adaptive clinical
              intelligence engine.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Plan a pilot <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/product" className="btn-secondary">
                About the product
              </Link>
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-widest text-brand-muted">
              Training only — not clinical decision support.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-surface-2 p-8 shadow-soft">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand-gradient opacity-20 blur-3xl"
              />
              <p className="eyebrow">The Encountive Engine™</p>
              <h2 className="mt-2 text-xl font-bold text-brand-ink">
                Scenario → coaching → evidence, at scale
              </h2>
              <ul className="mt-6 space-y-4 text-sm">
                {[
                  "Branching scenarios anchored to your rubrics",
                  "Immediate, targeted coaching after every attempt",
                  "Cohort-level analytics leaders can defend",
                  "Web and mobile today; XR when immersion matters",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-cyan" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section
        tone="muted"
        eyebrow="Who it's for"
        title="Built for the teams delivering care and the programs training them"
        subtitle="We're designing Encountive around real deployment realities: faculty workloads, review-ready reporting, and scope-aware practice."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ icon: Icon, title, subtitle, body }) => (
            <div key={title} className="card flex h-full flex-col">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10">
                <Icon className="h-5 w-5 text-brand-cyan" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{title}</h3>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-muted">
                {subtitle}
              </p>
              <p className="mt-3 text-sm text-brand-muted">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What could change"
        title="When Encountive is in the loop"
        subtitle="A glimpse of the shift we're designing for — from inconsistent practice to evidence your leaders can defend."
      >
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-1 bg-white/5 text-xs font-semibold uppercase tracking-widest text-brand-muted md:grid-cols-2">
            <div className="px-6 py-4">Before</div>
            <div className="hidden px-6 py-4 md:block">Potential outcomes</div>
          </div>
          <ul className="divide-y divide-white/10 bg-brand-surface-2">
            {beforeAfter.map((row, idx) => (
              <li key={idx} className="grid grid-cols-1 md:grid-cols-2">
                <div className="border-r border-white/10 p-6 text-brand-muted">
                  {row.before}
                </div>
                <div className="bg-brand-cyan/10 p-6 text-brand-ink">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-cyan md:hidden">
                    Potential outcome
                  </span>
                  {row.after}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Why it's different"
        title="Practice that's safe, coached, and grown"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {differentiators.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card h-full">
              <Icon className="h-6 w-6 text-brand-cyan" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Projected ROI outcomes"
        title="Savings leaders can model before day one"
        subtitle="Based on modeled potential outcomes and academic program implementations. Full assumptions on our ROI page."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roiStats.map((stat) => (
            <div
              key={stat.label}
              className="card flex h-full flex-col items-start"
            >
              <span className="gradient-text text-3xl font-extrabold md:text-4xl">
                {stat.value}
              </span>
              <p className="mt-3 text-sm text-brand-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/roi"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan hover:text-brand-amber"
          >
            See the full ROI breakdown <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Early traction"
        title="Early, on purpose"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-ink">
              In development with clinical experts
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              We're building Encountive with simulation educators, nurse leaders,
              and academic programs — so scenarios, rubrics, and evidence match
              how your teams actually work.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-ink">
              Preparing pilots — limited spots
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              We run scoped 60–90 day pilots with baseline-to-post measurement,
              conversion terms on success, and evaluation reports suitable for QI
              and credentialing.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan hover:text-brand-amber"
            >
              Plan a pilot <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}

import { Link } from "react-router-dom";
import { HeartHandshake, ShieldCheck, LineChart, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const values = [
  {
    icon: HeartHandshake,
    title: "Human-centered",
    body: "We prioritize communication quality, empathy, and clinical judgment under pressure.",
  },
  {
    icon: ShieldCheck,
    title: "Governable",
    body: "We design for security review, privacy constraints, and institutional workflows.",
  },
  {
    icon: LineChart,
    title: "Measurable",
    body: "Practice is only useful if teams can see progress and defend outcomes.",
  },
  {
    icon: Users,
    title: "Designed for faculty",
    body: "We reduce overhead — assignment, review, and coaching should be realistic to run.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Smarter training for{" "}
            <span className="gradient-text">safer, more human care</span>
          </>
        }
        subtitle="We're building Encountive, an AI-adaptive simulation platform for clinical communication, empathy, and decision-making. The Encountive Engine™ is the AI engine that powers coaching and feedback."
      />

      <Section eyebrow="Our story" title="Built for the hardest parts of care">
        <div className="grid gap-8 lg:grid-cols-5">
          <p className="text-lg text-slate-600 lg:col-span-3">
            Clinical teams are expected to navigate conflict, grief, uncertainty,
            and high-stakes conversations — often with limited practice and
            inconsistent feedback. Encountive is designed to close that gap with
            simulation that feels real, supports repeat practice, and makes
            growth measurable through coaching and reporting.
          </p>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <p className="eyebrow">Purpose</p>
            <p className="mt-2 text-brand-ink">
              Elevate the human side of healthcare — communication, judgment,
              empathy, resilience.
            </p>
            <p className="eyebrow mt-6">Mission</p>
            <p className="mt-2 text-brand-ink">
              AI-adaptive simulation + XR with real-time analytics so every
              learner improves and every leader sees the impact.
            </p>
            <p className="eyebrow mt-6">Stage</p>
            <p className="mt-2 text-brand-ink">
              Pre-seed. Building toward MVP. Preparing scoped pilots with
              clinical enterprises and academic programs.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted" eyebrow="Values" title="Principles that guide product, research, and partnerships">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, body }) => (
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

      <Section eyebrow="A letter from our founder" title="Why we're building Encountive">
        <div className="grid gap-10 lg:grid-cols-5">
          <aside className="lg:col-span-2">
            <div className="card h-full">
              <div className="flex items-center gap-4">
                <div
                  aria-hidden
                  className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient text-xl font-extrabold text-white"
                >
                  MT
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">
                    Melissa Jo Tully
                  </p>
                  <p className="text-xs text-slate-500">BSN, MHPE, RN-BC</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                CEO, Founder, and Chief Simulation Architect. Clinical expertise
                in simulation-based training and healthcare education.
              </p>
            </div>
          </aside>

          <article className="prose-slate max-w-none space-y-4 text-slate-700 lg:col-span-3">
            <p>
              I've spent my career in and around healthcare simulation. First as
              a nurse at the bedside, then as a clinical educator designing
              scenarios to help people practice the hardest parts of care.
              Across roles and settings, one truth kept repeating: skills are
              taught through practice and feedback. We teach the science well,
              but miss the judgment, communication, teamwork, documentation,
              and escalation. The human systems where safety actually happens
              don't get enough reps.
            </p>
            <p>
              Simulation has been our best tool to close that gap. Yet even
              simulation struggles to keep up with today's reality: teams are
              stretched, expert time is scarce, competencies keep multiplying,
              and learners are everywhere — on the unit, in the clinic, on the
              road, at home.
            </p>
            <p>
              <strong>That is why I'm building Encountive.</strong>
            </p>
            <p>
              Encountive is my answer to a simple question: how do we give every
              healthcare worker safe, repeatable practice on the moments that
              matter — anytime, anywhere — and prove that it worked?
            </p>
            <p>
              We're creating an AI-adaptive simulation platform that honors the
              best of our field and extends it. Not replacing people but
              amplifying them. Educators still set the goals, define the
              rubrics, and decide what "good" looks like. Encountive handles
              the scale: it turns real workflows into interactive practice,
              gives immediate, targeted coaching, and produces evidence leaders
              can trust.
            </p>

            <p className="font-semibold text-brand-ink">Picture this:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A new ICU nurse practicing a rapid assessment that branches if
                they miss a red flag, then delivers coaching and a chance to try
                again until the behavior sticks.
              </li>
              <li>
                An ED team rehearsing crisis resource management with
                closed-loop communication that's scored objectively, not
                anecdotally.
              </li>
              <li>
                A home-health clinician navigating safety and consent in a
                living room, with guidance that adapts to each choice.
              </li>
              <li>
                A pharmacy team running high-risk dispensing scenarios with
                near-miss capture and system-level insights.
              </li>
              <li>
                A telehealth cohort of MAs, RNs, and APPs standardizing identity
                checks, privacy, documentation fidelity, and scope-aware
                escalation.
              </li>
              <li>
                A university program aligning course objectives to scenario
                rubrics and seeing competency growth in the data, not just in
                debriefs.
              </li>
            </ul>

            <p className="font-semibold text-brand-ink">
              Under the hood, Encountive does a few things differently:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Rubric-first design.</strong> Every scenario is anchored
                to clear competencies. Scoring is transparent and repeatable, so
                results are auditable — not a black box.
              </li>
              <li>
                <strong>Adaptive remediation.</strong> The platform recognizes
                error patterns and serves the next best practice: a targeted
                micro-lesson, a branched redo, or a harder case.
              </li>
              <li>
                <strong>Evidence at scale.</strong> Attempt histories, heatmaps
                of common misses, time-to-competence insights you can use for
                QI, accreditation, and staffing decisions.
              </li>
              <li>
                <strong>Flexible modality.</strong> Start on web and mobile for
                reach; plug in XR modules where hands-on skills truly benefit
                from immersion.
              </li>
            </ul>

            <p>
              This is not about chasing shiny tech. It's about dignity and
              safety.
            </p>
            <p>
              Dignity for the learner who deserves more than "watch a video,
              sign the attestation." Safety for patients who assume we've
              practiced the exact conversation and coordination that their care
              requires. And relief for educators and leaders who need to scale
              what works without burning out the people who make it work.
            </p>
            <p>
              We are early, on purpose. We're partnering with clinical
              enterprises and academic programs across disciplines to run
              focused pilots. Each pilot chooses a meaningful slice — med-surg
              deterioration, ED teamwork, medication safety, virtual care
              workflows, peri-op handoffs, you name it — and measures what
              matters: fewer errors, stronger communication, faster
              time-to-competence, and time saved for faculty and preceptors. If
              it's not making your teams safer and your leaders wiser, it's not
              good enough.
            </p>

            <p className="font-semibold text-brand-ink">
              Our long-term vision is an integrated learning stack for healthcare:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Adaptive conversation and decision practice for communication,
                coordination, and documentation
              </li>
              <li>
                Optional XR for procedures and spatial skills when immersion
                moves the needle
              </li>
              <li>
                Analytics that illuminate patterns at the learner, team, and
                system levels
              </li>
              <li>
                A library that respects scope, context, accessibility, and
                equity — because great care is for everyone
              </li>
            </ul>

            <p>
              If you lead a unit, a service line, a school, or a system — and
              you believe, like I do, that practice should be safe, coached, and
              grown — I'd love to build this with you. Bring us your pain
              points. We'll bring the scaffolding that turns them into skills.
            </p>
            <p className="text-brand-ink">With respect and resolve,</p>
            <p className="text-brand-ink">
              <strong>Melissa Jo Tully, BSN, MHPE, RN-BC</strong>
              <br />
              Founder &amp; CEO, Encountive, Inc.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-brand-ink">Let's talk:</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>• Run a 60–90 day pilot</li>
                <li>• Map your competencies to scenarios</li>
                <li>• Explore enterprise or academic licensing</li>
              </ul>
              <Link to="/contact" className="btn-primary mt-6">
                Get in touch
              </Link>
            </div>
          </article>
        </div>
      </Section>

      <CtaBanner
        title="Partner with us"
        subtitle="If you lead a unit, service line, school, or system, we'd love to build with you. Bring your pain points — we'll bring the scaffolding that turns them into skills."
        primaryLabel="Start the conversation"
        secondaryLabel="See the product"
        secondaryTo="/product"
      />
    </>
  );
}

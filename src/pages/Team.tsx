import { Linkedin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

type Member = {
  name: string;
  title: string;
  role: string;
  blurb: string;
  credentials?: string;
  linkedin?: string;
};

const team: Member[] = [
  {
    name: "Melissa Tully",
    title: "Founder",
    role: "Chief Executive Officer",
    credentials: "BSN, MHPE, RN-BC",
    blurb:
      "Healthcare simulation educator and CEO with 20+ years in clinical practice and education design. Leads product vision and clinical rigor.",
    linkedin: "#",
  },
  {
    name: "Jeff Plaza",
    title: "Founder",
    role: "Chief Commercial Officer",
    blurb:
      "Partners with healthcare organizations and academic programs to understand training needs and scope pilots that measure what matters.",
    linkedin: "#",
  },
  {
    name: "Douglas Tully",
    title: "Founder",
    role: "President and CIO",
    credentials: "PMP",
    blurb:
      "Leads technology and platform architecture. Builds the AI and XR systems that power The Encountive Engine.",
    linkedin: "#",
  },
  {
    name: "Nisha Patel",
    title: "Founder",
    role: "Chief Product Officer",
    blurb:
      "Defines product strategy and user experience. Makes sure Encountive works for clinicians, educators, and administrators.",
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={
          <>
            Built by <span className="gradient-text">clinicians and technologists</span>
          </>
        }
        subtitle="Our team combines deep clinical experience with cutting-edge technology to build training solutions that make a real difference. Bios coming soon."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((m) => (
            <article key={m.name} className="card h-full">
              <h2 className="text-xl font-semibold text-brand-ink">{m.name}</h2>
              <p className="text-sm font-medium text-brand-cyan">{m.title}</p>
              <p className="text-sm font-medium text-brand-ink">{m.role}</p>
              {m.credentials && (
                <p className="text-xs text-brand-muted">{m.credentials}</p>
              )}
              <p className="mt-3 text-sm text-brand-muted">{m.blurb}</p>
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-brand-cyan/40 hover:text-brand-cyan"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  LinkedIn
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Want to build with us?"
        subtitle="We partner with clinical enterprises and academic programs across disciplines — and we're always open to conversations with mission-aligned leaders and contributors."
        primaryLabel="Contact us"
        secondaryLabel="Learn more"
      />
    </>
  );
}

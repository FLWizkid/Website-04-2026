import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

type Member = {
  name: string;
  title: string;
  initials: string;
  blurb: string;
  credentials?: string;
};

const team: Member[] = [
  {
    name: "Melissa Tully",
    title: "CEO & Founder",
    credentials: "BSN, MHPE, RN-BC",
    initials: "MT",
    blurb:
      "Healthcare simulation educator and CEO with 20+ years in clinical practice and education design. Leads product vision and clinical rigor.",
  },
  {
    name: "Jeff Plaza",
    title: "Business Development",
    initials: "JP",
    blurb:
      "Partners with healthcare organizations and academic programs to understand training needs and scope pilots that measure what matters.",
  },
  {
    name: "Doug Tully",
    title: "CTO",
    initials: "DT",
    blurb:
      "Leads technology and platform architecture. Builds the AI and XR systems that power The Encountive Engine™.",
  },
  {
    name: "Nisha Patel",
    title: "Product Manager",
    initials: "NP",
    blurb:
      "Defines product strategy and user experience. Makes sure Encountive works for clinicians, educators, and administrators.",
  },
];

function Avatar({ initials, name }: { initials: string; name: string }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder avatar for ${name}`}
      className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-brand-gradient text-white shadow-soft"
    >
      <span
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5), transparent 60%)",
        }}
      />
      <span className="relative font-display text-xl font-extrabold">
        {initials}
      </span>
    </div>
  );
}

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
              <div className="flex items-start gap-5">
                <Avatar initials={m.initials} name={m.name} />
                <div>
                  <h2 className="text-xl font-semibold text-brand-ink">{m.name}</h2>
                  <p className="text-sm font-medium text-brand-cyan">{m.title}</p>
                  {m.credentials && (
                    <p className="text-xs text-brand-muted">{m.credentials}</p>
                  )}
                  <p className="mt-3 text-sm text-brand-muted">{m.blurb}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-brand-muted">
          Placeholder avatars. Headshots and full bios will be added as team
          content is finalized.
        </p>
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

import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
};

export default function PageHero({ eyebrow, title, subtitle, actions }: PageHeroProps) {
  return (
    <section className="hero-glow">
      <div className="container-xl py-16 md:py-24">
        <div className="max-w-3xl animate-fade-up">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl font-extrabold text-brand-ink md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-slate-600 md:text-xl">{subtitle}</p>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
}

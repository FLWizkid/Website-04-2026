import { Link } from "react-router-dom";

type CtaBannerProps = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export default function CtaBanner({
  title = "Ready to improve clinical training outcomes?",
  subtitle = "Start with a scoped pilot. We'll help you plan deployment, define metrics, and design scale.",
  primaryLabel = "Plan a pilot",
  primaryTo = "/contact",
  secondaryLabel = "Contact us",
  secondaryTo = "/contact",
}: CtaBannerProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-xl">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-10 md:p-14">
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(600px 200px at 20% 0%, rgba(255,255,255,0.4), transparent 60%), radial-gradient(500px 200px at 80% 100%, rgba(255,255,255,0.25), transparent 60%)",
            }}
          />
          <div className="relative max-w-2xl text-white">
            <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
            <p className="mt-4 text-white/90 md:text-lg">{subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={primaryTo}
                className="btn bg-white text-brand-bg hover:bg-slate-100"
              >
                {primaryLabel}
              </Link>
              <Link
                to={secondaryTo}
                className="btn border border-white/60 text-white hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            </div>
            <p className="mt-6 text-xs text-white/70">
              Training only — not clinical decision support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

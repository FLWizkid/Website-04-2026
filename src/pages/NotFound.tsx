import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="hero-glow">
      <div className="container-xl py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-brand-ink md:text-5xl">
          That page is off the beaten path.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Let's get you back to something useful.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

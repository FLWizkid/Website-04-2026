import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-brand-surface/60">
      <div className="container-xl py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm text-brand-muted">
              AI-adaptive clinical simulation for healthcare teams.
              Encountive is for Training only — not clinical decision support.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/encountive"
                target="_blank"
                rel="noreferrer"
                aria-label="Encountive on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-muted transition hover:text-brand-cyan hover:border-brand-cyan/40"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-brand-cyan">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-slate-300 hover:text-brand-cyan">
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/healthcare"
                  className="text-slate-300 hover:text-brand-cyan"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/academic"
                  className="text-slate-300 hover:text-brand-cyan"
                >
                  Academic
                </Link>
              </li>
              <li>
                <Link to="/roi" className="text-slate-300 hover:text-brand-cyan">
                  ROI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-brand-cyan">
                  About
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-slate-300 hover:text-brand-cyan">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-brand-cyan">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@encountive.com"
                  className="text-slate-300 hover:text-brand-cyan"
                >
                  contact@encountive.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:security@encountive.com"
                  className="text-slate-300 hover:text-brand-cyan"
                >
                  security@encountive.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-brand-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Encountive, Inc. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            Encountive is for Training only — not clinical decision support. Accessibility:
            captions, transcripts, WCAG-compliant delivery, keyboard navigation.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/cn";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string; description?: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Product", to: "/product" },
  {
    label: "Solutions",
    children: [
      {
        label: "Healthcare",
        to: "/solutions/healthcare",
        description: "Hospitals, clinics, hospices",
      },
      {
        label: "Academic",
        to: "/solutions/academic",
        description: "Vocational programs & sim centers",
      },
    ],
  },
  { label: "ROI", to: "/roi" },
  { label: "Team", to: "/team" },
  { label: "About", to: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!solutionsRef.current?.contains(e.target as Node)) setSolutionsOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors",
        scrolled
          ? "border-white/10 bg-brand-bg/80 backdrop-blur"
          : "border-transparent bg-brand-bg/60 backdrop-blur-sm"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-brand-surface focus:px-3 focus:py-2 focus:text-brand-cyan focus:shadow-soft"
      >
        Skip to main content
      </a>
      <div className="container-xl flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            if (item.children) {
              const activeChild = item.children.some((c) =>
                location.pathname.startsWith(c.to)
              );
              return (
                <div key={item.label} ref={solutionsRef} className="relative">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={solutionsOpen}
                    onClick={() => setSolutionsOpen((o) => !o)}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      activeChild
                        ? "text-brand-cyan"
                        : "text-slate-300 hover:text-brand-cyan"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        solutionsOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {solutionsOpen && (
                    <div
                      role="menu"
                      className="absolute left-1/2 mt-2 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-brand-surface/95 p-2 shadow-soft backdrop-blur"
                    >
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          role="menuitem"
                          className="block rounded-xl px-3 py-2 hover:bg-white/5"
                        >
                          <div className="text-sm font-semibold text-brand-ink">
                            {c.label}
                          </div>
                          {c.description && (
                            <div className="text-xs text-brand-muted">
                              {c.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <NavLink
                key={item.to}
                to={item.to!}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand-cyan"
                      : "text-slate-300 hover:text-brand-cyan"
                  )
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/contact" className="btn-ghost">
            Contact
          </Link>
          <Link to="/contact" className="btn-primary">
            Plan a pilot
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-brand-surface/80 text-slate-200 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-bg/95 backdrop-blur lg:hidden">
          <nav aria-label="Mobile" className="container-xl flex flex-col gap-1 py-4">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="py-1">
                  <div className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
                    {item.label}
                  </div>
                  {item.children.map((c) => (
                    <NavLink
                      key={c.to}
                      to={c.to}
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5"
                    >
                      {c.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to!}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-3 py-2 text-sm font-medium",
                      isActive
                        ? "bg-white/5 text-brand-cyan"
                        : "text-slate-300 hover:bg-white/5"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <div className="mt-2 flex flex-col gap-2 px-2">
              <Link to="/contact" className="btn-secondary">
                Contact
              </Link>
              <Link to="/contact" className="btn-primary">
                Plan a pilot
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

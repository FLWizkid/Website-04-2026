import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: "default" | "muted" | "dark" | "gradient";
  align?: "left" | "center";
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-white",
  muted: "bg-brand-mist",
  dark: "bg-brand-navy text-white",
  gradient: "bg-brand-gradient text-white",
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  innerClassName,
  tone = "default",
  align = "left",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", toneClasses[tone], className)}>
      <div className={cn("container-xl", innerClassName)}>
        {(eyebrow || title || subtitle) && (
          <div
            className={cn(
              "mb-10 max-w-3xl",
              align === "center" && "mx-auto text-center"
            )}
          >
            {eyebrow && (
              <p
                className={cn(
                  "eyebrow",
                  tone === "dark" || tone === "gradient"
                    ? "text-white/80"
                    : undefined
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "mt-3 text-3xl font-bold md:text-4xl",
                  tone === "dark" || tone === "gradient"
                    ? "text-white"
                    : "text-brand-ink"
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "mt-4 text-base md:text-lg",
                  tone === "dark" || tone === "gradient"
                    ? "text-white/80"
                    : "text-slate-600"
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

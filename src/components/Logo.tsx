import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  withTagline?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

export default function Logo({ className, withTagline = true, size = "md" }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Encountive home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden
        className="relative grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-white shadow-soft"
      >
        <span className="font-display text-lg font-extrabold leading-none">E</span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-extrabold tracking-tight gradient-text",
            sizeMap[size]
          )}
        >
          Encountive
        </span>
        {withTagline && (
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-brand-muted">
            AI Encounter Training
          </span>
        )}
      </span>
    </Link>
  );
}

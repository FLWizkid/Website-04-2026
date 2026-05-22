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
      <img
        src="/logo-mark.svg"
        alt=""
        aria-hidden
        className="h-6 w-6"
      />
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

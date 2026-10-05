import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  children,
  variant = "primary",
  href,
  to,
  className = "",
  arrow = false,
  onClick,
}: {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  to?: string;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer";
  const styles: Record<Variant, string> = {
    primary:
      "bg-electric text-white shadow-[0_8px_30px_-8px_rgba(46,124,246,0.7)] hover:bg-electric-bright hover:shadow-[0_8px_36px_-6px_rgba(46,124,246,0.9)] hover:-translate-y-px",
    secondary:
      "border border-white/20 bg-white/5 text-paper backdrop-blur-sm hover:border-ice/60 hover:bg-white/10 hover:-translate-y-px",
    ghost: "text-mist hover:text-paper px-3 py-2",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

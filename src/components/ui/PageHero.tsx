import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  copy,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden pt-16 lg:pt-[72px]" aria-label={eyebrow}>
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_35%,#000,transparent)]" aria-hidden="true" />
      <Container className="relative py-16 text-center sm:py-20 lg:py-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display mx-auto mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-5xl">
            {title}
          </h1>
          {copy && <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-mist sm:text-lg">{copy}</p>}
          {(primary || secondary) && (
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {primary && (
                <Link to={primary.href} className="rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-electric-bright">
                  {primary.label}
                </Link>
              )}
              {secondary && (
                <Link to={secondary.href} className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:-translate-y-px hover:border-ice/60 hover:bg-white/10">
                  {secondary.label}
                </Link>
              )}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

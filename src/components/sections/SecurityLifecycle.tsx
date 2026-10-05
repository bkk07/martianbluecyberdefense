import { useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LIFECYCLE_STEPS } from "../../data/lifecycle";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function SecurityLifecycle() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-38% 0px -52% 0px" }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const jumpTo = (i: number) => {
    setActive(i);
    cardRefs.current[i]?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "center",
    });
  };

  return (
    <section
      className="border-y border-white/10 bg-navy-950/60 py-20 lg:py-28"
      aria-labelledby="lifecycle-heading"
    >
      <Container>
        <div id="lifecycle-heading">
          <SectionHeading
            eyebrow="How Martian Blue Protects You"
            title="How We Protect Your Digital Environment"
            copy="One continuous loop — from knowing your attack surface to coming back stronger after every incident."
            align="center"
          />
        </div>

        {/* mobile step chips */}
        <div
          className="slim-scroll mt-10 flex gap-2 overflow-x-auto pb-1 lg:hidden"
          role="tablist"
          aria-label="Protection lifecycle steps"
        >
          {LIFECYCLE_STEPS.map((s, i) => (
            <button
              key={s.index}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => jumpTo(i)}
              className={`shrink-0 rounded-full border px-4 py-2 font-mono text-xs tracking-[0.14em] transition-all ${
                i === active
                  ? "border-ice/60 bg-electric/20 text-ice"
                  : "border-white/12 text-fog"
              }`}
            >
              {s.index} · {s.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* sticky rail */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <ol aria-label="Protection lifecycle progress">
                {LIFECYCLE_STEPS.map((s, i) => {
                  const isActive = i === active;
                  const isDone = i < active;
                  return (
                    <li key={s.index}>
                      <button
                        type="button"
                        onClick={() => jumpTo(i)}
                        aria-current={isActive ? "step" : undefined}
                        className="group flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left transition-colors hover:bg-white/[0.03]"
                      >
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-all duration-300 ${
                            isActive
                              ? "border-ice bg-electric/25 text-ice shadow-[0_0_24px_-4px_rgba(69,224,255,0.6)]"
                              : isDone
                                ? "border-electric/50 bg-navy-800 text-mist"
                                : "border-white/12 text-fog group-hover:border-white/30"
                          }`}
                        >
                          {s.index}
                        </span>
                        <span>
                          <span
                            className={`font-display block text-[15px] font-bold tracking-[0.12em] ${
                              isActive ? "text-paper" : "text-fog group-hover:text-mist"
                            }`}
                          >
                            {s.name}
                          </span>
                          {isActive && (
                            <span className="mt-1 block max-w-[240px] text-[13px] leading-snug text-mist">
                              {s.description}
                            </span>
                          )}
                        </span>
                      </button>
                      {i < LIFECYCLE_STEPS.length - 1 && (
                        <span
                          className={`ml-[35px] block h-4 w-px transition-colors ${
                            i < active ? "bg-electric/60" : "bg-white/10"
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  );
                })}
              </ol>
              <div
                className="mt-6 h-1 overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuenow={active + 1}
                aria-valuemin={1}
                aria-valuemax={LIFECYCLE_STEPS.length}
                aria-label="Lifecycle progress"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-electric to-ice transition-all duration-500"
                  style={{ width: `${((active + 1) / LIFECYCLE_STEPS.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* scrolling story cards */}
          <div className="space-y-5 lg:space-y-8">
            {LIFECYCLE_STEPS.map((s, i) => {
              const isActive = i === active;
              return (
                <Reveal key={s.index} delay={0}>
                  <div
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    data-index={i}
                    className={`relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 sm:p-8 lg:p-9 ${
                      isActive
                        ? "panel panel-top-highlight border-electric/40 shadow-[0_24px_70px_-24px_rgba(46,124,246,0.55)]"
                        : "border-white/[0.07] bg-navy-950/50"
                    }`}
                  >
                    <span
                      className={`font-display pointer-events-none absolute -right-1 -top-5 select-none text-[5.5rem] font-bold leading-none transition-colors duration-500 ${
                        isActive ? "text-electric/15" : "text-white/[0.04]"
                      }`}
                      aria-hidden="true"
                    >
                      {s.index}
                    </span>
                    <p className="relative font-mono text-xs tracking-[0.22em] text-ice">
                      PHASE {s.index}
                    </p>
                    <h3 className="font-display relative mt-2 text-2xl font-bold tracking-[0.06em] text-paper sm:text-[1.7rem]">
                      {s.name}
                    </h3>
                    <p className="relative mt-3 max-w-xl leading-relaxed text-mist">
                      {s.description}
                    </p>
                    {i < LIFECYCLE_STEPS.length - 1 && (
                      <span className="relative mt-6 flex items-center gap-3 text-fog" aria-hidden="true">
                        <span className="h-px w-10 bg-electric/50" />
                        <ArrowDown size={14} className="rotate-[-90deg] text-electric-bright lg:rotate-0" />
                        <span className="font-mono text-[11px] tracking-[0.18em]">
                          NEXT · {LIFECYCLE_STEPS[i + 1].name}
                        </span>
                      </span>
                    )}
                  </div>
                </Reveal>
              );
            })}

            <Reveal>
              <div className="rounded-2xl border border-ice/25 bg-gradient-to-br from-electric/15 via-navy-900 to-abyss p-7 text-center sm:p-8">
                <p className="font-display text-lg font-semibold text-paper">
                  Then the loop repeats — every cycle leaves you harder to breach.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-block text-sm font-semibold text-ice hover:underline"
                >
                  Start with an Identify assessment →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

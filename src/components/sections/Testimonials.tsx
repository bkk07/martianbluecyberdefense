import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { TESTIMONIALS } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const stepWidth = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
  }, []);

  const scrollToIndex = useCallback(
    (i: number) => {
      const el = trackRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(TESTIMONIALS.length - 1, i));
      setActive(clamped);
      el.scrollTo({ left: clamped * stepWidth(), behavior: "smooth" });
    },
    [stepWidth]
  );

  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const w = stepWidth();
    if (w > 0) setActive(Math.round(el.scrollLeft / w));
  }, [stepWidth]);

  return (
    <section
      className="overflow-hidden border-y border-white/10 bg-navy-950/60 py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
      aria-roledescription="carousel"
    >
      <Container>
        <div id="testimonials-heading">
          <SectionHeading
            eyebrow="Client Stories"
            title="What Our Clients Say"
            copy="Security leaders trust Martian Blue to protect what matters most to their organizations."
            align="center"
          />
        </div>
      </Container>

      <Reveal className="relative mt-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative">
            {/* side arrows */}
            <button
              type="button"
              onClick={() => scrollToIndex(active - 1)}
              disabled={active === 0}
              aria-label="Previous testimonials"
              className="absolute -left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-electric text-white shadow-lg transition-colors hover:bg-electric-bright disabled:cursor-default disabled:opacity-30 sm:-left-4"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(active + 1)}
              disabled={active === TESTIMONIALS.length - 1}
              aria-label="Next testimonials"
              className="absolute -right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-electric text-white shadow-lg transition-colors hover:bg-electric-bright disabled:cursor-default disabled:opacity-30 sm:-right-4"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>

            {/* track */}
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 py-2 [scrollbar-width:none] sm:px-10 [&::-webkit-scrollbar]:hidden"
            >
              {TESTIMONIALS.map((t, i) => (
                <figure
                  key={t.avatar}
                  data-card
                  aria-roledescription="slide"
                  aria-label={`Testimonial ${i + 1} of ${TESTIMONIALS.length}`}
                  className="flex w-[82%] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-abyss/70 p-7 sm:w-[62%] sm:p-9 lg:w-[47%]"
                >
                  <blockquote className="font-display text-lg font-bold leading-snug tracking-tight text-paper sm:text-xl">
                    &ldquo;{t.headline}&rdquo;
                  </blockquote>
                  <p className="mt-4 flex-1 leading-relaxed text-mist">{t.quote}</p>
                  <figcaption className="mt-7 flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.avatarAlt}
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-white/20"
                    />
                    <span>
                      <span className="block text-base font-semibold text-paper">{t.name}</span>
                      <span className="block text-sm text-mist">
                        {t.designation} &middot; {t.organization}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* dots */}
          <div className="mt-7 flex justify-center gap-2" role="tablist" aria-label="Testimonial selector">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.avatar}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-colors ${i === active ? "w-8 bg-ice" : "w-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

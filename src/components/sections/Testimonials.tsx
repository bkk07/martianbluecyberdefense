import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import { TESTIMONIALS } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 0]);

  const go = (d: number) =>
    setIndex(([i]) => [(i + d + TESTIMONIALS.length) % TESTIMONIALS.length, d]);

  const t = TESTIMONIALS[index];
  const initials = t.name
    .split(/\s+/)
    .map((w) => w.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="border-y border-white/10 bg-navy-950/60 py-20 lg:py-28" aria-labelledby="testimonials-heading" aria-roledescription="carousel">
      <Container>
        <div id="testimonials-heading">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            align="center"
          />
        </div>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-abyss/60 px-7 py-10 text-center sm:px-12">
            <Quote size={26} className="mx-auto text-electric-bright" aria-hidden="true" />
            <div className="relative mt-6 min-h-[140px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.figure
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="font-display mx-auto max-w-xl text-xl font-medium leading-relaxed text-paper sm:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-center gap-3.5">
                    <span
                      className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-electric/40 bg-electric/15 text-sm font-bold text-ice"
                      aria-hidden="true"
                    >
                      {initials}
                    </span>
                    <span className="text-left">
                      <span className="block text-sm font-bold tracking-[0.14em] text-paper">{t.name.toUpperCase()}</span>
                      <span className="block text-[13px] text-mist">{t.designation} · {t.organization}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-mist transition-colors hover:border-ice hover:text-ice"
              >
                <ArrowLeft size={17} aria-hidden="true" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Testimonial selector">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setIndex([i, i > index ? 1 : -1])}
                    className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-ice" : "w-2 bg-white/20 hover:bg-white/40"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-mist transition-colors hover:border-ice hover:text-ice"
              >
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
            <p className="mt-5 text-[11px] tracking-wide text-fog">Sample layout — approved client testimonials will replace these placeholders.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

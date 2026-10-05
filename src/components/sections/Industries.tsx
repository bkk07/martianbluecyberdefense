import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { INDUSTRIES } from "../../data/industries";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 py-20 lg:py-28" aria-labelledby="industries-heading">
      <Container>
        <div id="industries-heading">
          <SectionHeading
            eyebrow="Industries"
            title="Cybersecurity for Every Digital Environment"
            copy="Purpose-built protection for the sectors where security failure is not an option."
            align="center"
          />
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <li key={ind.slug}>
                <Reveal className="h-full">
                  <Link
                    to="/contact"
                    aria-label={`${ind.name} — ${ind.description}`}
                    className="relative block h-full overflow-hidden rounded-xl border border-white/10 transition-colors hover:border-white/25"
                  >
                    <img
                      src={ind.image}
                      alt={ind.imageAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <span
                      className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-navy-950/50 text-paper backdrop-blur-sm"
                      aria-hidden="true"
                    >
                      <ArrowUpRight size={17} />
                    </span>
                    <span className="absolute inset-x-0 bottom-0 flex items-start gap-3.5 p-6">
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-ice backdrop-blur-sm"
                        aria-hidden="true"
                      >
                        <Icon size={20} />
                      </span>
                      <span>
                        <span className="font-display block text-lg font-bold tracking-tight text-paper">
                          {ind.name}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-white/80">
                          {ind.description}
                        </span>
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

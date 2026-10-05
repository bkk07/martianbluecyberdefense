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
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.slug} delay={Math.min(i * 0.06, 0.3)}>
                <Link
                  to="/contact"
                  className="panel group flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-[0_20px_60px_-20px_rgba(46,124,246,0.5)]"
                  aria-label={`${ind.name} — ${ind.description} Contact us.`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-electric/35 bg-electric/12 transition-colors group-hover:bg-electric/25" aria-hidden="true">
                    <Icon size={22} className="text-ice" />
                  </span>
                  <span className="font-display mt-5 text-lg font-bold tracking-wide text-paper">
                    {ind.name.toUpperCase()}
                  </span>
                  <span className="mt-2 flex-1 text-[15px] leading-relaxed text-mist">{ind.description}</span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ice">
                    Discuss your security posture
                    <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../data/services";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 lg:py-28" aria-labelledby="services-heading">
      <Container>
        <div id="services-heading" className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Cybersecurity Solutions"
            copy="From human-focused security awareness to AI-powered cyber defense, Martian Blue helps organizations protect their people, applications, data, and digital infrastructure."
          />
          <Reveal delay={0.1}>
            <Link
              to="/services"
              className="hidden shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-white/40 hover:bg-white/10 lg:inline-flex"
            >
              View All Services
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.slug}>
                <Reveal className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-navy-950 transition-colors hover:border-white/25">
                    <Link
                      to={`/services#service-${s.slug}`}
                      aria-label={`Learn more about ${s.title}`}
                      tabIndex={-1}
                      className="block border-b border-white/10"
                    >
                      <img
                        src={s.image}
                        alt={s.imageAlt}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover"
                      />
                    </Link>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/15 text-ice">
                          <Icon size={20} aria-hidden="true" />
                        </span>
                        <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-paper">
                          <Link
                            to={`/services#service-${s.slug}`}
                            className="transition-colors hover:text-ice"
                          >
                            {s.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-mist">{s.description}</p>

                      <ul
                        className="mt-4 space-y-2 border-t border-white/10 pt-4"
                        aria-label={`${s.title} highlights`}
                      >
                        {s.capabilities.slice(0, 3).map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-mist">
                            <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-ice" />
                            {c}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-5">
                        <Link
                          to={`/services#service-${s.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper transition-colors hover:text-ice"
                        >
                          Learn More
                          <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-8 text-center lg:hidden">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-paper"
          >
            View All Services
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

import { ArrowRight, Bot, Code2, CreditCard, DatabaseZap, Fish, Radar } from "lucide-react";
import { Link } from "react-router-dom";
import { SOLUTIONS } from "../data/content";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";

const ICONS = [Fish, CreditCard, DatabaseZap, Code2, Radar, Bot];

const SOLUTION_LINKS: Record<string, string> = {
  phishing: "/services#service-antiphishing",
  identity: "/services#service-identity",
  data: "/services#service-dlp",
  appsec: "/services#service-sdlc",
  threat: "/services#service-tactical-ai",
  ai: "/services#service-tactical-ai",
};

export function SolutionsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Solutions"
        title="Solve real cybersecurity challenges with targeted security solutions."
      />

      <Container className="pb-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={s.slug} delay={Math.min(i * 0.06, 0.3)}>
                <section
                  id={s.slug}
                  aria-label={s.title}
                  className="panel group flex h-full scroll-mt-28 flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-electric/35 bg-electric/12">
                    <Icon size={22} className="text-ice" aria-hidden="true" />
                  </span>
                  <h2 className="font-display mt-5 text-xl font-bold tracking-wide text-paper">
                    {s.title.toUpperCase()}
                  </h2>
                  <p className="mt-2.5 flex-1 leading-relaxed text-mist">{s.description}</p>
                  <Link
                    to={SOLUTION_LINKS[s.slug]}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ice"
                  >
                    Explore
                    <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </section>
              </Reveal>
            );
          })}
        </div>
      </Container>

      <Container className="pb-24">
        <Reveal>
          <div className="panel flex flex-col items-center justify-between gap-5 rounded-2xl px-8 py-8 text-center sm:flex-row sm:text-left">
            <p className="font-display text-xl font-semibold text-paper">
              Not sure which solution you need?
            </p>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-electric-bright"
            >
              Get Started
              <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}

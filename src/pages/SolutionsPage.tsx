import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { SOLUTIONS } from "../data/content";
import { SERVICES } from "../data/services";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";

const SOLUTION_SERVICE: Record<string, string> = {
  phishing: "antiphishing",
  identity: "identity",
  data: "dlp",
  appsec: "sdlc",
  threat: "tactical-ai",
  ai: "tactical-ai",
};

const AI_IMAGE = {
  src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
  alt: "AI threat analysis visualization",
};

function SolutionRow({ index, slug }: { index: number; slug: string }) {
  const solution = SOLUTIONS.find((s) => s.slug === slug) ?? SOLUTIONS[0];
  const service = SERVICES.find((s) => s.slug === SOLUTION_SERVICE[slug]) ?? SERVICES[0];
  const flip = index % 2 === 1;
  const image = slug === "ai" ? AI_IMAGE : { src: service.image, alt: service.imageAlt };
  const num = String(index + 1).padStart(2, "0");

  return (
    <section id={slug} aria-labelledby={`${slug}-title`} className="scroll-mt-32 border-t border-white/[0.07] py-14 lg:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-xl border border-white/10 object-cover"
          />
        </Reveal>

        <Reveal delay={0.06} className={flip ? "lg:order-1" : ""}>
          <p className="font-mono text-xs tracking-[0.22em] text-ice">SOLUTION {num}</p>
          <h2
            id={`${slug}-title`}
            className="font-display mt-3 text-2xl font-bold tracking-tight text-paper sm:text-3xl"
          >
            {solution.title}
          </h2>
          <p className="mt-3 max-w-lg leading-relaxed text-mist">{solution.description}</p>

          <p className="mt-6 text-xs font-bold tracking-[0.2em] text-fog">
            WHAT&apos;S INCLUDED
          </p>
          <ul className="mt-3 space-y-2">
            {service.capabilities.slice(0, 5).map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-[15px] text-paper">
                <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-ice" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              to={`/services#service-${service.slug}`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#B9C6FF] px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-[#CBD6FF]"
            >
              Explore {service.title}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold text-mist transition-colors hover:text-paper"
            >
              Talk to an expert
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SolutionsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Solutions"
        title="Solve real cybersecurity challenges with targeted security solutions."
        copy="Every solution pairs a defined security outcome with the Martian Blue services that deliver it."
        primary={{ label: "Explore Solutions", href: "#solutions-nav" }}
        secondary={{ label: "Talk to Us", href: "/contact" }}
      />

      <div id="solutions-nav" className="sticky top-16 z-30 scroll-mt-24 border-y border-white/10 bg-abyss/90 backdrop-blur-xl lg:top-[72px]">
        <Container className="py-0">
          <nav aria-label="Solutions" className="slim-scroll flex gap-2 overflow-x-auto py-3">
            {SOLUTIONS.map((s, i) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="shrink-0 rounded-full border border-white/12 px-4 py-1.5 text-[13px] font-medium text-mist transition-colors hover:border-ice/50 hover:text-paper"
              >
                {String(i + 1).padStart(2, "0")} · {s.title}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      <Container className="pb-6">
        {SOLUTIONS.map((s, i) => (
          <SolutionRow key={s.slug} index={i} slug={s.slug} />
        ))}
      </Container>

      <Container className="pb-24">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-navy-950/70 px-8 py-8 text-center sm:flex-row sm:text-left">
            <p className="font-display text-xl font-semibold text-paper">
              Not sure which solution you need?
            </p>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#B9C6FF] px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-[#CBD6FF]"
            >
              Get Started
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}

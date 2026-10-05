import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { INDUSTRIES, type Industry } from "../data/industries";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";

function IndustryBand({ industry, index }: { industry: Industry; index: number }) {
  const flip = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");
  const Icon = industry.icon;
  const tint = `${industry.accent}0F`;

  return (
    <section
      id={industry.slug}
      aria-labelledby={`${industry.slug}-title`}
      className="scroll-mt-24 border-t border-white/[0.07]"
      style={{ background: `linear-gradient(180deg, ${tint}, transparent 85%)` }}
    >
      <Container className="py-14 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal className={`relative ${flip ? "lg:order-2" : ""}`}>
            <span
              aria-hidden="true"
              className="absolute -inset-3 rounded-2xl blur-2xl"
              style={{ background: `${industry.accent}14` }}
            />
            <img
              src={industry.image}
              alt={industry.imageAlt}
              loading="lazy"
              className="relative aspect-[16/10] w-full rounded-xl border border-white/10 object-cover"
            />
          </Reveal>

          <Reveal delay={0.06} className={flip ? "lg:order-1" : ""}>
            <p
              className="flex items-center gap-3 font-mono text-xs tracking-[0.22em]"
              style={{ color: industry.accent }}
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-lg border"
                style={{ borderColor: `${industry.accent}55`, background: `${industry.accent}14` }}
              >
                <Icon size={19} />
              </span>
              INDUSTRY {num}
            </p>
            <h2
              id={`${industry.slug}-title`}
              className="font-display mt-4 text-2xl font-bold tracking-tight text-paper sm:text-3xl"
            >
              {industry.name}
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-mist">
              {industry.description}
            </p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {industry.focus.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 rounded-lg border border-white/[0.07] bg-abyss/50 px-3.5 py-2.5 text-sm text-paper"
                >
                  <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0" style={{ color: industry.accent }} />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
              style={{ color: industry.accent }}
            >
              Discuss your {industry.name.toLowerCase()} requirements
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function IndustriesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Industries"
        title="Cybersecurity for Every Digital Environment"
        copy="Purpose-built protection for the sectors where security failure is not an option."
        primary={{ label: "Talk to an Expert", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />

      <div className="border-y border-white/10 bg-navy-950/60">
        <Container className="py-0">
          <nav aria-label="Industries" className="slim-scroll flex gap-2 overflow-x-auto py-3">
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.slug}
                href={`#${ind.slug}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-white/12 px-4 py-1.5 text-[13px] font-medium text-mist transition-colors hover:text-paper"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: ind.accent }}
                />
                {ind.name}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {INDUSTRIES.map((ind, i) => (
        <IndustryBand key={ind.slug} industry={ind} index={i} />
      ))}

      <Container className="pb-24 pt-4">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-navy-950/70 px-8 py-8 text-center sm:flex-row sm:text-left">
            <p className="font-display text-xl font-semibold text-paper">
              Operating in a sector not listed here?
            </p>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#B9C6FF] px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-[#CBD6FF]"
            >
              Talk to Our Team
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}

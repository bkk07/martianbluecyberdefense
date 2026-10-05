import { ArrowRight, ChevronRight, GraduationCap, ShieldCheck, Sparkles, User, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";

const HERO_STATS = [
  ["6", "Security services"],
  ["24/7", "Always-on monitoring"],
  ["3", "Certification tracks"],
  ["1000+", "Students trained"],
];

const HERO_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    alt: "MartianBlue team member",
    aspect: "aspect-[3/4]",
    offset: "",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    alt: "MartianBlue security analyst",
    aspect: "aspect-square",
    offset: "sm:mt-12",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    alt: "MartianBlue engineer",
    aspect: "aspect-[3/4]",
    offset: "",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    alt: "MartianBlue instructor",
    aspect: "aspect-square",
    offset: "sm:mt-12",
  },
];

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Prevention over reaction",
    copy: "We hunt threats, close gaps, and train people before incidents happen — not after.",
  },
  {
    icon: Users,
    title: "People as defense, not risk",
    copy: "Employees, engineers, and analysts become active layers of defense through realistic practice.",
  },
  {
    icon: GraduationCap,
    title: "Skills over checkboxes",
    copy: "Labs, simulations, and live operations beat slide decks. If it doesn't work in reality, it doesn't count.",
  },
];

const BELIEF_ROWS = [
  {
    title: "Security",
    tag: "Protect what matters.",
    body: "We start from business risk, not tooling — protecting the people, identities, data, and systems the organization depends on most.",
  },
  {
    title: "Innovation",
    tag: "Keep evolving with technology.",
    body: "Analyst expertise paired with AI-assisted detection and modern tooling, with playbooks that evolve as attacker techniques do.",
  },
  {
    title: "Education",
    tag: "Build people who can defend.",
    body: "Technology alone doesn't stop breaches. We train employees, engineers, and analysts with hands-on practice so secure behavior sticks.",
  },
  {
    title: "Trust",
    tag: "Security built on confidence.",
    body: "Clear scope, honest findings, and reports leadership can act on. No fear-selling, no black boxes.",
  },
  {
    title: "Practical",
    tag: "Skills that work in reality.",
    body: "Simulations, labs, and live-fire exercises in real environments — because a control that fails in production isn't a control.",
  },
  {
    title: "Impact",
    tag: "Security that creates value.",
    body: "Success is measured in fewer incidents, faster response, and audit-ready evidence — outcomes the business can see.",
  },
];

const JOURNEY = [
  { phase: "Foundation", copy: "Cybersecurity knowledge takes shape." },
  { phase: "First Services", copy: "Protecting organizations in the real world." },
  { phase: "Education Programs", copy: "Training the next defenders." },
  { phase: "New Capabilities", copy: "AI-driven defense and broader coverage." },
];

const EXPERTISE = [
  "ANTIPHISHING",
  "DATA SECURITY",
  "APPLICATION SECURITY",
  "IDENTITY & PAYMENTS",
  "THREAT DETECTION & RESPONSE",
  "CYBER EDUCATION",
  "AI CYBER DEFENSE",
  "SECURITY ASSESSMENTS",
];

function BeliefAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="mx-auto mt-6 max-w-4xl">
      {BELIEF_ROWS.map((b, i) => {
        const isOpen = open === i;
        return (
          <li key={b.title} className="border-b border-white/10">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`belief-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span>
                <span className="block text-[17px] font-semibold text-paper">{b.tag}</span>
                <span className="mt-0.5 block font-mono text-[11px] tracking-[0.2em] text-fog">
                  {b.title.toUpperCase()}
                </span>
              </span>
              <ChevronRight
                size={20}
                aria-hidden="true"
                className={`shrink-0 text-ice transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
              />
            </button>
            <div
              id={`belief-${i}`}
              role="region"
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-mist">{b.body}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function AboutPage() {
  return (
    <main id="main">
      {/* HERO — mission + stats + staggered collage */}
      <section className="relative overflow-hidden pt-16 lg:pt-[72px]" aria-label="About MartianBlue">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative py-16 text-center sm:py-20 lg:py-24">
          <Reveal>
            <p className="eyebrow">About MartianBlue</p>
            <h1 className="font-display mx-auto mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-5xl">
              About MartianBlue
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist sm:text-lg">
              MartianBlue Cyber Defense helps organizations improve their cybersecurity
              while helping individuals build practical cybersecurity skills — turning
              people from the greatest risk into the best defense.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
              {HERO_STATS.map(([v, l]) => (
                <div key={l}>
                  <dd className="font-display text-4xl font-bold tabular-nums text-ice sm:text-5xl">{v}</dd>
                  <dt className="mt-2 text-sm text-mist">{l}</dt>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 items-start gap-4 sm:grid-cols-4 sm:gap-5">
            {HERO_PHOTOS.map((p, i) => (
              <Reveal key={p.src} delay={Math.min(i * 0.06, 0.2)} className={p.offset}>
                <img
                  src={p.src}
                  alt={p.alt}
                  loading={i > 1 ? "lazy" : undefined}
                  className={`${p.aspect} w-full rounded-xl border border-white/10 object-cover`}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* MISSION split — collage + copy */}
      <section id="mission" aria-labelledby="mission-h" className="scroll-mt-32 py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative">
              <div className="grid grid-cols-2 items-start gap-4">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
                  alt="MartianBlue consultant with clients"
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-xl border border-white/10 object-cover"
                />
                <div className="flex flex-col gap-4 pt-10">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
                    alt="MartianBlue security leader"
                    loading="lazy"
                    className="aspect-square w-full rounded-xl border border-white/10 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop"
                    alt="MartianBlue analyst"
                    loading="lazy"
                    className="aspect-square w-full rounded-xl border border-white/10 object-cover"
                  />
                </div>
              </div>
              <span
                aria-hidden="true"
                className="absolute -left-3 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-ice/40 bg-navy-900 text-ice shadow-[0_0_30px_-6px_rgba(69,224,255,0.6)] sm:-left-5"
              >
                <ShieldCheck size={22} />
              </span>
              <span
                aria-hidden="true"
                className="absolute bottom-16 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-navy-900 text-mist sm:right-10"
              >
                <User size={20} />
              </span>
              <span aria-hidden="true" className="absolute right-16 top-4 text-ice/70 sm:right-24">
                <Sparkles size={20} />
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="eyebrow">Our Mission</p>
              <h2 id="mission-h" className="font-display mt-3 text-3xl font-bold tracking-tight text-paper sm:text-4xl">
                Our mission
              </h2>
              <div className="mt-5 space-y-5 leading-relaxed text-mist">
                <p>
                  MartianBlue Cyber Defense helps organizations improve their cybersecurity
                  while helping individuals build practical cybersecurity skills.
                </p>
                <p>
                  By pairing AI-assisted defense with hands-on security training, we unite
                  security teams and employees to work together as one unbeatable
                  cyber defense.
                </p>
                <p>
                  We are relentless about replacing checkbox security with capability that
                  proves itself — in live environments, in real attacks, and in the
                  careers of the defenders we train.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#B9C6FF] px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-[#CBD6FF]"
                >
                  Explore Services
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link
                  to="/education"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  Explore Education
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section id="principles" aria-labelledby="principles-h" className="scroll-mt-32 border-y border-white/10 bg-navy-950/60 py-16 lg:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Principles</p>
            <h2 id="principles-h" className="font-display mt-3 text-3xl font-bold tracking-tight text-paper sm:text-4xl">
              MartianBlue Cyber Defense Principles
            </h2>
            <p className="mt-4 text-lg text-mist">Defense must start with people — and stay practical.</p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={Math.min(i * 0.06, 0.2)}>
                  <div className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-abyss/60 p-8 text-center transition-colors hover:border-white/25">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ice/10 text-ice">
                      <Icon size={30} aria-hidden="true" />
                    </span>
                    <p className="font-display mt-5 text-lg font-bold leading-snug text-paper">{p.title}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-mist">{p.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <BeliefAccordion />
          </Reveal>
        </Container>
      </section>

      {/* JOURNEY */}
      <section id="journey" aria-labelledby="journey-h" className="scroll-mt-32 py-16 lg:py-20">
        <Container className="max-w-3xl">
          <Reveal className="text-center">
            <p className="eyebrow">Our Story</p>
            <h2 id="journey-h" className="font-display mt-3 text-3xl font-bold text-paper">Our Journey</h2>
            <p className="mt-3 text-mist">From cybersecurity knowledge to practical cyber defense.</p>
          </Reveal>
          <Reveal delay={0.06}>
            <ol className="panel mt-10 rounded-2xl p-7 sm:p-8" aria-label="Company milestones">
              {JOURNEY.map((m, i) => (
                <li key={m.phase} className="relative flex gap-4 pb-7 last:pb-0">
                  <span className="absolute bottom-0 left-[67px] top-8 w-px bg-white/10" aria-hidden="true" />
                  <span className="w-8 shrink-0 font-mono text-xs font-bold text-ice">0{i + 1}</span>
                  <span className="relative mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-electric" aria-hidden="true" />
                  <span>
                    <span className="block text-base font-semibold text-paper">{m.phase}</span>
                    <span className="mt-0.5 block text-sm text-mist">{m.copy}</span>
                  </span>
                </li>
              ))}
              <li className="flex gap-4 pt-1">
                <span className="w-8 shrink-0" aria-hidden="true" />
                <span className="font-display rounded-md bg-ice/15 px-3 py-1 text-xs font-bold tracking-[0.18em] text-ice">
                  TODAY
                </span>
              </li>
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" aria-label="Our expertise" className="scroll-mt-32 py-16 lg:py-20">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">Our Expertise</p>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2.5" aria-label="Expertise areas">
              {EXPERTISE.map((e) => (
                <li key={e} className="rounded-full border border-white/12 bg-navy-950/70 px-5 py-2 text-[13px] font-semibold tracking-[0.08em] text-paper transition-colors hover:border-ice/50 hover:text-ice">
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* WHY */}
      <section id="why" aria-labelledby="why-about-h" className="scroll-mt-32 border-t border-white/10 bg-navy-950/60 py-16 lg:py-20">
        <Container className="max-w-3xl">
          <Reveal className="text-center">
            <p className="eyebrow">Why MartianBlue?</p>
            <h2 id="why-about-h" className="font-display mt-3 text-2xl font-bold text-paper sm:text-3xl">
              Built different, on purpose.
            </h2>
          </Reveal>
          <ol className="mt-8 space-y-3">
            {["SECURITY EXPERTISE", "PRACTICAL LEARNING", "MODERN TECHNOLOGY", "PEOPLE-FIRST APPROACH"].map((t, i) => (
              <Reveal key={t} delay={i * 0.05}>
                <li className="panel flex items-center gap-4 rounded-xl px-6 py-4">
                  <span className="font-mono text-xs font-bold text-ice">0{i + 1}</span>
                  <span className="font-display text-sm font-bold tracking-[0.14em] text-paper">{t}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section aria-labelledby="about-cta" className="relative overflow-hidden border-t border-white/10">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative py-16 text-center lg:py-20">
          <Reveal>
            <p className="eyebrow">Get Started</p>
            <h2 id="about-cta" className="font-display mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-paper sm:text-4xl">
              Let&apos;s Build a More Secure Future.
            </h2>
            <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
              <div className="panel rounded-2xl p-8">
                <p className="font-display text-xs font-bold tracking-[0.22em] text-fog">FOR ORGANIZATIONS</p>
                <p className="mx-auto mt-2 max-w-[240px] text-sm text-mist">Security services, assessments, and defense.</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#B9C6FF] px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-[#CBD6FF]">
                  Get A Quote <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
              <div className="panel rounded-2xl p-8">
                <p className="font-display text-xs font-bold tracking-[0.22em] text-fog">FOR LEARNERS</p>
                <p className="mx-auto mt-2 max-w-[240px] text-sm text-mist">Courses, labs, paths, and certifications.</p>
                <Link to="/education" className="mt-5 inline-flex items-center gap-2 rounded-lg border border-ice/50 px-6 py-3 text-sm font-semibold text-ice transition-colors hover:bg-ice/10">
                  Explore Courses <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

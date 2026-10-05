import { ArrowRight, Globe, Handshake, Lightbulb, GraduationCap, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";

const AT_GLANCE = [
  { title: "CYBERSECURITY SERVICES", copy: "Organizations & businesses" },
  { title: "CYBER EDUCATION", copy: "Students & professionals" },
  { title: "PRACTICAL EXPERTISE", copy: "Real-world security experience" },
  { title: "INDUSTRY FOCUSED", copy: "Security knowledge" },
];

const BELIEFS = [
  { icon: ShieldCheck, title: "SECURITY", copy: "Protect what matters." },
  { icon: Lightbulb, title: "INNOVATION", copy: "Keep evolving with technology." },
  { icon: GraduationCap, title: "EDUCATION", copy: "Build people who can defend." },
  { icon: Handshake, title: "TRUST", copy: "Security built on confidence." },
  { icon: Search, title: "PRACTICAL", copy: "Skills that work in reality." },
  { icon: Globe, title: "IMPACT", copy: "Security that creates value." },
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

const JOURNEY = [
  "Foundation",
  "First Services",
  "Education Programs",
  "New Capabilities",
];

export function AboutPage() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 lg:pt-[72px]" aria-label="About MartianBlue">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_35%,#000,transparent)]" aria-hidden="true" />
        <Container className="relative py-16 text-center sm:py-20 lg:py-24">
          <Reveal>
            <p className="eyebrow">About MartianBlue</p>
            <h1 className="font-display mx-auto mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-5xl">
              About Us
            </h1>
            <p className="font-display mx-auto mt-5 max-w-3xl text-xl text-paper sm:text-2xl">
              Building a stronger digital future through cybersecurity and education.
            </p>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mist">
              Martianblue Cyber Defense helps organizations improve their
              cybersecurity while helping individuals build practical
              cybersecurity skills.
            </p>
            <a href="#story" className="mt-8 inline-block rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:-translate-y-px hover:border-ice/60">
              Our Story ↓
            </a>
          </Reveal>
        </Container>
      </section>

      {/* AT A GLANCE */}
      <section aria-label="At a glance" className="border-y border-white/10 bg-navy-950/60">
        <Container className="py-12">
          <Reveal>
            <h2 className="text-center font-mono text-xs tracking-[0.28em] text-fog">AT A GLANCE</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {AT_GLANCE.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="panel h-full rounded-2xl p-6 text-center">
                  <h3 className="font-display text-sm font-bold tracking-[0.1em] text-paper">{c.title}</h3>
                  <p className="mt-2 text-sm text-mist">{c.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* OUR STORY */}
      <section id="story" aria-labelledby="story-h" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">Our Story</p>
            <h2 id="story-h" className="font-display mt-3 text-3xl font-bold text-paper">Our Journey</h2>
            <p className="mx-auto mt-3 max-w-xl text-mist">From cybersecurity knowledge to practical cyber defense.</p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="bg-blueprint-grid flex min-h-[280px] items-center justify-center rounded-2xl border border-white/10 bg-navy-900/60 p-10" aria-hidden="true">
                <span className="rounded border border-dashed border-white/20 px-6 py-4 text-center text-xs leading-relaxed tracking-[0.2em] text-fog">
                  LARGE IMAGE /<br />BRAND VISUAL
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ol className="panel rounded-2xl p-7" aria-label="Company milestones">
                <p className="text-sm text-fog">[ Company story / milestones ]</p>
                <div className="mt-5 space-y-0">
                  {JOURNEY.map((m, i) => (
                    <li key={m} className="relative flex gap-4 pb-6 last:pb-0">
                      {i < JOURNEY.length - 1 && (
                        <span className="absolute left-[52px] top-[30px] h-[calc(100%-24px)] w-px bg-white/10" aria-hidden="true" />
                      )}
                      <span className="w-14 shrink-0 font-mono text-xs text-fog">20XX</span>
                      <span className="relative mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-electric" aria-hidden="true" />
                      <span className="text-[15px] font-medium text-paper">{m}</span>
                    </li>
                  ))}
                  <li className="flex gap-4">
                    <span className="w-14 shrink-0" aria-hidden="true" />
                    <span className="font-display rounded bg-electric/15 px-3 py-1 text-xs font-bold tracking-[0.18em] text-ice">▼ TODAY</span>
                  </li>
                </div>
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* WHAT WE BELIEVE */}
      <section id="mission" aria-labelledby="believe-h" className="scroll-mt-24 border-y border-white/10 bg-navy-950/60 py-16 lg:py-20">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">What We Believe</p>
            <h2 id="believe-h" className="font-display mx-auto mt-3 max-w-2xl text-3xl font-bold text-paper">
              Cybersecurity should be practical, proactive and accessible.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BELIEFS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="panel h-full rounded-2xl p-7 text-center">
                    <Icon size={24} className="mx-auto text-ice" aria-hidden="true" />
                    <h3 className="font-display mt-3 text-base font-bold tracking-[0.12em] text-paper">{b.title}</h3>
                    <p className="mt-1.5 text-sm text-mist">{b.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* OUR APPROACH */}
      <section aria-labelledby="approach-h" className="py-16 lg:py-20">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">Our Approach</p>
            <h2 id="approach-h" className="font-display mt-3 text-3xl font-bold text-paper">How MartianBlue Works</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ol className="mt-8 grid gap-4 sm:grid-cols-3" aria-label="Approach steps">
              {[
                ["UNDERSTAND", "Understand the problem"],
                ["IDENTIFY", "Assess risks & weaknesses"],
                ["PROTECT", "Build the right defense"],
              ].map(([t, d]) => (
                <li key={t} className="panel rounded-2xl p-6">
                  <h3 className="font-display text-base font-bold tracking-[0.12em] text-ice">{t}</h3>
                  <p className="mt-2 text-sm text-mist">{d}</p>
                </li>
              ))}
            </ol>
            <p className="my-2 font-mono text-fog" aria-hidden="true">▼</p>
            <div className="panel mx-auto max-w-md rounded-2xl p-6">
              <h3 className="font-display text-base font-bold tracking-[0.12em] text-paper">IMPROVE</h3>
              <p className="mt-2 text-sm text-mist">Continuous security growth</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TWO SIDES */}
      <section aria-label="Two sides, one cyber ecosystem" className="border-y border-white/10 bg-navy-950/60 py-16 lg:py-20">
        <Container className="max-w-2xl">
          <Reveal className="text-center">
            <h2 className="font-display text-2xl font-bold text-paper">TWO SIDES. ONE CYBER ECOSYSTEM.</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="panel mt-8 rounded-2xl p-8 text-center">
              <h3 className="font-display text-xl font-bold text-paper">CYBERSECURITY SERVICES</h3>
              <p className="mt-1 text-sm text-fog">For Organizations</p>
              <ul className="mx-auto mt-4 max-w-xs space-y-1.5 text-sm text-mist">
                {["Security Services", "Assessments", "Consulting", "Cyber Defense"].map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
              <Link to="/services" className="group mt-5 inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-electric-bright">
                Explore Services <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <div className="flex justify-center py-1 font-mono text-fog" aria-hidden="true">▼</div>
          <Reveal delay={0.1}>
            <p className="text-center font-mono text-xs tracking-[0.24em] text-ice">MARTIANBLUE<br />CYBER DEFENSE</p>
          </Reveal>
          <div className="flex justify-center py-1 font-mono text-fog" aria-hidden="true">▼</div>
          <Reveal delay={0.12}>
            <div className="panel rounded-2xl p-8 text-center">
              <h3 className="font-display text-xl font-bold text-paper">CYBER EDUCATION</h3>
              <p className="mt-1 text-sm text-fog">For Learners</p>
              <ul className="mx-auto mt-4 max-w-xs space-y-1.5 text-sm text-mist">
                {["Courses", "Hands-on Labs", "Learning Paths", "Certifications"].map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
              <Link to="/education" className="group mt-5 inline-flex items-center gap-2 rounded-full border border-ice/50 px-6 py-3 text-sm font-semibold text-ice transition-all hover:bg-ice/10">
                Explore Education <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* EXPERTISE */}
      <section aria-label="Our expertise" className="py-16 lg:py-20">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">Our Expertise</p>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mt-6 flex flex-wrap justify-center gap-2.5" aria-label="Expertise areas">
              {EXPERTISE.map((e) => (
                <li key={e} className="rounded-full border border-white/12 bg-navy-950/70 px-5 py-2 text-[13px] font-semibold tracking-[0.08em] text-paper">
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* TEAM */}
      <section id="team" aria-labelledby="team-h" className="scroll-mt-24 border-y border-white/10 bg-navy-950/60 py-16 lg:py-20">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">Our Team</p>
            <h2 id="team-h" className="font-display mt-3 text-3xl font-bold text-paper">People Behind MartianBlue</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Name — Role", "Name — Role", "Name — Role"].map((t, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="panel rounded-2xl p-7 text-center">
                  <div className="bg-blueprint-grid mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-white/20 bg-navy-900/60 text-xs tracking-[0.2em] text-fog" aria-hidden="true">
                    PHOTO
                  </div>
                  <p className="mt-4 text-[15px] text-mist">[ PHOTO ] {t}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Partners */}
          <Reveal delay={0.1}>
            <div id="partners" className="mt-14 scroll-mt-24 text-center">
              <h3 className="font-mono text-xs tracking-[0.28em] text-fog">TRUSTED TECHNOLOGY & PARTNERS</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Partner logos (placeholders)">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="rounded-xl border border-dashed border-white/15 bg-abyss/60 px-4 py-8 text-xs tracking-[0.2em] text-fog">
                    [ LOGO ]
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-fog">Technology / Training Partners · Certifications / Affiliations</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* WHY */}
      <section id="why" aria-labelledby="why-about-h" className="scroll-mt-24 py-16 lg:py-20">
        <Container className="max-w-2xl">
          <Reveal className="text-center">
            <p className="eyebrow">Why MartianBlue?</p>
            <h2 id="why-about-h" className="sr-only">Why MartianBlue</h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {["SECURITY EXPERTISE", "PRACTICAL LEARNING", "MODERN TECHNOLOGY", "PEOPLE-FIRST APPROACH"].map((t, i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="panel rounded-xl px-6 py-4 text-center font-display text-sm font-bold tracking-[0.14em] text-paper">
                  {t}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section aria-labelledby="about-cta" className="relative overflow-hidden border-t border-white/10">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative py-16 text-center lg:py-20">
          <Reveal>
            <h2 id="about-cta" className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
              LET&apos;S BUILD A MORE SECURE FUTURE.
            </h2>
            <div className="mx-auto mt-8 grid max-w-3xl gap-5 sm:grid-cols-2">
              <div className="panel rounded-2xl p-8">
                <p className="font-display text-xs font-bold tracking-[0.22em] text-fog">FOR ORGANIZATIONS</p>
                <Link to="/contact" className="group mt-4 inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-electric-bright">
                  Get A Quote <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="panel rounded-2xl p-8">
                <p className="font-display text-xs font-bold tracking-[0.22em] text-fog">FOR LEARNERS</p>
                <Link to="/education" className="group mt-4 inline-flex items-center gap-2 rounded-full border border-ice/50 px-6 py-3 text-sm font-semibold text-ice transition-all hover:bg-ice/10">
                  Explore Courses <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

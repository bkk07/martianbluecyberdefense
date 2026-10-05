import { ArrowRight, Award, BadgeCheck, Check, ChevronDown, FlaskConical, Sprout, Zap, Rocket } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import {
  EDU_COMPARE_ROWS,
  EDU_FAQS,
  EDU_LABS,
  EDU_PROGRAMS,
  EDU_STATS,
  EDU_TOOLS,
} from "../data/education";

const LEVEL_ICONS = [Sprout, Zap, Rocket];

const LEARNING_PATH = [
  { step: "STEP 01", title: "FUNDAMENTAL", items: ["Security Basics", "Networking", "Linux"] },
  { step: "STEP 02", title: "ETHICAL HACKING", items: ["Penetration Testing", "Web Security", "Recon / Exploitation"] },
  { step: "STEP 03", title: "SOC ANALYST", items: ["Threat Hunting", "SIEM", "Forensics"] },
];

export function EducationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main id="main">
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 lg:pt-[72px]" aria-label="Cyber Education Hub">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_35%,#000,transparent)]" aria-hidden="true" />
        <Container className="relative py-16 text-center sm:py-20 lg:py-24">
          <Reveal>
            <p className="eyebrow">Martian Blue Cyber Education Hub</p>
            <h1 className="font-display mx-auto mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-5xl">
              Learn Cybersecurity. Build Real Security Skills.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-mist sm:text-lg">
              Industry-focused cybersecurity programs with practical training,
              hands-on labs, security tools and structured learning paths.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#programs" className="rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-electric-bright">
                Explore Programs →
              </a>
              <a href="#learning-path" className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:-translate-y-px hover:border-ice/60 hover:bg-white/10">
                View Learning Path ↓
              </a>
            </div>
          </Reveal>

          {/* Learning progression */}
          <Reveal delay={0.1}>
            <ol className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center" aria-label="Learning progression">
              {[
                { level: "BEGINNER", course: "Fundamentals", weeks: "4 Weeks" },
                { level: "INTERMEDIATE", course: "Ethical Hacking", weeks: "6 Weeks" },
                { level: "ADVANCED", course: "SOC Analyst", weeks: "8 Weeks" },
              ].map((s, i) => (
                <div key={s.level} className="contents">
                  <li className="panel rounded-xl px-5 py-4">
                    <p className="font-display text-xs font-bold tracking-[0.2em] text-ice">{s.level}</p>
                    <p className="mt-1 text-sm font-semibold text-paper">{s.course}</p>
                    <p className="text-xs text-fog">{s.weeks}</p>
                  </li>
                  {i < 2 && (
                    <span className="hidden font-mono text-electric-bright sm:block" aria-hidden="true">──→</span>
                  )}
                </div>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* KEY STATS */}
      <section aria-label="Key stats" className="border-y border-white/10 bg-navy-950/60">
        <Container className="py-12">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {EDU_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="flex flex-col gap-1 border-l-2 border-electric/50 pl-5">
                  <dd className="font-display text-3xl font-bold uppercase text-paper lg:text-4xl">{s.value}</dd>
                  <dt className="text-sm font-medium text-mist">{s.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* EDUCATION NAVIGATION */}
      <Container className="pt-10">
        <Reveal>
          <nav aria-label="Education sections" className="flex flex-wrap justify-center gap-2.5">
            {[
              ["PROGRAMS", "#programs"],
              ["UPCOMING BATCHES", "#batches"],
              ["LEARNING PATH", "#learning-path"],
              ["CORPORATE TRAINING", "#corporate"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-full border border-white/15 bg-navy-950/70 px-5 py-2.5 text-[13px] font-bold tracking-[0.12em] text-mist transition-colors hover:border-ice/50 hover:text-paper">
                {label}
              </a>
            ))}
          </nav>
        </Reveal>
      </Container>

      {/* OUR PROGRAMS */}
      <section id="programs" aria-labelledby="programs-h" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">Our Programs</p>
            <h2 id="programs-h" className="font-display mt-3 text-3xl font-bold text-paper sm:text-4xl">
              Choose the right path for your level.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {EDU_PROGRAMS.map((p, i) => {
              const Icon = LEVEL_ICONS[i % LEVEL_ICONS.length];
              return (
                <Reveal key={p.slug} delay={i * 0.07}>
                  <article className="panel panel-top-highlight flex h-full flex-col rounded-2xl p-8">
                    <p className="inline-flex w-fit items-center gap-1.5 rounded-full border border-ice/40 bg-ice/10 px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-ice">
                      <Icon size={13} aria-hidden="true" /> {p.badge.toUpperCase()}
                    </p>
                    <p className="mt-4 text-xs font-bold tracking-[0.18em] text-fog">
                      {p.level.toUpperCase()} · {p.duration.toUpperCase()}
                    </p>
                    <h3 className="font-display mt-2 text-xl font-bold leading-snug text-paper">
                      {p.title.toUpperCase()}
                    </h3>
                    <p className="mt-2 text-[15px] text-mist">{p.description}</p>
                    <ul className="mt-5 space-y-2">
                      {p.topics.map((t) => (
                        <li key={t} className="flex items-center gap-2.5 text-sm text-paper">
                          <Check size={15} aria-hidden="true" className="shrink-0 text-ice" /> {t}
                        </li>
                      ))}
                      <li className="text-sm text-fog">+ More topics</li>
                    </ul>
                    <p className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-sm font-medium text-mist">
                      <BadgeCheck size={16} className="text-ice" aria-hidden="true" /> Certificate Included
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <p className="font-display text-2xl font-bold text-paper">{p.price}</p>
                      <Link to="/contact" className="group inline-flex items-center gap-1.5 rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-electric-bright">
                        View <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* COMPARE PROGRAMS */}
      <section aria-labelledby="compare-h" className="border-y border-white/10 bg-navy-950/60 py-16 lg:py-20">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">Compare Programs</p>
            <h2 id="compare-h" className="font-display mt-3 text-3xl font-bold text-paper">
              Which path is right for you?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="slim-scroll mx-auto mt-8 max-w-4xl overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[560px] border-collapse bg-abyss/60 text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-5 py-4 font-medium text-fog"><span className="sr-only">Feature</span></th>
                    {["Beginner", "Intermediate", "Advanced"].map((h) => (
                      <th key={h} className="font-display px-5 py-4 font-bold text-paper">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {EDU_COMPARE_ROWS.map((r) => (
                    <tr key={r.label} className="border-b border-white/5 last:border-0">
                      <th className="px-5 py-3.5 font-medium text-mist">{r.label}</th>
                      {r.values.map((v, i) => (
                        <td key={i} className="px-5 py-3.5 text-paper">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* YOUR LEARNING PATH */}
      <section id="learning-path" aria-labelledby="path-h" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">Your Learning Path</p>
            <h2 id="path-h" className="font-display mt-3 text-3xl font-bold text-paper">Fundamentals → Offense → Defense → Career</h2>
          </Reveal>
          <ol className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {LEARNING_PATH.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.07}>
                <li className="panel rounded-2xl p-7 text-center">
                  <p className="font-mono text-xs text-ice">{s.step}</p>
                  <h3 className="font-display mt-2 text-lg font-bold tracking-wide text-paper">{s.title}</h3>
                  <ul className="mt-4 space-y-1.5 text-sm text-mist">
                    {s.items.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.15}>
            <div className="mx-auto mt-6 flex max-w-5xl flex-col items-center gap-2 text-center" aria-label="Certification to career">
              <span className="font-mono text-fog" aria-hidden="true">▼</span>
              <p className="rounded-full border border-ice/40 bg-ice/10 px-6 py-2 text-sm font-bold tracking-[0.14em] text-ice">CERTIFICATION</p>
              <span className="font-mono text-fog" aria-hidden="true">▼</span>
              <p className="rounded-full bg-electric px-6 py-2 text-sm font-bold tracking-[0.14em] text-white">CYBERSECURITY CAREER</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* LEARN BY DOING */}
      <section id="labs" aria-labelledby="labs-h" className="scroll-mt-24 border-y border-white/10 bg-navy-950/60 py-16 lg:py-20">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">Learn By Doing</p>
            <h2 id="labs-h" className="font-display mt-3 text-3xl font-bold text-paper">
              Don&apos;t just learn cybersecurity. Practice it.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EDU_LABS.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.06}>
                <div className="panel h-full rounded-2xl p-6">
                  <FlaskConical size={22} className="text-ice" aria-hidden="true" />
                  <h3 className="font-display mt-4 text-base font-bold tracking-wide text-paper">{l.title.toUpperCase()}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{l.tools}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <h3 className="font-display mt-12 text-center text-xs font-bold tracking-[0.24em] text-fog">TOOLS YOU&apos;LL WORK WITH</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Security tools">
              {EDU_TOOLS.map((t) => (
                <li key={t} className="rounded-lg border border-white/10 bg-abyss/70 px-4 py-3 text-center font-mono text-[13px] tracking-[0.12em] text-paper">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* INSTRUCTORS + CERTIFICATION */}
      <section className="py-16 lg:py-20">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">Learn From Practitioners</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-paper">Experienced instructors. Practical security knowledge.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Instructor 01", "Security Expert"],
              ["Instructor 02", "Pentest Expert"],
              ["Instructor 03", "SOC Professional"],
            ].map(([name, role], i) => (
              <Reveal key={name} delay={i * 0.07}>
                <div className="panel rounded-2xl p-7 text-center">
                  <div className="bg-blueprint-grid mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-white/20 bg-navy-900/60 text-xs tracking-[0.2em] text-fog" aria-hidden="true">
                    PHOTO
                  </div>
                  <h3 className="font-display mt-4 text-lg font-semibold text-paper">{name}</h3>
                  <p className="text-sm text-mist">{role}</p>
                  <p className="mt-3 text-sm font-semibold text-ice">View Profile →</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Certification */}
          <Reveal delay={0.1}>
            <div id="certification" className="panel mt-12 grid scroll-mt-24 items-center gap-8 rounded-2xl p-8 scroll-mt-24 lg:grid-cols-2 lg:p-12">
              <div>
                <p className="eyebrow">MartianBlue Certification</p>
                <h3 className="font-display mt-3 text-2xl font-bold text-paper sm:text-3xl">Complete your training. Demonstrate your skills.</h3>
                <Link to="/contact" className="group mt-6 inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-electric-bright">
                  Verify Certificate <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="rounded-xl border border-ice/30 bg-abyss/80 p-8 text-center" role="img" aria-label="Certificate of completion for Ethical Hacking and Penetration Testing">
                <p className="text-[11px] font-bold tracking-[0.24em] text-ice">MARTIANBLUE CYBER DEFENSE</p>
                <p className="font-display mt-3 text-lg font-bold text-paper">CERTIFICATE OF COMPLETION</p>
                <p className="mt-2 text-sm text-mist">Ethical Hacking &<br />Penetration Testing</p>
                <p className="mx-auto mt-4 max-w-[220px] rounded border border-dashed border-white/20 px-4 py-2 text-sm text-fog">[ Student Name ]</p>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-fog">
                  <Award size={13} aria-hidden="true" /> Certificate ID
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* UPCOMING BATCHES */}
      <section id="batches" aria-labelledby="batches-h" className="scroll-mt-24 border-y border-white/10 bg-navy-950/60 py-16 lg:py-20">
        <Container>
          <Reveal>
            <p className="eyebrow">Upcoming Batches</p>
            <h2 id="batches-h" className="font-display mt-3 text-3xl font-bold text-paper">Reserve your seat.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="panel mt-8 rounded-2xl p-7 sm:p-8" role="group" aria-label="Upcoming batch: Ethical Hacking and Penetration Testing">
              <h3 className="font-display text-lg font-bold tracking-wide text-paper sm:text-xl">ETHICAL HACKING & PENETRATION TESTING</h3>
              <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ["START DATE", "15 NOV 2026"],
                  ["MODE", "ONLINE"],
                  ["DURATION", "6 WEEKS"],
                  ["AVAILABLE SEATS", "08 SEATS LEFT"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[11px] font-bold tracking-[0.18em] text-fog">{k}</dt>
                    <dd className="font-display mt-1 font-bold text-paper">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-display text-2xl font-bold text-paper">₹6,999</p>
                <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-electric-bright">
                  ENROLL NOW <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Learner testimonials */}
          <Reveal delay={0.1}>
            <h3 className="font-display mt-12 text-center text-xl font-semibold text-paper">“Real training. Real practical experience.”</h3>
            <figure className="panel mx-auto mt-5 max-w-2xl rounded-2xl p-8 text-center">
              <blockquote className="text-mist">“....................................”</blockquote>
              <figcaption className="mt-4 text-sm text-fog">— Student Name<br />Ethical Hacking Program</figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* FAQS */}
      <section aria-labelledby="faq-h" className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <Reveal className="text-center">
            <p className="eyebrow">FAQs</p>
            <h2 id="faq-h" className="font-display mt-3 text-3xl font-bold text-paper">Frequently Asked Questions</h2>
          </Reveal>
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
            {EDU_FAQS.map((q, i) => {
              const open = openFaq === i;
              return (
                <div key={q}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-[15px] font-medium text-paper transition-colors hover:bg-white/[0.02]"
                  >
                    {q}
                    <ChevronDown size={17} aria-hidden="true" className={`shrink-0 text-mist transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <p className="px-6 pb-5 text-sm leading-relaxed text-mist">
                      Contact our team for the latest details on {q.charAt(0).toLowerCase() + q.slice(1, -2)} and related program information.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section id="corporate" aria-labelledby="edu-cta" className="relative scroll-mt-24 overflow-hidden border-t border-white/10">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative py-16 text-center lg:py-20">
          <Reveal>
            <h2 id="edu-cta" className="font-display text-3xl font-bold text-paper sm:text-4xl">READY TO BUILD YOUR CYBER SKILLS?</h2>
            <p className="mx-auto mt-3 max-w-xl text-mist">Start with the right program and begin your journey into practical cybersecurity.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#programs" className="rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-electric-bright">Explore Programs →</a>
              <a href="#batches" className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:border-ice/60">View Upcoming Batches →</a>
            </div>
            <p className="mt-8 text-sm text-fog">Looking for cybersecurity training for your organization?</p>
            <Link to="/contact" className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ice">
              Corporate Training <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

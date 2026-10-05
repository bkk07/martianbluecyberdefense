import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  Compass,
  LayoutGrid,
  Plus,
  Route,
  Star,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  EDU_BATCHES,
  EDU_CORPORATE,
  EDU_FAQS,
  EDU_HERO_STATS,
  EDU_PATH,
  EDU_PERSONAS,
  EDU_PROGRAMS,
  EDU_REVIEWS,
  EDU_TABS,
  type BatchStatus,
  type EduTab,
} from "../data/education";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";

const TAB_ICONS = [LayoutGrid, CalendarDays, Route, Building2] as const;

const STATUS_STYLE: Record<BatchStatus, string> = {
  Enrolling: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Upcoming: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  Available: "border-sky-500/30 bg-sky-500/10 text-sky-300",
};

function ProgramsPanel() {
  const [persona, setPersona] = useState<string | null>(null);
  const match = EDU_PROGRAMS.find((p) => p.slug === persona);

  return (
    <div>
      <Reveal>
        <div className="mb-8 rounded-2xl border border-white/10 bg-navy-950/70 p-6 sm:p-7">
          <p className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-ice">
            <Compass size={14} aria-hidden="true" />
            NOT SURE WHERE TO START?
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {EDU_PERSONAS.map((ps) => {
              const selected = persona === ps.programSlug;
              return (
                <button
                  key={ps.programSlug}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setPersona(selected ? null : ps.programSlug)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                    selected
                      ? "border-[#B9C6FF] bg-[#B9C6FF] text-navy-950"
                      : "border-white/15 text-mist hover:border-white/35 hover:text-paper"
                  }`}
                >
                  {ps.label}
                  <span className={`ml-2 text-xs font-normal ${selected ? "text-navy-800" : "text-fog"}`}>
                    · {ps.hint}
                  </span>
                </button>
              );
            })}
          </div>
          {match && (
            <p className="mt-4 text-sm text-mist">
              Recommended for you:{" "}
              <span className="font-semibold text-paper">
                {match.title} ({match.level} · {match.duration})
              </span>{" "}
              — highlighted below.{" "}
              <button
                type="button"
                onClick={() => setPersona(null)}
                className="font-semibold text-ice hover:underline"
              >
                Show all
              </button>
            </p>
          )}
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
      {EDU_PROGRAMS.map((p) => {
        const Icon = p.icon;
        const dimmed = persona !== null && persona !== p.slug;
        return (
          <Reveal key={p.slug} className="h-full">
            <article
              className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-950/70 p-7 transition-opacity duration-300 ${dimmed ? "opacity-40 saturate-50" : ""}`}
              style={{ boxShadow: `inset 0 1px 0 ${p.accent}22` }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${p.accent}88, transparent)` }}
              />
              <div className="flex items-start justify-between gap-3">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${p.accent}1A`, color: p.accent }}
                >
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span
                  className="rounded-full px-3.5 py-1 text-xs font-bold text-navy-950"
                  style={{ background: p.accent }}
                >
                  {p.badge}
                </span>
              </div>

              <p className="mt-5 font-mono text-xs font-bold tracking-[0.18em]" style={{ color: p.accent }}>
                {p.level.toUpperCase()} · {p.duration.toUpperCase()}
              </p>
              <h3 className="font-display mt-2 text-[1.35rem] font-bold leading-snug tracking-tight text-paper">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{p.description}</p>

              <p className="mt-6 text-xs font-bold tracking-[0.2em]" style={{ color: p.accent }}>
                WHAT YOU&apos;LL LEARN
              </p>
              <ul className="mt-3 space-y-2">
                {p.learn.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-mist">
                    <ChevronRight size={15} aria-hidden="true" className="mt-0.5 shrink-0" style={{ color: p.accent }} />
                    {t}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs font-bold tracking-[0.2em]" style={{ color: p.accent }}>
                OUTCOMES
              </p>
              <ul className="mt-3 space-y-2">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-paper">
                    <Check size={15} strokeWidth={3} aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-400" />
                    {o}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-6">
                <span className="font-display text-2xl font-bold tabular-nums" style={{ color: p.accent }}>
                  {p.price}
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-bold text-navy-950 transition-opacity hover:opacity-90"
                  style={{ background: p.accent }}
                >
                  Enroll Now
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </Reveal>
        );
      })}
      </div>
    </div>
  );
}

function BatchesPanel() {
  return (
    <Reveal>
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-navy-950/70">
        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-[13px] tracking-wide text-ice">
              {["Program", "Start Date", "Mode", "Seats", "Available", "Status", "Action"].map((h) => (
                <th key={h} scope="col" className="px-5 py-4 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {EDU_BATCHES.map((b) => (
              <tr key={`${b.program}-${b.startDate}`} className="border-b border-white/[0.06] transition-colors last:border-0 hover:bg-white/[0.02]">
                <td className="px-5 py-4 font-medium text-paper">{b.program}</td>
                <td className="px-5 py-4 text-mist">{b.startDate}</td>
                <td className="px-5 py-4 text-mist">{b.mode}</td>
                <td className="px-5 py-4 tabular-nums text-mist">{b.seats}</td>
                <td
                  className={`px-5 py-4 font-bold tabular-nums ${b.available <= 8 ? "text-rose-300" : "text-emerald-300"}`}
                >
                  {b.available}
                </td>
                <td className="px-5 py-4">
                  <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${STATUS_STYLE[b.status]}`}>
                    {b.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <Link
                    to="/contact"
                    className="inline-block rounded-lg border border-ice/40 px-5 py-2 text-[13px] font-semibold text-ice transition-colors hover:bg-ice/10"
                  >
                    Register
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}

function PathPanel() {
  return (
    <div className="mx-auto max-w-2xl">
      <Reveal className="text-center">
        <h3 className="font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
          Your Cybersecurity Learning Journey
        </h3>
      </Reveal>
      <ol className="mt-10">
        {EDU_PATH.map((s, i) => {
          const Icon = s.icon;
          const last = i === EDU_PATH.length - 1;
          return (
            <Reveal key={s.index}>
              <li className="relative flex gap-5 pb-10 last:pb-0">
                {!last && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[27px] top-16 bottom-0 w-px"
                    style={{ background: `linear-gradient(180deg, ${s.accent}66, ${EDU_PATH[i + 1].accent}66)` }}
                  />
                )}
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 bg-navy-950"
                  style={{ borderColor: `${s.accent}88`, color: s.accent, boxShadow: `0 0 24px -6px ${s.accent}66` }}
                >
                  <Icon size={22} />
                </span>
                <span className="pt-1">
                  <span className="font-mono text-xs font-bold tracking-[0.2em]" style={{ color: s.accent }}>
                    {s.index}
                  </span>
                  <span className="font-display mt-1 block text-xl font-bold text-paper">{s.title}</span>
                  <span className="mt-1 block text-[15px] text-mist">{s.description}</span>
                </span>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}

function CorporatePanel() {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-3">
        {EDU_CORPORATE.map((c) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.title} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-950/70 p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ice/10 text-ice">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-xl font-bold tracking-tight text-ice">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{c.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-paper">
                      <Check size={15} strokeWidth={3} aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-400" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-8 rounded-2xl border border-ice/25 bg-gradient-to-b from-ice/[0.07] to-transparent px-8 py-12 text-center">
          <h3 className="font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
            Get a Custom Corporate Training Quote
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-mist">
            We design programs for teams of 10 to 10,000. Online, on-site, or hybrid delivery available.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#B9C6FF] px-8 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-[#CBD6FF]"
          >
            Contact Us for Pricing
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

function StudentSuccess() {
  return (
    <section aria-labelledby="student-success-h" className="border-t border-white/[0.07]">
      <Container className="py-16 lg:py-20">
        <Reveal className="text-center">
          <p className="eyebrow">Student Success</p>
          <h2 id="student-success-h" className="font-display mt-3 text-2xl font-bold tracking-tight text-paper sm:text-3xl">
            What Our Students Say
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {EDU_REVIEWS.map((r) => (
            <li key={r.name}>
              <Reveal className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-950/70 p-7">
                  <span className="flex gap-1" aria-label="Rated 5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} aria-hidden="true" className="fill-amber-400 text-amber-400" />
                    ))}
                  </span>
                  <blockquote className="mt-4 flex-1 text-[15px] italic leading-relaxed text-paper">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ice/15 font-mono text-xs font-bold text-ice ring-1 ring-ice/30"
                    >
                      {r.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-paper">{r.name}</span>
                      <span className="block text-[13px] text-ice/80">{r.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="edu-faq-h" className="border-t border-white/[0.07]">
      <Container className="max-w-3xl py-16 lg:py-20">
        <Reveal className="text-center">
          <h2 id="edu-faq-h" className="font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {EDU_FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.question}>
                <div
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen ? "border-ice/30 bg-navy-950/80" : "border-white/10 bg-navy-950/50"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`edu-faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-[15px] font-semibold text-paper"
                  >
                    {f.question}
                    <Plus
                      size={17}
                      aria-hidden="true"
                      className={`shrink-0 text-ice transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  <div
                    id={`edu-faq-${i}`}
                    role="region"
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-mist">{f.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function EducationPage() {
  const [tab, setTab] = useState<EduTab>("Programs");

  return (
    <main id="main">
      <PageHero
        eyebrow="Cyber Education"
        title="Build Job-Ready Cybersecurity Skills"
        copy="Structured programs, live batches, and corporate training — from first principles to SOC-ready."
        primary={{ label: "Explore Programs", href: "#edu-tabs" }}
        secondary={{ label: "Talk to Us", href: "/contact" }}
      />

      <section aria-label="Education highlights" className="border-b border-white/[0.07]">
        <Container className="py-10">
          <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
            {EDU_HERO_STATS.map((s) => (
              <Reveal key={s.label}>
                <div className="rounded-2xl border border-ice/20 bg-ice/[0.04] px-4 py-6 text-center">
                  <dd className="font-display text-2xl font-bold tabular-nums text-ice sm:text-3xl">
                    {s.value}
                  </dd>
                  <dt className="mt-1.5 text-[13px] text-mist">{s.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <div id="edu-tabs" className="sticky top-16 z-30 scroll-mt-24 border-b border-white/10 bg-abyss/90 backdrop-blur-xl lg:top-[72px]">
        <Container className="py-0">
          <div role="tablist" aria-label="Education sections" className="slim-scroll flex gap-2.5 overflow-x-auto py-3">
            {EDU_TABS.map((t, i) => {
              const Icon = TAB_ICONS[i];
              const selected = tab === t;
              return (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setTab(t)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors ${
                    selected
                      ? "border-[#B9C6FF] bg-[#B9C6FF] text-navy-950"
                      : "border-white/12 text-mist hover:border-white/30 hover:text-paper"
                  }`}
                >
                  <Icon size={15} aria-hidden="true" />
                  {t}
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      <Container className="pt-12">
        {tab === "Programs" && <ProgramsPanel />}
        {tab === "Upcoming Batches" && <BatchesPanel />}
        {tab === "Learning Path" && <PathPanel />}
        {tab === "Corporate Training" && <CorporatePanel />}
      </Container>

      <div className="mt-4">
        <StudentSuccess />
        <Faq />
      </div>

      <Container className="pb-24">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-navy-950/70 px-8 py-8 text-center sm:flex-row sm:text-left">
            <p className="font-display text-xl font-semibold text-paper">
              Ready to start your cybersecurity journey?
            </p>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#B9C6FF] px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-[#CBD6FF]"
            >
              Enroll Now
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}

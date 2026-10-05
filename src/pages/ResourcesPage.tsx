import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";

const READ = [
  { label: "Blog", href: "#blog", desc: "Threat breakdowns & awareness" },
  { label: "Security Guides", href: "#guides", desc: "Playbooks & checklists" },
  { label: "Case Studies", href: "#case-studies", desc: "Engagements & outcomes" },
  { label: "Research", href: "#research", desc: "Fraud & threat notes" },
];

const WATCH = [
  { label: "Webinars", href: "#watch", desc: "Live & on-demand sessions" },
  { label: "Masterclasses", href: "#watch", desc: "Deep-dive expert classes" },
  { label: "Videos", href: "#watch", desc: "Short explainers & demos" },
];

const EXPLORE = [
  { label: "Events", href: "#explore", desc: "Upcoming & past events" },
  { label: "FAQs", href: "#explore", desc: "Common questions" },
  { label: "Topics", href: "#explore", desc: "Browse by category" },
];

const OTHER = [
  { label: "Glossary", href: "#explore", desc: "Cybersecurity terms" },
  { label: "Downloads", href: "#explore", desc: "Templates & one-pagers" },
  { label: "Resources", href: "#explore", desc: "All resource types" },
];

function Group({ id, title, items }: { id: string; title: string; items: { label: string; href: string; desc: string }[] }) {
  return (
    <section id={id} aria-label={title} className="panel scroll-mt-28 rounded-2xl p-7">
      <h2 className="font-display text-xs font-bold tracking-[0.24em] text-ice">{title}</h2>
      <ul className="mt-5 space-y-1">
        {items.map((l) => (
          <li key={l.label}>
            <Link to={`/resources${l.href}`} className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5">
              <span>
                <span className="block text-[15px] font-semibold text-paper">{l.label}</span>
                <span className="block text-[13px] text-fog">{l.desc}</span>
              </span>
              <ArrowRight size={15} aria-hidden="true" className="shrink-0 text-fog transition-all group-hover:translate-x-1 group-hover:text-ice" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ResourcesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Resources"
        title="Cybersecurity Insights, Guides & Learning"
        copy="Stay informed about emerging threats, security practices, and digital defense."
      />

      <Container className="pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Left 70%: grouped directories */}
          <div className="space-y-6">
            <Group id="blog" title="READ" items={READ} />
            <div id="guides" className="scroll-mt-28" aria-hidden="true" />
            <div id="case-studies" className="scroll-mt-28" aria-hidden="true" />
            <div id="research" className="scroll-mt-28" aria-hidden="true" />
            <Group id="watch" title="WATCH & LEARN" items={WATCH} />
            <div className="grid gap-6 sm:grid-cols-2">
              <Group id="explore" title="EXPLORE" items={EXPLORE} />
              <Group id="other" title="OTHER" items={OTHER} />
            </div>
          </div>

          {/* Right 30%: featured */}
          <Reveal delay={0.1}>
            <aside className="panel panel-top-highlight overflow-hidden rounded-2xl lg:sticky lg:top-24" aria-label="Featured insight">
              <div className="bg-blueprint-grid flex h-52 items-center justify-center border-b border-white/10 bg-navy-900/60">
                <span className="rounded border border-dashed border-white/20 px-6 py-4 text-xs tracking-[0.24em] text-fog">
                  [ FEATURED IMAGE ]
                </span>
              </div>
              <div className="p-7">
                <p className="text-[11px] font-bold tracking-[0.2em] text-ice">LATEST CYBERSECURITY INSIGHT</p>
                <h2 className="font-display mt-2 text-xl font-bold leading-snug text-paper">
                  Anatomy of a modern phishing kit
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  How today&apos;s kits bypass filters — and the controls that still stop them.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ice">
                  READ MORE <ArrowRight size={15} aria-hidden="true" />
                </span>
              </div>
            </aside>
          </Reveal>
        </div>

        {/* Platform routes as specified */}
        <Reveal delay={0.05}>
          <nav aria-label="Resource platform routes" className="mt-10 rounded-2xl border border-white/10 bg-navy-950/60 p-6">
            <p className="text-xs font-bold tracking-[0.2em] text-fog">RESOURCE ROUTES</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {["blog", "guides", "case-studies", "research", "webinars", "masterclasses", "videos", "events", "faqs", "glossary", "downloads"].map((r) => (
                <li key={r} className="rounded-full border border-white/12 px-4 py-1.5 font-mono text-xs text-mist">
                  /{r}
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </Container>
    </main>
  );
}

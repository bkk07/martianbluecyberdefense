import { BookOpen, Bot, Fish } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RESOURCE_CARDS, RESOURCE_CATEGORIES, RESOURCE_TABS } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const CARD_ICONS = [BookOpen, Fish, Bot];

export function Resources() {
  const [tab, setTab] = useState(RESOURCE_TABS[0]);

  return (
    <section id="resources" className="scroll-mt-20 py-20 lg:py-28" aria-labelledby="resources-heading">
      <Container>
        <div id="resources-heading">
          <SectionHeading
            eyebrow="Cybersecurity Insights"
            title="Cybersecurity Insights"
            copy="Stay informed about emerging threats, security practices, and digital defense."
            align="center"
          />
        </div>

        <Reveal className="mt-8 flex justify-center gap-2.5">
          <div role="tablist" aria-label="Resource types" className="inline-flex rounded-full border border-white/12 bg-navy-950/70 p-1.5">
            {RESOURCE_TABS.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`rounded-full px-5 py-2 text-[13px] font-bold tracking-[0.1em] transition-all duration-200 ${
                  tab === t ? "bg-electric text-white" : "text-mist hover:text-paper"
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {RESOURCE_CARDS.map((r, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            return (
              <Reveal key={r.title} delay={i * 0.07}>
                <Link
                  to="/resources"
                  className="panel group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-electric/40"
                >
                  <span className="bg-blueprint-grid relative flex h-44 items-center justify-center overflow-hidden border-b border-white/10 bg-navy-900/50" aria-hidden="true">
                    <span className="hero-glow absolute inset-0 opacity-70" />
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-electric/40 bg-abyss/80 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} className="text-ice" />
                    </span>
                    <span className="absolute bottom-3 right-4 font-mono text-[11px] tracking-[0.2em] text-fog">
                      0{i + 1}
                    </span>
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-bold tracking-[0.18em] text-ice">{tab.toUpperCase()} · {r.category.toUpperCase()}</span>
                    <span className="font-display mt-2 text-lg font-semibold text-paper">{r.title}</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs font-semibold tracking-[0.2em] text-fog">POSSIBLE CATEGORIES</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2.5" aria-label="Resource categories">
            {RESOURCE_CATEGORIES.map((c) => (
              <li key={c}>
                <Link
                  to="/resources"
                  className="block rounded-full border border-white/12 bg-abyss/60 px-4 py-1.5 text-[13px] text-mist transition-colors hover:border-ice/50 hover:text-paper"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

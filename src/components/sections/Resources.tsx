import { CalendarDays, Clock3 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RESOURCE_CARDS, RESOURCE_TABS } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function Resources() {
  const [tab, setTab] = useState(RESOURCE_TABS[0]);

  return (
    <section id="resources" className="scroll-mt-20 py-20 lg:py-28" aria-labelledby="resources-heading">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2
              id="resources-heading"
              className="font-display max-w-xl text-3xl font-semibold tracking-tight text-paper sm:text-4xl"
            >
              Featured Cybersecurity Insights
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div role="tablist" aria-label="Resource types" className="flex flex-wrap gap-3">
              {RESOURCE_TABS.map((t) => {
                const selected = tab === t;
                return (
                  <button
                    key={t}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setTab(t)}
                    className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors ${
                      selected
                        ? "bg-[#B9C6FF] text-navy-950"
                        : "bg-white/5 text-mist hover:bg-white/10 hover:text-paper"
                    }`}
                  >
                    {t === "Blog" ? "Blog posts" : t}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {RESOURCE_CARDS.map((r) => (
            <li key={r.title}>
              <Reveal className="h-full">
                <Link to="/resources" className="group block" aria-label={`${r.title} — ${tab}`}>
                  <span className="block overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={r.image}
                      alt={r.imageAlt}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </span>
                  <span className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] font-semibold tracking-[0.08em] text-mist">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={16} aria-hidden="true" className="text-fog" />
                      {r.date.toUpperCase()}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 size={16} aria-hidden="true" className="text-fog" />
                      {r.readTime.toUpperCase()}
                    </span>
                  </span>
                  <span className="mt-4 block border-t border-white/15 pt-5" aria-hidden="true" />
                  <span className="font-display block text-xl font-bold leading-snug tracking-tight text-paper transition-colors group-hover:text-ice">
                    {r.title}
                  </span>
                  <span className="mt-2 block text-sm text-mist">
                    {tab} &middot; {r.category}
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

import { ArrowRight, Check } from "lucide-react";
import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/services";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import {
  AwarenessDashboard,
  DataProtectionDashboard,
  SecureDevDashboard,
  ThreatDashboard,
} from "../components/sections/dashboard/Dashboards";

const VISUALS: Record<string, ComponentType> = {
  antiphishing: AwarenessDashboard,
  dlp: DataProtectionDashboard,
  identity: ThreatDashboard,
  sdlc: SecureDevDashboard,
  education: AwarenessDashboard,
  "tactical-ai": ThreatDashboard,
};

export function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Our Services"
        title="Cybersecurity Built Around Your Organization's Biggest Risks"
        copy="From human-focused security awareness to AI-powered cyber defense, Martian Blue provides end-to-end cybersecurity capabilities."
      />

      <div className="mx-auto w-full max-w-7xl space-y-16 px-5 pb-24 sm:px-8 lg:space-y-24 lg:px-10">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          const Visual = VISUALS[s.slug] ?? ThreatDashboard;
          const flip = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={`service-${s.slug}`}
              aria-label={s.title}
              className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <Reveal className={flip ? "lg:order-2" : ""}>
                <p className="font-mono text-sm text-ice">Service {s.index}</p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-paper sm:text-3xl">
                  {s.index} — {s.title.toUpperCase()}
                </h2>
                <p className="mt-4 leading-relaxed text-mist">{s.description}</p>

                <h3 className="font-display mt-7 text-xs font-bold tracking-[0.22em] text-fog">
                  {s.slug === "dlp" ? "CAPABILITIES" : "WHAT WE PROVIDE"}
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[15px] text-paper">
                      <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-ice" />
                      {c}
                    </li>
                  ))}
                </ul>

                {s.audiences && (
                  <>
                    <h3 className="font-display mt-6 text-xs font-bold tracking-[0.22em] text-fog">
                      WHO IT&apos;S FOR
                    </h3>
                    <p className="mt-2 text-[15px] text-mist">{s.audiences.join("  •  ")}</p>
                  </>
                )}

                <Link
                  to="/contact"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-electric-bright"
                >
                  Explore Service
                  <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
              <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
                <div className="panel panel-top-highlight overflow-hidden rounded-2xl">
                  <div className="flex items-center gap-3 border-b border-white/8 px-5 py-3.5" aria-hidden="true">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-electric/40 bg-electric/15">
                      <Icon size={18} className="text-ice" />
                    </span>
                    <span className="font-display text-sm font-semibold tracking-wide text-paper">
                      {s.title}
                    </span>
                  </div>
                  <Visual />
                </div>
              </Reveal>
            </section>
          );
        })}
      </div>
    </main>
  );
}

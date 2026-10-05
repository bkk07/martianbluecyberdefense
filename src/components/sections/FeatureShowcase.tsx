import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FEATURES, type Feature } from "../../data/features";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import {
  AwarenessDashboard,
  DataProtectionDashboard,
  SecureDevDashboard,
  ThreatDashboard,
} from "./dashboard/Dashboards";

const DASHBOARDS = {
  threat: ThreatDashboard,
  awareness: AwarenessDashboard,
  data: DataProtectionDashboard,
  sdlc: SecureDevDashboard,
} as const;

const DASHBOARD_CAPTIONS: Record<Feature["dashboard"], string> = {
  threat: "Correlated alerts, one triage queue",
  awareness: "Simulations, training, reporting",
  data: "Every egress path, watched",
  sdlc: "Gates inside the pipeline",
};

const FEATURE_SERVICE: Record<Feature["dashboard"], { label: string; href: string }> = {
  threat: { label: "Tactical Cyber Security & AI", href: "/services#service-tactical-ai" },
  awareness: { label: "Antiphishing & Cyber Frauds", href: "/services#service-antiphishing" },
  data: { label: "Data Leakage Detection & Prevention", href: "/services#service-dlp" },
  sdlc: { label: "Secure Software Development", href: "/services#service-sdlc" },
};

function FeatureRow({ feature, flip }: { feature: Feature; flip: boolean }) {
  const Dashboard = DASHBOARDS[feature.dashboard];
  const svc = FEATURE_SERVICE[feature.dashboard];
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <p className="eyebrow">{feature.eyebrow}</p>
        <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
          {feature.title}
        </h3>
        <p className="mt-4 max-w-lg leading-relaxed text-mist">{feature.description}</p>
        <p className="mt-5 text-sm text-fog">
          Delivered through{" "}
          <Link to={svc.href} className="font-semibold text-mist underline decoration-white/20 underline-offset-4 transition-colors hover:text-ice">
            {svc.label}
          </Link>
        </p>
        <Link
          to={svc.href}
          className="group mt-7 inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-electric-bright"
        >
          {feature.cta}
          <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
      <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
        <div className="panel panel-top-highlight overflow-hidden rounded-2xl shadow-[0_32px_90px_-30px_rgba(46,124,246,0.4)]">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-electric/60" />
            <span className="ml-3 hidden font-mono text-[11px] tracking-[0.14em] text-fog sm:block">
              MARTIAN BLUE
            </span>
          </div>
          <Dashboard />
          <p className="border-t border-white/10 px-5 py-3.5 text-sm font-medium text-mist">
            {DASHBOARD_CAPTIONS[feature.dashboard]}
          </p>
        </div>
      </Reveal>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section id="platform" className="scroll-mt-20 py-20 lg:py-28" aria-label="Feature showcase">
      <Container>
        <div className="space-y-16 lg:space-y-24">
          {FEATURES.map((f, i) => (
            <div key={f.id} id={f.id} className="scroll-mt-24">
              <FeatureRow feature={f} flip={i % 2 === 1} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

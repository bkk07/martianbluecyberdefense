import { ArrowRight, ShieldCheck } from "lucide-react";
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

const CHROME_TITLE: Record<Feature["dashboard"], string> = {
  threat: "console.martianblue · Threat Command",
  awareness: "console.martianblue · Phishing Inbox",
  data: "console.martianblue · Data Guard",
  sdlc: "console.martianblue · Secure Pipeline",
};

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
    <div className="grid items-center gap-7 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <p className="eyebrow flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-ice" aria-hidden="true" />
          {feature.eyebrow}
        </p>
        <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          {feature.title}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-mist sm:text-lg">{feature.description}</p>
        <p className="mt-5 text-sm text-fog">
          Delivered through{" "}
          <Link to={svc.href} className="font-semibold text-mist underline decoration-white/20 underline-offset-4 transition-colors hover:text-ice">
            {svc.label}
          </Link>
        </p>
        <Link
          to={svc.href}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#B9C6FF] px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-[#CBD6FF]"
        >
          {feature.cta}
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </Reveal>
      <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
        <div className="relative min-w-0">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0A1024] shadow-[0_24px_60px_-28px_rgba(2,6,18,0.9)]">
          <div className="flex items-center gap-3 border-b border-white/[0.07] bg-[#0C1430] px-4 py-2.5" aria-hidden="true">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border border-white/10 bg-white/[0.14]" />
              <span className="h-2.5 w-2.5 rounded-full border border-white/10 bg-white/[0.14]" />
              <span className="h-2.5 w-2.5 rounded-full border border-white/10 bg-white/[0.14]" />
            </span>
            <span className="flex min-w-0 flex-1 items-center justify-center">
              <span className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-abyss/80 px-3 py-1 font-mono text-[11px] tracking-[0.08em] text-mist shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <ShieldCheck size={12} className="text-ice" />
                <span className="truncate">{CHROME_TITLE[feature.dashboard]}</span>
              </span>
            </span>

          </div>
          <Dashboard />
          <p className="border-t border-white/[0.07] bg-[#0C1430] px-5 py-3 text-[13px] font-medium text-fog">
            {DASHBOARD_CAPTIONS[feature.dashboard]}
          </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section id="platform" className="scroll-mt-20 py-14 lg:py-20" aria-label="Feature showcase">
      <Container>
        <div className="space-y-10 lg:space-y-16">
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

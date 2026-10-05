import { Bot, Clock, LayoutGrid, Radar, type LucideIcon } from "lucide-react";
import { METRICS } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const ICONS: LucideIcon[] = [LayoutGrid, Clock, Bot, Radar];

export function SecurityMetrics() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-navy-950/60"
      aria-label="Security capability metrics"
    >
      <span
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-electric/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative py-14 lg:py-20">
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {METRICS.map((m, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div key={m.label} className="flex flex-col gap-4 bg-navy-950 p-7 lg:p-8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/15 text-ice">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <dd className="font-display text-4xl font-bold tracking-tight text-paper lg:text-5xl">
                    {m.value}
                  </dd>
                  <dt className="text-sm font-medium text-mist">{m.label}</dt>
                </div>
              );
            })}
          </dl>
        </Reveal>
        <Reveal>
          <p className="mt-6 text-xs text-fog">*Monitoring scope defined per engagement.</p>
        </Reveal>
      </Container>
    </section>
  );
}

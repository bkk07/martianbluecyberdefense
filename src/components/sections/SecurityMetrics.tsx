import { METRICS } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function SecurityMetrics() {
  return (
    <section className="border-y border-white/10 bg-navy-950/60" aria-label="Security capability metrics">
      <Container className="py-14 lg:py-20">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div className="flex flex-col gap-1.5 border-l border-white/20 pl-5">
                <dd className="font-display text-4xl font-bold tracking-tight text-paper lg:text-5xl">{m.value}</dd>
                <dt className="text-sm font-medium text-mist">{m.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>
        <Reveal delay={0.2}>
          <p className="mt-10 text-xs text-fog">*Monitoring scope defined per engagement.</p>
        </Reveal>
      </Container>
    </section>
  );
}

import { ShieldCheck } from "lucide-react";
import { WHY_ITEMS } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function WhyMartianBlue() {
  return (
    <section id="why-martian-blue" className="scroll-mt-20 border-y border-white/10 bg-navy-950/60 py-20 lg:py-28" aria-labelledby="why-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div id="why-heading">
              <SectionHeading
                eyebrow="Why Martian Blue?"
                title="Why Martian Blue?"
                copy="Why should an organization work with Martian Blue?"
              />
            </div>
            <Reveal delay={0.1}>
              <div className="panel panel-top-highlight relative mt-8 overflow-hidden rounded-2xl p-7" aria-label="Defense coverage at a glance">
                <div className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-electric/40 bg-electric/15">
                    <ShieldCheck size={22} className="text-ice" aria-hidden="true" />
                  </span>
                  <p className="font-display mt-5 text-lg font-semibold leading-snug text-paper">
                    Security + education,
                    <br />
                    one ecosystem
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2" aria-label="Coverage areas">
                    {["People", "Apps", "Identity", "Data"].map((c) => (
                      <li key={c} className="flex items-center gap-2 text-[13px] font-semibold tracking-[0.12em] text-mist">
                        <span className="h-1.5 w-1.5 rotate-45 bg-ice/80" aria-hidden="true" />
                        {c.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <ol className="border-t border-white/10" aria-label="Reasons to choose Martian Blue">
            {WHY_ITEMS.map((w, i) => (
              <Reveal key={w.index} delay={Math.min(i * 0.05, 0.25)}>
                <li className="grid grid-cols-[48px_1fr] gap-4 border-b border-white/10 py-6">
                  <span className="font-mono text-sm text-ice">{w.index}</span>
                  <span>
                    <h3 className="font-display text-lg font-semibold text-paper">{w.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-mist">{w.description}</p>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

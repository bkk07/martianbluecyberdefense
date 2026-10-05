import { ArrowRight, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { CASE_STUDIES, CASE_STUDY_STAGES } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-20 py-20 lg:py-28" aria-labelledby="cases-heading">
      <Container>
        <div id="cases-heading">
          <SectionHeading
            eyebrow="Case Studies"
            title="Cybersecurity in Action"
            copy="Explore how organizations strengthen their security posture with Martian Blue."
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CASE_STUDIES.map((c, i) => {
            return (
              <Reveal key={c.index} delay={i * 0.07}>
                <article className="panel flex h-full flex-col overflow-hidden rounded-2xl" aria-label={`${c.index} — illustrative placeholder`}>
                  <div className="bg-blueprint-grid relative flex h-44 flex-col justify-between overflow-hidden border-b border-white/10 bg-navy-900/50 p-5" aria-hidden="true">
                    <div className="flex items-start justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-electric/40 bg-electric/15">
                        <FileSearch size={18} className="text-ice" />
                      </span>
                      <span className="font-display text-4xl font-bold text-white/10">{c.index.replace(/\D+/g, "") || `0${i + 1}`}</span>
                    </div>
                    <p className="rounded-full border border-white/20 bg-abyss/80 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-paper backdrop-blur-sm self-start">
                      ILLUSTRATIVE SCENARIO
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-paper">{c.title}</h3>
                    <ol className="flex flex-wrap gap-1.5" aria-label="Case study structure">
                      {CASE_STUDY_STAGES.map((s) => (
                        <li key={s} className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-wide text-fog">
                          {s}
                        </li>
                      ))}
                    </ol>
                    <p className="mt-4 text-xs leading-relaxed text-fog">
                      Real customer stories appear here with permission only.
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 text-center">
          <Link to="/resources#case-studies" className="group inline-flex items-center gap-2 text-sm font-semibold text-ice">
            View all case studies
            <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

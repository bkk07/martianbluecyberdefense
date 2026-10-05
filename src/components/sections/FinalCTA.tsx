import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const NEXT_STEPS = [
  "Discuss your security challenges and goals",
  "Review your current security posture",
  "See the right Martian Blue services in action",
  "Receive a tailored plan for next steps",
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10" aria-labelledby="cta-heading">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_80%_at_50%_50%,#000,transparent)]" aria-hidden="true" />
      <Container className="relative py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Get Started</p>
            <h2
              id="cta-heading"
              className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-paper sm:text-4xl lg:text-[2.75rem]"
            >
              Strengthen Your Cyber Defense. Talk to us today.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-mist">
              Let&apos;s build a stronger security strategy for your organization.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#B9C6FF] px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-[#CBD6FF]"
              >
                Get Started
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold text-paper transition-colors hover:text-ice"
              >
                Explore our services
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-fog">
              Talk to our cybersecurity team about your security requirements.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-sm font-bold tracking-[0.18em] text-ice">WHAT HAPPENS NEXT:</p>
            <ul className="mt-6 space-y-5">
              {NEXT_STEPS.map((step) => (
                <li key={step} className="flex items-center gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-electric text-white"
                    aria-hidden="true"
                  >
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-paper">{step}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

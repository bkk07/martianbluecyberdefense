import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10" aria-labelledby="cta-heading">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_80%_at_50%_50%,#000,transparent)]" aria-hidden="true" />
      <Container className="relative py-20 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Final CTA</p>
          <h2 id="cta-heading" className="font-display mt-4 text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Strengthen Your Cyber Defense
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist">
            Let&apos;s build a stronger security strategy for your organization.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-electric px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(46,124,246,0.7)] transition-all hover:-translate-y-px hover:bg-electric-bright"
            >
              Get Started
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-fog">
            Talk to our cybersecurity team about your security requirements.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

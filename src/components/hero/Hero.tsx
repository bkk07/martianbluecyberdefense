import { motion, useReducedMotion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { CyberNetwork } from "./CyberNetwork";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ASSURANCES = [
  "AI-assisted detection & response",
  "People, apps, identity & data coverage",
  "Training + defense, one ecosystem",
];

export function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section className="relative overflow-hidden pt-16 lg:pt-[72px]" aria-labelledby="hero-heading">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_35%,#000,transparent)]" aria-hidden="true" />

      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-24">
        <div>
          <motion.div {...anim(0)}>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-mist">
              <ShieldCheck size={14} aria-hidden="true" className="text-ice" />
              MARTIAN BLUE CYBER DEFENSE
            </p>
          </motion.div>

          <motion.h1
            id="hero-heading"
            {...anim(0.08)}
            className="font-display mt-6 text-[2.6rem] font-bold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-[4.2rem]"
          >
            AI-Powered Cybersecurity for a{" "}
            <span className="text-gradient-ice">Safer Digital Future</span>
          </motion.h1>

          <motion.p {...anim(0.16)} className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Protect your organization, people, applications, identities, and
            critical data with proactive cybersecurity solutions built for
            evolving digital threats.
          </motion.p>

          <motion.div {...anim(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/contact" arrow className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button to="/services" variant="secondary" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </motion.div>

          <motion.ul {...anim(0.32)} className="mt-8 flex flex-col gap-2.5" aria-label="Why Martian Blue">
            {ASSURANCES.map((a) => (
              <li key={a} className="flex items-center gap-2.5 text-sm text-mist">
                <Check size={15} aria-hidden="true" className="shrink-0 text-ice" />
                {a}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative"
        >
          <div className="panel panel-top-highlight relative overflow-hidden rounded-2xl p-2 shadow-[0_40px_120px_-30px_rgba(46,124,246,0.45)]">
            <CyberNetwork className="h-[340px] rounded-xl bg-navy-950/60 sm:h-[420px] lg:h-[480px]" />
            <div className="pointer-events-none absolute inset-x-6 bottom-5 flex items-center justify-between rounded-lg border border-white/10 bg-abyss/80 px-4 py-2.5 backdrop-blur-md">
              <span className="flex items-center gap-2 text-xs font-medium text-mist">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Live defense grid · all systems nominal
              </span>
              <span className="hidden font-mono text-xs text-fog sm:block">SOC-VIEW v2.4</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

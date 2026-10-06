import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { CyberNetwork } from "./CyberNetwork";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section className="relative overflow-hidden bg-[#070B1A] pb-0 pt-32 sm:pt-36 lg:pt-44" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.p
          {...anim(0)}
          className="text-[13px] font-normal tracking-[0.18em] text-[#A9B6D8] sm:text-[15px]"
        >
          THE <span className="font-bold text-[#C3CCEA]">#1 RATED</span> HUMAN RISK MANAGEMENT PLATFORM
        </motion.p>

        <motion.h1
          id="hero-heading"
          {...anim(0.08)}
          className="mx-auto mt-8 max-w-4xl text-[2.9rem] font-medium leading-[1.12] tracking-[-0.01em] text-[#EDF1FA] sm:text-6xl lg:text-[4.3rem]"
          style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
        >
          Measurably reduce human
          <br className="hidden sm:block" /> cyber risk, at scale
        </motion.h1>

        <motion.p
          {...anim(0.16)}
          className="mx-auto mt-8 max-w-3xl text-[15px] leading-relaxed text-[#C6CFE6] sm:text-[17px]"
        >
          Automate the busywork of security awareness and phishing training
          with an AI-powered platform that automatically delivers personalized,
          gamified training that employees love.
        </motion.p>

        <motion.div
          {...anim(0.24)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            to="/contact"
            className="w-full rounded-[10px] border-0 bg-[#B9C6FF] px-9 py-4 text-[16px] font-semibold text-[#0A1130] shadow-none hover:bg-[#CBD6FF] sm:w-auto"
          >
            Book a demo
          </Button>
          <Button
            to="/services"
            variant="secondary"
            className="w-full rounded-[10px] border border-[#8A94B8]/70 bg-transparent px-9 py-4 text-[16px] font-semibold text-[#C3CCEA] hover:border-[#A9B6D8] hover:bg-white/[0.03] sm:w-auto"
          >
            See how it works
          </Button>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        className="relative mt-6 sm:mt-8"
      >
        <CyberNetwork />
      </motion.div>
    </section>
  );
}

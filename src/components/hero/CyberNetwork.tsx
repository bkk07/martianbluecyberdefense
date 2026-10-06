import { motion, useReducedMotion } from "framer-motion";

interface Node {
  src?: string;
  size: number;
  left: string;
  top: string;
  blur?: boolean;
  delay: number;
  ring?: boolean;
}

const SHARP: Node[] = [
  { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=128&auto=format&fit=crop", size: 46, left: "20.5%", top: "22%", delay: 0 },
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=128&auto=format&fit=crop", size: 56, left: "27%", top: "34%", delay: 0.7 },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop", size: 84, left: "17.5%", top: "66%", delay: 1.2 },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=96&auto=format&fit=crop", size: 30, left: "13.5%", top: "70%", delay: 0.4, ring: true },
  { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop", size: 80, left: "72%", top: "64%", delay: 0.9 },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=crop", size: 52, left: "75.5%", top: "24%", delay: 0.5 },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&auto=format&fit=crop", size: 48, left: "67.5%", top: "22%", delay: 1.4 },
  { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop", size: 62, left: "80.5%", top: "84%", delay: 1.7 },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=96&auto=format&fit=crop", size: 36, left: "82.5%", top: "52%", delay: 0.3 },
];

const SOFT: Node[] = [
  { size: 34, left: "13.5%", top: "32%", blur: true, delay: 0 },
  { size: 26, left: "28.5%", top: "18%", blur: true, delay: 0 },
  { size: 36, left: "33%", top: "36%", blur: true, delay: 0 },
  { size: 22, left: "60%", top: "28%", blur: true, delay: 0 },
  { size: 20, left: "88%", top: "40%", blur: true, delay: 0 },
  { size: 24, left: "8%", top: "52%", blur: true, delay: 0 },
];

const STARS = [
  { left: "17%", top: "30%", s: 5 }, { left: "26.5%", top: "12%", s: 5 },
  { left: "8%", top: "48%", s: 3 }, { left: "67%", top: "14%", s: 4 },
  { left: "86%", top: "18%", s: 6 }, { left: "87%", top: "48%", s: 3 },
];

/** Globe + avatar network like the reference — purple horizon, stars, dashed links. */
export function CyberNetwork({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className={`relative h-[460px] overflow-hidden sm:h-[540px] ${className}`} aria-hidden="true">
      {/* purple ambience behind globe */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(50% 55% at 50% 78%, rgba(109,74,238,0.5), rgba(46,40,120,0.25) 55%, transparent 75%)" }} />

      {/* stars */}
      {STARS.map((s, i) => (
        <span key={i} className="absolute rounded-full bg-[#B9C2FF] shadow-[0_0_14px_3px_rgba(139,140,255,0.9)]" style={{ left: s.left, top: s.top, width: s.s, height: s.s, opacity: 0.95 }} />
      ))}

      {/* dashed links */}
      <svg viewBox="0 0 1000 520" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-80">
        <g stroke="rgba(170,175,220,0.6)" strokeWidth="1.2" strokeDasharray="4 5" fill="none">
          <line x1="205" y1="125" x2="272" y2="180" />
          <line x1="272" y1="180" x2="218" y2="345" />
          <line x1="218" y1="345" x2="138" y2="368" />
          <line x1="138" y1="368" x2="112" y2="430" />
          <line x1="756" y1="130" x2="782" y2="200" />
          <line x1="782" y1="200" x2="722" y2="335" />
          <line x1="722" y1="335" x2="826" y2="272" />
          <line x1="826" y1="272" x2="882" y2="212" />
          <line x1="826" y1="272" x2="806" y2="440" />
        </g>
      </svg>

      {/* globe */}
      <div className="absolute bottom-[-380px] left-1/2 h-[680px] w-[min(860px,150vw)] -translate-x-1/2 sm:bottom-[-400px]">
        <div className="absolute inset-x-16 top-0 h-28 blur-2xl" style={{ background: "rgba(139,92,246,0.6)" }} />
        <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(ellipse 72% 40% at 50% 0%, #B79CFF 0%, #7C5CFC 12%, #3B2A86 32%, #141238 55%, #070B1A 78%)", boxShadow: "0 -6px 70px rgba(139,92,246,0.5)" }} />
        <div className="absolute inset-0 rounded-full" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.45) 1.2px, transparent 1.7px)", backgroundSize: "20px 20px", maskImage: "radial-gradient(60% 42% at 50% 10%, #000 25%, transparent 70%)", WebkitMaskImage: "radial-gradient(60% 42% at 50% 10%, #000 25%, transparent 70%)", opacity: 0.5 }} />
      </div>

      {/* soft background nodes */}
      {SOFT.map((n, i) => (
        <span key={i} className="absolute rounded-full bg-[#3A4266] blur-[2px]" style={{ left: n.left, top: n.top, width: n.size, height: n.size, opacity: 0.8 }} />
      ))}

      {/* sharp avatars */}
      {SHARP.map((a) =>
        reduce ? (
          <img key={`${a.left}-${a.top}`} src={a.src} alt="" loading="lazy" width={a.size} height={a.size} className="absolute rounded-full object-cover ring-2 ring-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.6)]" style={{ left: a.left, top: a.top, width: a.size, height: a.size }} />
        ) : (
          <motion.img
            key={`${a.left}-${a.top}`}
            src={a.src}
            alt=""
            loading="lazy"
            width={a.size}
            height={a.size}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, y: [0, -9, 0] }}
            transition={{ opacity: { duration: 0.6, delay: a.delay * 0.3 }, scale: { duration: 0.6, delay: a.delay * 0.3 }, y: { duration: 5 + a.delay, repeat: Infinity, ease: "easeInOut", delay: a.delay } }}
            className="absolute rounded-full object-cover ring-2 ring-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            style={{ left: a.left, top: a.top, width: a.size, height: a.size }}
          />
        )
      )}

      {/* trusted overlay */}
      <div className="absolute inset-x-0 bottom-10 flex justify-center px-6 sm:bottom-14">
        <p className="max-w-md text-center text-[15px] font-semibold leading-snug text-[#DDE3F5] drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] sm:text-lg">
          Trusted by thousands of companies
          <br /> to train millions of global employees
        </p>
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";

/**
 * Sophisticated cybersecurity network visualization:
 * layered SVG topology (nodes, attack paths, shield core) + lightweight
 * canvas particle drift. Pauses off-screen; disabled under reduced-motion.
 */
export function CyberNetwork({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let visible = true;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;

    interface P {
      x: number; y: number; vx: number; vy: number; r: number; a: number;
    }
    let parts: P[] = [];

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = W * DPR; canvas.height = H * DPR;
      canvas.style.width = `${W}px`; canvas.style.height = `${H}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const n = Math.min(46, Math.floor((W * H) / 22000));
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.6,
        a: Math.random() * 0.5 + 0.2,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(wrap);

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(69, 224, 255, ${p.a * 0.5})`;
        ctx.fill();
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const dx = parts[i].x - parts[j].x;
          const dy = parts[i].y - parts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.strokeStyle = `rgba(46, 124, 246, ${(1 - d / 120) * 0.22})`;
            ctx.beginPath();
            ctx.moveTo(parts[i].x, parts[i].y);
            ctx.lineTo(parts[j].x, parts[j].y);
            ctx.stroke();
          }
        }
      }
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <svg viewBox="0 0 560 480" className="relative h-full w-full" fill="none">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2E7CF6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2E7CF6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="linkGrad" x1="0" y1="0" x2="560" y2="480">
            <stop offset="0%" stopColor="#2E7CF6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#45E0FF" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <ellipse cx="280" cy="230" rx="190" ry="150" fill="url(#coreGlow)" />

        {/* orbit rings */}
        <ellipse cx="280" cy="230" rx="200" ry="150" stroke="#2E7CF6" strokeOpacity="0.28" strokeDasharray="5 7" />
        <ellipse cx="280" cy="230" rx="150" ry="195" stroke="#45E0FF" strokeOpacity="0.18" strokeDasharray="3 9" />

        {/* connection mesh */}
        <g stroke="url(#linkGrad)" strokeWidth="1.2">
          <line x1="280" y1="230" x2="120" y2="120" />
          <line x1="280" y1="230" x2="440" y2="110" />
          <line x1="280" y1="230" x2="470" y2="300" />
          <line x1="280" y1="230" x2="400" y2="400" />
          <line x1="280" y1="230" x2="140" y2="360" />
          <line x1="280" y1="230" x2="90" y2="240" />
          <line x1="120" y1="120" x2="440" y2="110" strokeOpacity="0.5" />
          <line x1="140" y1="360" x2="400" y2="400" strokeOpacity="0.5" />
        </g>

        {/* threat signal on one path */}
        <circle cx="180" cy="165" r="4" fill="#FB7185">
          <animate attributeName="opacity" values="1;0.25;1" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="180" cy="165" r="10" stroke="#FB7185" strokeOpacity="0.5">
          <animate attributeName="r" values="6;16" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.6;0" dur="2.2s" repeatCount="indefinite" />
        </circle>

        {/* nodes */}
        {[
          [120, 120], [440, 110], [470, 300], [400, 400], [140, 360], [90, 240],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="14" fill="#0A1730" stroke="#2E7CF6" strokeOpacity="0.7" />
            <circle cx={x} cy={y} r="4" fill="#45E0FF" />
          </g>
        ))}

        {/* shield core */}
        <g>
          <path
            d="M280 168l44 16v34c0 28-18.5 47-44 60-25.5-13-44-32-44-60v-34l44-16z"
            fill="#060F24"
            stroke="#45E0FF"
            strokeWidth="2"
          />
          <path
            d="M264 230l12 12 22-26"
            stroke="#45E0FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* dashboard fragments */}
        <g fontFamily="monospace" fontSize="10">
          <rect x="392" y="150" width="132" height="58" rx="8" fill="#060F24" fillOpacity="0.92" stroke="#2E7CF6" strokeOpacity="0.5" />
          <text x="404" y="170" fill="#93A4C4">THREATS BLOCKED</text>
          <text x="404" y="192" fill="#EAF2FF" fontSize="18" fontWeight="bold">1,284</text>
          <text x="462" y="192" fill="#34D399" fontSize="11">▲ 12%</text>
          <rect x="36" y="300" width="132" height="58" rx="8" fill="#060F24" fillOpacity="0.92" stroke="#2E7CF6" strokeOpacity="0.5" />
          <text x="48" y="320" fill="#93A4C4">PHISH REPORTS</text>
          <text x="48" y="342" fill="#EAF2FF" fontSize="18" fontWeight="bold">96%</text>
          <text x="104" y="342" fill="#45E0FF" fontSize="11">reported</text>
        </g>
      </svg>
    </div>
  );
}

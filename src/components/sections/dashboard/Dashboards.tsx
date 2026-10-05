import { AlertTriangle, CheckCircle2, ShieldCheck, XCircle } from "lucide-react";

const FEED = [
  { sev: "critical", text: "Credential-stuffing wave vs login API", time: "12s ago", blocked: true },
  { sev: "high", text: "Impersonating domain detected: rnartianblue", time: "4m ago", blocked: true },
  { sev: "medium", text: "Anomalous data egress from finance share", time: "18m ago", blocked: false },
  { sev: "low", text: "New device enrolled with compliant posture", time: "42m ago", blocked: false },
];

const SEV_STYLE: Record<string, string> = {
  critical: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  high: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  medium: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  low: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

export function ThreatDashboard() {
  return (
    <div className="flex h-full flex-col gap-4 p-5 sm:p-6" aria-label="Threat detection dashboard mockup">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs tracking-[0.18em] text-fog">THREAT COMMAND</p>
          <p className="font-display text-lg font-semibold text-paper">Live incident queue</p>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          Monitoring
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          ["1,284", "Blocked / 24h"],
          ["17", "Open incidents"],
          ["3m", "Median contain"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-lg border border-white/10 bg-abyss/70 px-3 py-2.5">
            <p className="font-display text-lg font-bold text-paper">{v}</p>
            <p className="text-[11px] text-fog">{l}</p>
          </div>
        ))}
      </div>

      <svg viewBox="0 0 300 64" className="w-full rounded-lg border border-white/10 bg-abyss/70" aria-hidden="true">
        <polyline
          points="0,48 25,44 50,46 75,30 100,34 125,22 150,26 175,14 200,18 225,10 250,14 275,6 300,8"
          fill="none" stroke="#45E0FF" strokeWidth="2"
        />
        <polyline points="0,48 25,44 50,46 75,30 100,34 125,22 150,26 175,14 200,18 225,10 250,14 275,6 300,8 300,64 0,64" fill="rgba(69,224,255,0.08)" stroke="none" />
        <circle cx="225" cy="10" r="3.5" fill="#FB7185" />
      </svg>

      <ul className="slim-scroll max-h-44 space-y-2 overflow-y-auto pr-1">
        {FEED.map((f) => (
          <li key={f.text} className="flex items-center gap-3 rounded-lg border border-white/8 bg-abyss/60 px-3 py-2.5">
            {f.blocked ? (
              <CheckCircle2 size={16} className="shrink-0 text-emerald-400" aria-hidden="true" />
            ) : (
              <AlertTriangle size={16} className="shrink-0 text-yellow-300" aria-hidden="true" />
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] text-paper">{f.text}</p>
              <p className="text-[11px] text-fog">{f.time}</p>
            </div>
            <span className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] uppercase ${SEV_STYLE[f.sev]}`}>
              {f.sev}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AwarenessDashboard() {
  const depts = [
    ["Finance", 92], ["Engineering", 81], ["Support", 74], ["Sales", 68],
  ];
  return (
    <div className="flex h-full flex-col gap-5 p-5 sm:p-6" aria-label="Security awareness dashboard mockup">
      <div>
        <p className="text-xs tracking-[0.18em] text-fog">AWARENESS PROGRAM</p>
        <p className="font-display text-lg font-semibold text-paper">Q3 phishing simulation</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative h-28 w-28 shrink-0" role="img" aria-label="96 percent report rate">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="#45E0FF" strokeWidth="10" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="26" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-2xl font-bold text-paper">96%</span>
            <span className="text-[10px] text-fog">report rate</span>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-3">
          {[
            ["4.1%", "Click rate"], ["12s", "Median report"], ["214", "Coached"], ["0", "Repeat ×3"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-lg border border-white/10 bg-abyss/70 px-3 py-2">
              <p className="font-display text-base font-bold text-paper">{v}</p>
              <p className="text-[11px] text-fog">{l}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2.5">
        {depts.map(([d, v]) => (
          <div key={d as string}>
            <div className="mb-1 flex justify-between text-xs"><span className="text-mist">{d}</span><span className="font-mono text-fog">{v}%</span></div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
              <div className="h-full rounded-full bg-gradient-to-r from-electric to-ice" style={{ width: `${v}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DataProtectionDashboard() {
  return (
    <div className="flex h-full flex-col gap-4 p-5 sm:p-6" aria-label="Data protection dashboard mockup">
      <div>
        <p className="text-xs tracking-[0.18em] text-fog">DATA LOSS PREVENTION</p>
        <p className="font-display text-lg font-semibold text-paper">Egress guardrails</p>
      </div>
      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-abyss/70 px-3 py-2.5 text-xs">
        {["Cloud drive", "Email", "API", "USB"].map((c, i) => (
          <span key={c} className="flex items-center gap-1.5 text-mist">
            <ShieldCheck size={13} className={i === 2 ? "text-yellow-300" : "text-emerald-400"} aria-hidden="true" />
            {c}
          </span>
        ))}
      </div>
      <ul className="space-y-2">
        {[
          ["PAN + Aadhaar pattern in outbound email", "Blocked", true],
          ["Source archive uploaded to personal drive", "Quarantined", true],
          ["API key committed to public repo mirror", "Revoked", true],
          ["Large export from analytics warehouse", "Under review", false],
        ].map(([t, s, bad]) => (
          <li key={t as string} className="flex items-center gap-3 rounded-lg border border-white/8 bg-abyss/60 px-3 py-2.5">
            {bad ? (
              <XCircle size={15} className="shrink-0 text-rose-300" aria-hidden="true" />
            ) : (
              <AlertTriangle size={15} className="shrink-0 text-yellow-300" aria-hidden="true" />
            )}
            <p className="min-w-0 flex-1 truncate text-[13px] text-paper">{t}</p>
            <span className="shrink-0 rounded-full border border-white/12 px-2 py-0.5 text-[11px] text-mist">{s}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto grid grid-cols-3 gap-3">
        {[["38", "Policies live"], ["0", "Confirmed leaks"], ["12k", "Files classified"]].map(([v, l]) => (
          <div key={l} className="rounded-lg border border-white/10 bg-abyss/70 px-3 py-2 text-center">
            <p className="font-display text-base font-bold text-paper">{v}</p>
            <p className="text-[10px] text-fog">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SecureDevDashboard() {
  const stages = [
    ["Commit", "done"], ["SAST", "done"], ["Secrets", "done"], ["DAST", "warn"], ["Deploy", "blocked"],
  ] as const;
  return (
    <div className="flex h-full flex-col gap-4 p-5 sm:p-6" aria-label="Secure pipeline dashboard mockup">
      <div>
        <p className="text-xs tracking-[0.18em] text-fog">APPLICATION SECURITY</p>
        <p className="font-display text-lg font-semibold text-paper">Pipeline gates · checkout-api</p>
      </div>
      <ol className="flex items-center gap-1" aria-label="Pipeline stages">
        {stages.map(([s, st], i) => (
          <li key={s} className="flex flex-1 items-center gap-1 last:flex-none">
            <div className="flex-1">
              <p className={`rounded-md border px-2 py-1.5 text-center text-[11px] font-semibold ${
                st === "done" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                : st === "warn" ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-300"
                : "border-rose-500/30 bg-rose-500/10 text-rose-300"
              }`}>{s}</p>
            </div>
            {i < stages.length - 1 && <span className="h-px w-2 bg-white/20" aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <ul className="space-y-2">
        {[
          ["BOLA-04 · order endpoint exposes other tenants", "Critical"],
          ["JWT accepted without expiry check", "High"],
          ["Verbose stack traces in staging errors", "Medium"],
        ].map(([t, sev]) => (
          <li key={t as string} className="rounded-lg border border-white/8 bg-abyss/60 px-3 py-2.5">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-[13px] text-paper">{t}</p>
              <span className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] uppercase ${SEV_STYLE[sev.toLowerCase()]}`}>{sev}</span>
            </div>
            <p className="mt-1 text-[11px] text-fog">Owner assigned · patch pattern attached</p>
          </li>
        ))}
      </ul>
      <div className="mt-auto rounded-lg border border-electric/30 bg-electric/10 px-3 py-2.5 text-[13px] text-paper">
        Deploy gate: <span className="font-semibold text-rose-300">held</span> — 2 findings must be fixed or waived.
      </div>
    </div>
  );
}

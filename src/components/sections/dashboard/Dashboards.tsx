import {
  AlertTriangle,
  ArrowDown,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Flag,
  Paperclip,
  ShieldAlert,
  ShieldCheck,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";

/* ---------- shared bits ---------- */

function DashHead({
  eyebrow,
  title,
  right,
}: {
  eyebrow: string;
  title: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-xs tracking-[0.18em] text-fog">{eyebrow}</p>
        <p className="font-display mt-1 text-lg font-semibold text-paper">{title}</p>
      </div>
      {right}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
      <p className="font-display text-xl font-bold tabular-nums text-paper">{value}</p>
      <p className="mt-0.5 text-[11px] text-fog">{label}</p>
    </div>
  );
}

const SEV_STYLE: Record<string, string> = {
  critical: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  high: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  medium: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  low: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

const SEV_RAIL: Record<string, string> = {
  critical: "border-l-rose-400",
  high: "border-l-orange-400",
  medium: "border-l-yellow-300",
  low: "border-l-emerald-400",
};

/* ---------- 01 · threat command ---------- */

const FEED = [
  { id: "INC-2041", sev: "critical", text: "Credential-stuffing wave vs login API", time: "12s ago", blocked: true },
  { id: "INC-2038", sev: "high", text: "Impersonating domain detected: rnartianblue", time: "4m ago", blocked: true },
  { id: "INC-2035", sev: "medium", text: "Anomalous data egress from finance share", time: "18m ago", blocked: false },
  { id: "INC-2031", sev: "low", text: "New device enrolled with compliant posture", time: "42m ago", blocked: false },
];

export function ThreatDashboard() {
  return (
    <div className="flex h-full flex-col gap-4 p-5 sm:p-6" aria-label="Threat detection dashboard mockup">
      <DashHead
        eyebrow="THREAT COMMAND"
        title="Live incident queue"
        right={
          <span className="mt-0.5 flex shrink-0 items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Monitoring
          </span>
        }
      />

      <div className="grid grid-cols-3 gap-3">
        <Stat value="1,284" label="Blocked / 24h" />
        <Stat value="17" label="Open incidents" />
        <Stat value="3m" label="Median contain" />
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
        <div className="mb-2 flex items-center justify-between text-[11px]">
          <span className="font-semibold tracking-[0.08em] text-mist">DETECTIONS / 24H</span>
          <span className="flex items-center gap-3 text-fog">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-3 rounded-full bg-ice" aria-hidden="true" /> Blocked
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-3 rounded-full bg-white/25" aria-hidden="true" /> Allowed
            </span>
          </span>
        </div>
        <svg viewBox="0 0 300 84" className="w-full" aria-hidden="true">
          <defs>
            <linearGradient id="threatFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#45E0FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#45E0FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[14, 32, 50, 68].map((y) => (
            <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          ))}
          <line x1="0" y1="22" x2="300" y2="22" stroke="rgba(251,113,133,0.4)" strokeWidth="1" strokeDasharray="4 4" />
          <polygon
            points="0,62 25,58 50,60 75,44 100,48 125,36 150,40 175,28 200,32 225,22 250,26 275,16 300,18 300,84 0,84"
            fill="url(#threatFill)"
          />
          <polyline
            points="0,62 25,58 50,60 75,44 100,48 125,36 150,40 175,28 200,32 225,22 250,26 275,16 300,18"
            fill="none"
            stroke="#45E0FF"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle cx="225" cy="22" r="4" fill="#0b1030" stroke="#FB7185" strokeWidth="2.5" />
        </svg>
        <div className="mt-1 flex justify-between font-mono text-[10px] text-fog">
          <span>00:00</span>
          <span>08:00</span>
          <span>16:00</span>
          <span>NOW</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5" aria-label="Filter by severity">
        {["All · 1,284", "Critical · 3", "High · 9", "Medium · 5"].map((c, i) => (
          <span
            key={c}
            className={`rounded-full border px-2.5 py-1 font-mono text-[10px] ${
              i === 0 ? "border-ice/50 bg-ice/10 text-ice" : "border-white/10 text-fog"
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      <ul className="slim-scroll max-h-44 space-y-2 overflow-y-auto pr-1">
        {FEED.map((f) => (
          <li
            key={f.id}
            className={`flex items-center gap-3 rounded-lg border border-white/[0.08] border-l-2 bg-white/[0.02] px-3 py-2.5 ${SEV_RAIL[f.sev]}`}
          >
            {f.blocked ? (
              <CheckCircle2 size={16} className="shrink-0 text-emerald-400" aria-hidden="true" />
            ) : (
              <AlertTriangle size={16} className="shrink-0 text-yellow-300" aria-hidden="true" />
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] text-paper">{f.text}</p>
              <p className="font-mono text-[11px] text-fog">
                {f.id} · {f.time}
              </p>
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

/* ---------- 02 · phishing simulation inbox ---------- */

const MESSAGES = [
  {
    from: "Payroll Team",
    initials: "PT",
    subject: "Your payslip is not correct",
    snippet: "A serious error has occurred in our payment system…",
    time: "9:13 AM",
    unread: true,
    active: true,
  },
  {
    from: "Evan Grant",
    initials: "EG",
    subject: "Meeting notes",
    snippet: "Please find the notes for Q3 planning attached…",
    time: "9:02 AM",
    unread: true,
    active: false,
  },
  {
    from: "IT Helpdesk",
    initials: "IT",
    subject: "Password expiry notice",
    snippet: "Your password expires in 3 days. Renew here…",
    time: "8:47 AM",
    unread: false,
    active: false,
  },
  {
    from: "Vanessa Jenkins",
    initials: "VJ",
    subject: "Great to catch up!",
    snippet: "It was great to catch up after so long…",
    time: "Yesterday",
    unread: false,
    active: false,
  },
];

export function AwarenessDashboard() {
  return (
    <div className="flex h-full flex-col gap-4 p-5 sm:p-6" aria-label="Phishing simulation inbox mockup">
      <DashHead
        eyebrow="PHISHING SIMULATION"
        title="Inbox · wave 14"
        right={
          <span className="mt-0.5 shrink-0 rounded-full border border-ice/40 bg-ice/10 px-3 py-1 font-mono text-[11px] text-ice">
            255 SENT
          </span>
        }
      />

      <div className="grid gap-3 lg:grid-cols-[1fr_1.25fr]">
        <ul className="space-y-2" aria-label="Simulated messages">
          {MESSAGES.map((m) => (
            <li
              key={m.subject}
              className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
                m.active ? "border-ice/40 bg-ice/[0.06]" : "border-white/[0.08] bg-white/[0.02]"
              }`}
            >
              <span
                aria-hidden="true"
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold ${
                  m.active ? "bg-ice/20 text-ice" : "bg-white/10 text-mist"
                }`}
              >
                {m.initials}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline justify-between gap-2">
                  <span className="truncate text-[13px] font-semibold text-paper">{m.from}</span>
                  <span className="shrink-0 font-mono text-[10px] text-fog">{m.time}</span>
                </span>
                <span className="block truncate text-xs text-mist">{m.subject}</span>
                <span className="block truncate text-[11px] text-fog">{m.snippet}</span>
              </span>
              {m.unread && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ice" aria-label="Unread" />}
            </li>
          ))}
        </ul>

        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4" aria-label="Selected message preview">
          <p className="text-[13px] font-semibold text-paper">
            Payroll Team <span className="font-normal text-fog">&lt;payroll@martianblue-pay.com&gt;</span>
          </p>
          <p className="mt-0.5 font-mono text-[11px] text-fog">
            To: <span className="text-mist">anna.berg@company.com</span>
          </p>
          <p className="font-display mt-3 text-[15px] font-bold text-paper">Your payslip is not correct</p>
          <p className="mt-2 text-xs leading-relaxed text-mist">
            Dear Anna, a serious error has occurred in our payroll system. Open the attached file to
            confirm your pay details before the run closes today.
          </p>
          <span className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-abyss/70 px-3 py-2 text-xs text-paper">
            <Paperclip size={13} aria-hidden="true" className="text-ice" />
            payslip-march.pdf
            <span className="ml-auto font-mono text-[10px] text-fog">1.2 MB</span>
          </span>
          <span className="mt-3 flex items-center gap-2 rounded-lg border border-rose-500/25 bg-rose-500/[0.07] px-3 py-2 text-xs text-rose-200">
            <Flag size={13} aria-hidden="true" />
            Reported by 214 employees · simulation detected
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- 03 · data loss prevention ---------- */

const CHANNELS: { name: string; state: "ok" | "alert"; note: string }[] = [
  { name: "Cloud drive", state: "ok", note: "guarded" },
  { name: "Email", state: "ok", note: "guarded" },
  { name: "API", state: "alert", note: "1 alert" },
  { name: "USB", state: "ok", note: "blocked" },
];

const DLP_EVENTS: { id: string; text: string; status: string; tone: "bad" | "warn" | "neutral" }[] = [
  { id: "DLP-114", text: "PAN + identity pattern in outbound email", status: "Blocked", tone: "bad" },
  { id: "DLP-112", text: "Source archive uploaded to personal drive", status: "Quarantined", tone: "warn" },
  { id: "DLP-109", text: "API key committed to public repo mirror", status: "Revoked", tone: "bad" },
  { id: "DLP-107", text: "Large export from analytics warehouse", status: "Under review", tone: "neutral" },
];

const TONE_ICON = {
  bad: <XCircle size={15} className="shrink-0 text-rose-300" aria-hidden="true" />,
  warn: <AlertTriangle size={15} className="shrink-0 text-yellow-300" aria-hidden="true" />,
  neutral: <Clock size={15} className="shrink-0 text-mist" aria-hidden="true" />,
} as const;

const TONE_PILL = {
  bad: "border-rose-500/30 bg-rose-500/10 text-rose-300",
  warn: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  neutral: "border-white/12 text-mist",
} as const;

export function DataProtectionDashboard() {
  return (
    <div className="flex h-full flex-col gap-4 p-5 sm:p-6" aria-label="Data protection dashboard mockup">
      <DashHead
        eyebrow="DATA LOSS PREVENTION"
        title="Egress guardrails"
        right={
          <span className="mt-0.5 flex shrink-0 items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Enforcing
          </span>
        }
      />

      <div className="grid grid-cols-4 gap-2">
        {CHANNELS.map((c) => (
          <div
            key={c.name}
            className={`rounded-xl border px-2 py-2.5 text-center ${
              c.state === "alert" ? "border-yellow-500/30 bg-yellow-500/[0.07]" : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <span
              aria-hidden="true"
              className={`mx-auto mb-1.5 block h-1.5 w-1.5 rounded-full ${
                c.state === "alert" ? "bg-yellow-300" : "bg-emerald-400"
              }`}
            />
            <p className="flex items-center justify-center gap-1 text-[11px] font-semibold text-paper">
              <ShieldCheck
                size={12}
                aria-hidden="true"
                className={c.state === "alert" ? "text-yellow-300" : "text-emerald-400"}
              />
              {c.name}
            </p>
            <p className="mt-0.5 text-[10px] text-fog">{c.note}</p>
          </div>
        ))}
      </div>

      <ul className="space-y-2">
        {DLP_EVENTS.map((e) => (
          <li
            key={e.id}
            className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2.5"
          >
            {TONE_ICON[e.tone]}
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] text-paper">{e.text}</p>
              <p className="font-mono text-[11px] text-fog">{e.id}</p>
            </div>
            <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium ${TONE_PILL[e.tone]}`}>
              {e.status}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto grid grid-cols-3 gap-3">
        <Stat value="38" label="Policies live" />
        <Stat value="0" label="Confirmed leaks" />
        <Stat value="12k" label="Files classified" />
      </div>
    </div>
  );
}

/* ---------- 04 · secure pipeline ---------- */

const STAGES = [
  ["Commit", "done"],
  ["SAST", "done"],
  ["Secrets", "done"],
  ["DAST", "warn"],
  ["Deploy", "blocked"],
] as const;

const STAGE_STYLE = {
  done: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  warn: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  blocked: "border-rose-500/30 bg-rose-500/10 text-rose-300",
} as const;

const STAGE_ICON = {
  done: <Check size={11} strokeWidth={3} aria-hidden="true" />,
  warn: <AlertTriangle size={11} aria-hidden="true" />,
  blocked: <XCircle size={11} aria-hidden="true" />,
} as const;

export function SecureDevDashboard() {
  return (
    <div className="flex h-full flex-col gap-4 p-5 sm:p-6" aria-label="Secure pipeline dashboard mockup">
      <DashHead
        eyebrow="APPLICATION SECURITY"
        title="Pipeline gates · checkout-api"
        right={
          <span className="mt-0.5 shrink-0 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 font-mono text-[11px] text-rose-300">
            GATE HELD
          </span>
        }
      />

      <ol className="flex items-center" aria-label="Pipeline stages">
        {STAGES.map(([s, st], i) => (
          <li key={s} className={`flex items-center ${i < STAGES.length - 1 ? "flex-1" : ""}`}>
            <span
              className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[11px] font-semibold ${STAGE_STYLE[st]}`}
            >
              {STAGE_ICON[st]}
              {s}
            </span>
            {i < STAGES.length - 1 && (
              <ChevronRight size={13} aria-hidden="true" className="mx-0.5 shrink-0 text-fog" />
            )}
          </li>
        ))}
      </ol>

      <ul className="space-y-2">
        {[
          ["BOLA-04 · order endpoint exposes other tenants", "api/orders.ts:142", "Critical"],
          ["JWT accepted without expiry check", "auth/session.ts:88", "High"],
          ["Verbose stack traces in staging errors", "api/errors.ts:31", "Medium"],
        ].map(([t, ref, sev]) => (
          <li
            key={t as string}
            className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2.5"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-[13px] text-paper">{t}</p>
              <span
                className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] uppercase ${SEV_STYLE[(sev as string).toLowerCase()]}`}
              >
                {sev}
              </span>
            </div>
            <p className="mt-1 font-mono text-[11px] text-fog">
              {ref} · owner assigned · patch attached
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-start gap-2.5 rounded-xl border border-rose-500/25 bg-rose-500/[0.07] px-3.5 py-3 text-[13px] leading-relaxed text-paper">
        <ShieldAlert size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-rose-300" />
        <p>
          Deploy gate <span className="font-semibold text-rose-300">held</span> — 2 findings must be
          fixed or waived.
        </p>
      </div>
    </div>
  );
}

/* ---------- floating detail cards (layered over each window) ---------- */

const FLOATER_CLS =
  "w-full max-w-[320px] rounded-xl border border-ice/25 bg-navy-900/95 p-5 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.75)] backdrop-blur";

function FloaterPill({ children, tone }: { children: string; tone: "critical" | "info" | "blocked" }) {
  const cls =
    tone === "critical"
      ? "border-rose-500/30 bg-rose-500/10 text-rose-300"
      : tone === "blocked"
        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
        : "border-ice/40 bg-ice/10 text-ice";
  return (
    <span className={`rounded border px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] ${cls}`}>
      {children}
    </span>
  );
}

export function IncidentCard() {
  return (
    <div className={FLOATER_CLS} aria-label="Incident INC-2041 details">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-fog">INC-2041</span>
        <FloaterPill tone="critical">CRITICAL</FloaterPill>
      </div>
      <p className="font-display mt-2 text-[15px] font-bold leading-snug text-paper">
        Credential-stuffing wave vs login API
      </p>
      <p className="mt-1 font-mono text-[11px] text-fog">login API · eu-west · 412 IPs</p>
      <ul className="mt-4 space-y-2.5 border-t border-white/10 pt-4 text-xs">
        {[
          ["Detected", "12s ago", true],
          ["Auto-triaged", "attack pattern matched", true],
          ["Containment", "awaiting analyst", false],
        ].map(([k, v, done]) => (
          <li key={k as string} className="flex items-center gap-2.5">
            {done ? (
              <Check size={13} strokeWidth={3} aria-hidden="true" className="shrink-0 text-emerald-400" />
            ) : (
              <Clock size={13} aria-hidden="true" className="shrink-0 text-fog" />
            )}
            <span className="text-mist">{k}</span>
            <span className="ml-auto text-right text-fog">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TraineeCard() {
  const rows = [
    { text: "Failed a role-based simulation", icon: X, cls: "text-rose-300" },
    { text: "Difficulty auto-adjusted", icon: ArrowDown, cls: "text-ice" },
    { text: "Reinforcement scheduled", icon: Zap, cls: "text-ice" },
    { text: "Reported the simulation", icon: Check, cls: "text-emerald-400" },
  ];
  return (
    <div className={FLOATER_CLS} aria-label="Trainee progress">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ice/20 font-mono text-sm font-bold text-ice"
        >
          AB
        </span>
        <div>
          <p className="text-sm font-semibold text-paper">Anna Berg</p>
          <p className="text-xs text-fog">Customer Success</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-semibold tracking-[0.08em] text-mist">TRAINING PROGRESS</span>
          <span className="font-mono tabular-nums text-ice">68%</span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
          <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-electric to-ice" />
        </div>
      </div>
      <ul className="mt-4 space-y-1 border-t border-white/10 pt-3">
        {rows.map((r) => {
          const Icon = r.icon;
          return (
            <li key={r.text} className="flex items-center gap-2.5 py-1.5 text-xs text-mist">
              <Icon size={13} aria-hidden="true" className={`shrink-0 ${r.cls}`} strokeWidth={3} />
              {r.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function PolicyCard() {
  return (
    <div className={FLOATER_CLS} aria-label="Policy match DLP-114">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-fog">DLP-114</span>
        <FloaterPill tone="blocked">BLOCKED</FloaterPill>
      </div>
      <p className="font-display mt-2 text-[15px] font-bold leading-snug text-paper">
        PAN + identity pattern
      </p>
      <p className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 bg-abyss/70 px-3 py-2 text-xs text-paper">
        <FileText size={13} aria-hidden="true" className="shrink-0 text-ice" />
        payroll-march.xlsx
        <span className="ml-auto font-mono text-[10px] text-fog">2.4 MB</span>
      </p>
      <ul className="mt-3 space-y-1.5 font-mono text-[11px] text-fog">
        <li className="flex justify-between">
          <span>Entities found</span>
          <span className="text-paper">14 PANs · 6 IDs</span>
        </li>
        <li className="flex justify-between">
          <span>Channel</span>
          <span className="text-paper">Outbound email</span>
        </li>
        <li className="flex justify-between">
          <span>Action</span>
          <span className="text-emerald-300">Quarantined + logged</span>
        </li>
      </ul>
    </div>
  );
}

export function FindingCard() {
  return (
    <div className={FLOATER_CLS} aria-label="Finding BOLA-04 details">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-fog">BOLA-04</span>
        <FloaterPill tone="critical">CRITICAL</FloaterPill>
      </div>
      <p className="mt-2 font-mono text-xs text-paper">api/orders.ts:142</p>
      <p className="mt-1 text-xs leading-relaxed text-mist">
        Order endpoint exposes other tenants. Suggested fix attached by SAST.
      </p>
      <p className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-abyss/80 px-3 py-2 font-mono text-[11px] leading-relaxed text-ice">
        authorize(order.tenant == ctx.tenant)
      </p>
      <p className="mt-3 border-t border-white/10 pt-3 font-mono text-[11px] text-fog">
        Owner: <span className="text-mist">checkout-api team</span>
      </p>
    </div>
  );
}

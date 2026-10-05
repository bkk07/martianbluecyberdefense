import {
  Award,
  ClipboardList,
  Microscope,
  Rocket,
  Search,
  ShieldCheck,
  Sprout,
  Swords,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ---------- Programs ---------- */

export interface EduProgram {
  slug: string;
  badge: string;
  level: string;
  duration: string;
  title: string;
  description: string;
  learn: string[];
  outcomes: string[];
  price: string;
  accent: string;
  icon: LucideIcon;
}

export const EDU_PROGRAMS: EduProgram[] = [
  {
    slug: "fundamentals",
    badge: "Most Popular",
    level: "Beginner",
    duration: "4 Weeks",
    title: "Cyber Security Fundamentals",
    description:
      "Perfect for students and professionals with no prior cybersecurity experience. Build a strong foundation in security concepts.",
    learn: [
      "Introduction to Cybersecurity & CIA Triad",
      "Networking Basics & Protocols",
      "Linux & Windows Security Essentials",
      "Cryptography & PKI Fundamentals",
      "OWASP Top 10 Overview",
      "Career Roadmap in Cybersecurity",
    ],
    outcomes: [
      "Understand core security concepts",
      "Set up a personal security lab",
      "Earn MartianBlue Foundation Certificate",
    ],
    price: "₹4,999",
    accent: "#4ade80",
    icon: Sprout,
  },
  {
    slug: "ethical-hacking",
    badge: "Recommended",
    level: "Intermediate",
    duration: "6 Weeks",
    title: "Ethical Hacking & Penetration Testing",
    description:
      "Hands-on offensive security training covering real-world attack techniques, tools, and methodologies.",
    learn: [
      "Reconnaissance & OSINT Techniques",
      "Network Scanning with Nmap & Masscan",
      "Web Application Hacking (Burp Suite)",
      "Exploitation with Metasploit Framework",
      "Post-Exploitation & Privilege Escalation",
      "Report Writing & Responsible Disclosure",
    ],
    outcomes: [
      "Conduct basic penetration tests",
      "Use industry-standard hacking tools",
      "Earn MartianBlue Ethical Hacker Certificate",
    ],
    price: "₹6,999",
    accent: "#38bdf8",
    icon: Zap,
  },
  {
    slug: "soc-analyst",
    badge: "Expert Track",
    level: "Advanced",
    duration: "8 Weeks",
    title: "SOC Analyst & Threat Hunting",
    description:
      "Advanced blue team training for aspiring SOC analysts covering SIEM, threat hunting, and incident response.",
    learn: [
      "SIEM Operations (Splunk & Wazuh)",
      "Threat Intelligence & MITRE ATT&CK",
      "Digital Forensics & Memory Analysis",
      "Malware Analysis (Static & Dynamic)",
      "Incident Response Playbooks & SOAR",
      "Zero Trust Architecture & Cloud Security",
    ],
    outcomes: [
      "Operate enterprise SIEM platforms",
      "Conduct threat hunting operations",
      "Earn MartianBlue SOC Analyst Certificate",
    ],
    price: "₹12,999",
    accent: "#c084fc",
    icon: Rocket,
  },
];

/* ---------- Upcoming batches ---------- */

export type BatchStatus = "Enrolling" | "Upcoming" | "Available";

export interface EduBatch {
  program: string;
  startDate: string;
  mode: string;
  seats: number;
  available: number;
  status: BatchStatus;
}

export const EDU_BATCHES: EduBatch[] = [
  { program: "Cyber Security Fundamentals", startDate: "July 15, 2026", mode: "Online", seats: 30, available: 12, status: "Enrolling" },
  { program: "Ethical Hacking & Pen Testing", startDate: "July 20, 2026", mode: "Online", seats: 25, available: 8, status: "Enrolling" },
  { program: "SOC Analyst & Threat Hunting", startDate: "August 1, 2026", mode: "Online", seats: 20, available: 15, status: "Enrolling" },
  { program: "Cyber Security Fundamentals", startDate: "August 15, 2026", mode: "Online", seats: 30, available: 30, status: "Upcoming" },
  { program: "Corporate Awareness Training", startDate: "Flexible", mode: "On-site / Online", seats: 50, available: 50, status: "Available" },
];

/* ---------- Learning path ---------- */

export interface EduStep {
  index: string;
  title: string;
  description: string;
  accent: string;
  icon: LucideIcon;
}

export const EDU_PATH: EduStep[] = [
  { index: "STEP 01", title: "Foundation", description: "Networking, Linux, Cryptography basics", accent: "#4ade80", icon: Sprout },
  { index: "STEP 02", title: "Recon & Analysis", description: "OSINT, vulnerability scanning, assessment", accent: "#38bdf8", icon: Search },
  { index: "STEP 03", title: "Offensive Skills", description: "Exploitation, web hacking, social engineering", accent: "#fbbf24", icon: Swords },
  { index: "STEP 04", title: "Defensive Skills", description: "SOC operations, SIEM, incident response", accent: "#c084fc", icon: ShieldCheck },
  { index: "STEP 05", title: "Certification", description: "MartianBlue certificate + career guidance", accent: "#fb7185", icon: Award },
];

/* ---------- Corporate training ---------- */

export interface EduCorporate {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

export const EDU_CORPORATE: EduCorporate[] = [
  {
    title: "Security Awareness Training",
    description:
      "Customized phishing simulation and security awareness programs for your entire workforce. Reduce human error — the #1 cause of breaches.",
    points: [
      "Simulated phishing campaigns",
      "Role-based training modules",
      "Progress tracking dashboard",
      "Compliance reporting",
    ],
    icon: Target,
  },
  {
    title: "Technical Skills Development",
    description:
      "Hands-on cybersecurity training for your IT and security teams. Build internal capability to detect, respond, and defend against threats.",
    points: [
      "Penetration testing workshops",
      "SOC analyst training",
      "Incident response drills",
      "Custom lab environments",
    ],
    icon: Microscope,
  },
  {
    title: "Compliance Training",
    description:
      "Meet your regulatory obligations with structured training programs aligned to ISO 27001, GDPR, HIPAA, and other frameworks.",
    points: [
      "Framework-aligned curriculum",
      "Audit-ready documentation",
      "Assessment & certification",
      "Quarterly refresher sessions",
    ],
    icon: ClipboardList,
  },
];

export const EDU_TABS = ["Programs", "Upcoming Batches", "Learning Path", "Corporate Training"] as const;
export type EduTab = (typeof EDU_TABS)[number];

/* ---------- Hero stats ---------- */

export const EDU_HERO_STATS = [
  { value: "1000+", label: "Students Trained" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "3", label: "Certification Tracks" },
  { value: "Industry", label: "Expert Trainers" },
];

/* ---------- Program finder personas ---------- */

export interface EduPersona {
  label: string;
  hint: string;
  programSlug: string;
}

export const EDU_PERSONAS: EduPersona[] = [
  { label: "Complete Beginner", hint: "No IT background", programSlug: "fundamentals" },
  { label: "IT Background", hint: "Comfortable with systems", programSlug: "ethical-hacking" },
  { label: "Security Professional", hint: "Ready to specialize", programSlug: "soc-analyst" },
];

/* ---------- Student success ---------- */

export interface EduReview {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const EDU_REVIEWS: EduReview[] = [
  {
    quote:
      "The hands-on labs were incredible. I got my first cybersecurity job within 2 months of completing the Advanced track. MartianBlue's training is truly industry-aligned.",
    name: "Sai Krishna P.",
    role: "Now working as SOC Analyst",
    initials: "SK",
  },
  {
    quote:
      "As a beginner, I was nervous about cybersecurity. The Fundamentals course broke everything down perfectly. Now I'm preparing for CEH with confidence!",
    name: "Ananya R.",
    role: "CSE Student, VIT University",
    initials: "AR",
  },
  {
    quote:
      "We enrolled our entire IT team in the corporate awareness program. The phishing simulation results improved dramatically — from 34% click rate to under 3%.",
    name: "Vikram S.",
    role: "IT Manager, Manufacturing Co.",
    initials: "VS",
  },
];

/* ---------- FAQ ---------- */

export interface EduFaq {
  question: string;
  answer: string;
}

export const EDU_FAQS: EduFaq[] = [
  {
    question: "Do I need prior experience to join?",
    answer:
      "No. Cyber Security Fundamentals assumes zero background. Ethical Hacking expects basic IT comfort, and the SOC Analyst track builds on the networking and security foundations covered earlier in the journey.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes. Every program includes a verifiable MartianBlue certificate — Foundation, Ethical Hacker, or SOC Analyst — awarded on successful completion of the course and assessments.",
  },
  {
    question: "Are the sessions live or recorded?",
    answer:
      "Cohorts run live and online with instructor Q&A. Every session is also recorded with lifetime access, alongside hands-on labs you can practice in anytime.",
  },
  {
    question: "Is there placement assistance?",
    answer:
      "Yes. Career guidance — including resume reviews, interview preparation, and role mapping — is part of every track to help you convert skills into offers.",
  },
  {
    question: "Do you offer corporate training?",
    answer:
      "Yes. We design awareness programs, technical upskilling, and compliance training for teams of 10 to 10,000, delivered online, on-site, or hybrid.",
  },
];

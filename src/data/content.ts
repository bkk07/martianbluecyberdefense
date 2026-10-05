/* ---------- Why Martian Blue (landing): 6 numbered items, PDF-exact copy ---------- */

export interface WhyItem {
  index: string;
  title: string;
  description: string;
}

export const WHY_ITEMS: WhyItem[] = [
  {
    index: "01",
    title: "AI-Driven Security",
    description:
      "Leverage AI-assisted analysis and modern security technologies to address evolving threats.",
  },
  {
    index: "02",
    title: "End-to-End Protection",
    description:
      "Security across people, applications, identities, data, and infrastructure.",
  },
  {
    index: "03",
    title: "Proactive Defense",
    description:
      "Identify vulnerabilities and risks before they become serious security incidents.",
  },
  {
    index: "04",
    title: "Security Expertise",
    description:
      "Combine cybersecurity consulting, engineering, training, and threat-focused services.",
  },
  {
    index: "05",
    title: "Customized Solutions",
    description:
      "Security strategies designed around the organization's technology, risk profile, and requirements.",
  },
  {
    index: "06",
    title: "Security by Design",
    description:
      "Integrate security into software, infrastructure, operations, and organizational processes.",
  },
];

/* ---------- Security Metrics (capability-based, PDF-exact) ---------- */

export interface Metric {
  value: string;
  label: string;
}

export const METRICS: Metric[] = [
  { value: "6", label: "Core Security Services" },
  { value: "24/7", label: "Security Monitoring*" },
  { value: "AI", label: "Powered Defense" },
  { value: "360°", label: "Security Visibility" },
];

/* ---------- Case Studies: placeholder shells, PDF structure ---------- */

export const CASE_STUDY_STAGES = [
  "Challenge",
  "Security Assessment",
  "Solution",
  "Implementation",
  "Outcome",
];

export interface CaseStudy {
  index: string;
  title: string;
  placeholder: true;
}

export const CASE_STUDIES: CaseStudy[] = [
  { index: "Case Study 01", title: "Case Study 01", placeholder: true },
  { index: "Case Study 02", title: "Case Study 02", placeholder: true },
  { index: "Case Study 03", title: "Case Study 03", placeholder: true },
];

/* ---------- Testimonials: carousel, sample layout only ---------- */

export interface Testimonial {
  headline: string;
  quote: string;
  name: string;
  designation: string;
  organization: string;
  avatar: string;
  avatarAlt: string;
  sample: true;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    headline: "Phishing reports became our best early-warning system",
    quote:
      "Our simulation click rate dropped from 28% to 4% in two quarters. The board finally sees security awareness as a measurable control, not a checkbox exercise.",
    name: "Jonas Lindqvist",
    designation: "CISO",
    organization: "Nordwind Logistics",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
    avatarAlt: "Portrait of Jonas Lindqvist",
    sample: true,
  },
  {
    headline: "Training that changed how our engineers write code",
    quote:
      "The secure SDLC reviews caught flaws our pipeline had missed for years. Our release cycle did not slow down — it got safer, and the auditors noticed.",
    name: "Priya Nair",
    designation: "Head of Engineering",
    organization: "Helios Fintech",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
    avatarAlt: "Portrait of Priya Nair",
    sample: true,
  },
  {
    headline: "We detect intrusions in minutes, not weeks",
    quote:
      "Round-the-clock monitoring with AI-assisted triage cut our mean time to respond from days to under an hour. Patient data has never been safer.",
    name: "Marcus Feld",
    designation: "Security Operations Lead",
    organization: "MedCore Clinics",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    avatarAlt: "Portrait of Marcus Feld",
    sample: true,
  },
];

/* ---------- Resources (landing): PDF-exact ---------- */

export const RESOURCE_TABS = ["Blog", "Case Studies", "Security Guides"];

export interface ResourceCard {
  category: string;
  title: string;
}

export const RESOURCE_CARDS: ResourceCard[] = [
  { category: "Cybersecurity Awareness", title: "Cybersecurity Awareness" },
  { category: "Phishing & Social Engineering", title: "Phishing & Social Engineering" },
  { category: "AI & Cybersecurity", title: "AI & Cybersecurity" },
];

export const RESOURCE_CATEGORIES = [
  "Cybersecurity Awareness",
  "Phishing & Social Engineering",
  "Data Protection",
  "AI & Cybersecurity",
  "Secure Development",
  "Digital Identity",
  "Threat Intelligence",
  "Security Training",
];

/* ---------- Solutions page: 6 cards, PDF-exact copy ---------- */

export interface Solution {
  slug: string;
  title: string;
  description: string;
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "phishing",
    title: "Phishing & Cyber Fraud",
    description: "Protect people and businesses from phishing & fraud.",
  },
  {
    slug: "identity",
    title: "Identity & Access",
    description: "Secure identities, authentication and digital access.",
  },
  {
    slug: "data",
    title: "Data Protection",
    description: "Protect sensitive data from exposure and leakage.",
  },
  {
    slug: "appsec",
    title: "Application Security",
    description: "Secure applications from development to deployment.",
  },
  {
    slug: "threat",
    title: "Threat Detection & Response",
    description: "Detect, investigate and respond to threats.",
  },
  {
    slug: "ai",
    title: "AI Cyber Defense",
    description: "AI-assisted security, analysis and threat intelligence.",
  },
];

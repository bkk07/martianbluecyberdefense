export interface Feature {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  dashboard: "threat" | "awareness" | "data" | "sdlc";
}

/* Copy exactly as specified in the Martian Blue UI Design PDF. */
export const FEATURES: Feature[] = [
  {
    id: "feature-threat",
    eyebrow: "AI-Powered Threat Detection",
    title: "Detect threats before they become incidents.",
    description:
      "Use AI-assisted analytics and threat intelligence to identify suspicious activity and emerging attacks.",
    cta: "Explore Threat Detection",
    dashboard: "threat",
  },
  {
    id: "feature-awareness",
    eyebrow: "Security Awareness & Phishing Defense",
    title: "Turn employees into an active layer of defense.",
    description:
      "Run realistic phishing simulations, security awareness training, and employee risk assessments.",
    cta: "Explore Security Awareness",
    dashboard: "awareness",
  },
  {
    id: "feature-data",
    eyebrow: "Data Protection & Leakage Prevention",
    title: "Know where sensitive data is going.",
    description:
      "Monitor data movement and identify potential unauthorized access or exfiltration.",
    cta: "Explore Data Protection",
    dashboard: "data",
  },
  {
    id: "feature-sdlc",
    eyebrow: "Secure Software Development",
    title: "Build security into every stage of development.",
    description:
      "Identify vulnerabilities before applications reach production.",
    cta: "Explore Secure Development",
    dashboard: "sdlc",
  },
];

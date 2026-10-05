export interface LifecycleStep {
  index: string;
  name: string;
  description: string;
}

/* Copy exactly as specified in the Martian Blue UI Design PDF. */
export const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    index: "01",
    name: "IDENTIFY",
    description:
      "Discover assets, vulnerabilities, identities, and potential attack surfaces.",
  },
  {
    index: "02",
    name: "DETECT",
    description:
      "Identify suspicious activity, phishing, anomalies, and potential threats.",
  },
  {
    index: "03",
    name: "ANALYZE",
    description:
      "Investigate threats using intelligence, analytics, and AI-assisted detection.",
  },
  {
    index: "04",
    name: "RESPOND",
    description:
      "Support rapid incident response, containment, and remediation.",
  },
  {
    index: "05",
    name: "PREVENT",
    description:
      "Strengthen controls, security awareness, applications, and infrastructure.",
  },
  {
    index: "06",
    name: "IMPROVE",
    description:
      "Continuously assess security posture and improve organizational resilience.",
  },
];

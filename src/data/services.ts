import {
  Bot,
  Code2,
  CreditCard,
  DatabaseZap,
  Fish,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
  audiences?: string[];
  cta: string;
}

/* Copy exactly as specified in the Martian Blue UI Design PDF. */
export const SERVICES: Service[] = [
  {
    slug: "antiphishing",
    index: "01",
    icon: Fish,
    title: "Antiphishing & Cyber Frauds",
    description:
      "AI-powered defense against phishing attacks, social engineering, and cyber fraud targeting your organization.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Smartphone secured against phishing and fraud",
    capabilities: [
      "Phishing detection & prevention",
      "Threat intelligence",
      "Phishing simulations",
      "Security awareness integration",
      "Incident response support",
      "Credential-leak monitoring",
    ],
    audiences: ["Enterprise", "Finance", "Education", "Government"],
    cta: "Explore",
  },
  {
    slug: "dlp",
    index: "02",
    icon: DatabaseZap,
    title: "Data Leakage Detection & Prevention",
    description:
      "Protect sensitive information from unauthorized access, exposure, and exfiltration across endpoints, cloud, and network environments.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Data center server racks under monitoring",
    capabilities: [
      "Data classification",
      "Data loss prevention",
      "Endpoint protection",
      "Cloud data protection",
      "Network monitoring",
      "Policy enforcement",
      "Compliance support",
    ],
    cta: "Explore",
  },
  {
    slug: "identity",
    index: "03",
    icon: CreditCard,
    title: "Digital Payments & Identity",
    description:
      "Secure digital transactions and identities with strong authentication, fraud detection, and identity verification technologies.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Digital padlock on a circuit board",
    capabilities: [
      "Multi-factor authentication",
      "Identity verification",
      "Transaction monitoring",
      "Fraud detection",
      "Payment security",
      "Authentication security",
    ],
    cta: "Explore",
  },
  {
    slug: "sdlc",
    index: "04",
    icon: Code2,
    title: "Secure Software Development",
    description:
      "Build secure applications by integrating security throughout the software development lifecycle.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Developers building software securely",
    capabilities: [
      "Secure SDLC",
      "Code security reviews",
      "SAST & DAST",
      "DevSecOps",
      "Vulnerability assessment",
      "Penetration testing",
      "Security architecture review",
    ],
    cta: "Explore",
  },
  {
    slug: "education",
    index: "05",
    icon: GraduationCap,
    title: "Education & Upskilling",
    description:
      "Develop practical cybersecurity skills through training, workshops, labs, and security awareness programs.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Cybersecurity training session in a classroom",
    capabilities: [
      "Cybersecurity awareness",
      "Ethical hacking workshops",
      "Certification preparation",
      "Hands-on security labs",
      "CTF competitions",
      "Customized training",
      "Corporate security training",
    ],
    cta: "Explore",
  },
  {
    slug: "tactical-ai",
    index: "06",
    icon: Bot,
    title: "Tactical Cyber Security & AI",
    description:
      "AI-powered cybersecurity capabilities for advanced threat detection, analysis, and specialized security operations.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Artificial intelligence robot hand",
    capabilities: [
      "Threat hunting",
      "AI-assisted detection",
      "Behavioral analytics",
      "Anomaly detection",
      "SOC support",
      "Threat intelligence",
      "Custom security tooling",
    ],
    cta: "Explore",
  },
];

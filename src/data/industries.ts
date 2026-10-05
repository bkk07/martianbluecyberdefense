import {
  Building2,
  Cpu,
  HeartPulse,
  Landmark,
  Network,
  School,
  type LucideIcon,
} from "lucide-react";
export interface Industry {
  slug: string;
  icon: LucideIcon;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Accent color used for this industry's band (hex). */
  accent: string;
  /** Service-derived focus areas for this industry. */
  focus: string[];
}

/* Landing section + Industries page share this data; descriptions are PDF-exact. */
export const INDUSTRIES: Industry[] = [
  {
    slug: "fintech",
    icon: Building2,
    name: "Banking & FinTech",
    description: "Protect transactions, identities, and financial systems.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Modern corporate banking towers",
    accent: "#34d399",
    focus: [
      "Transaction monitoring",
      "Multi-factor authentication",
      "Fraud detection",
      "Payment security",
    ],
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    description: "Protect sensitive information and critical systems.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Clinician reviewing records on a tablet",
    accent: "#fb7185",
    focus: [
      "Data classification",
      "Endpoint protection",
      "Policy enforcement",
      "Compliance support",
    ],
  },
  {
    slug: "education",
    icon: School,
    name: "Education",
    description: "Secure institutions, students, staff, and digital infrastructure.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Students learning in a modern classroom",
    accent: "#fbbf24",
    focus: [
      "Cybersecurity awareness",
      "Phishing simulations",
      "Hands-on security labs",
      "Customized training",
    ],
  },
  {
    slug: "government",
    icon: Landmark,
    name: "Government",
    description: "Strengthen critical systems and organizational security.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Symbol of justice and public institutions",
    accent: "#a78bfa",
    focus: [
      "Threat hunting",
      "Incident response support",
      "Security architecture review",
      "Compliance support",
    ],
  },
  {
    slug: "saas",
    icon: Cpu,
    name: "Technology & SaaS",
    description: "Build and operate secure applications and platforms.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Close-up of a circuit board",
    accent: "#45e0ff",
    focus: [
      "Secure SDLC",
      "SAST & DAST",
      "Penetration testing",
      "DevSecOps",
    ],
  },
  {
    slug: "enterprise",
    icon: Network,
    name: "Enterprise",
    description: "Protect people, applications, infrastructure, and data.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Modern enterprise office interior",
    accent: "#60a5fa",
    focus: [
      "Threat intelligence",
      "SOC support",
      "Data loss prevention",
      "Security awareness integration",
    ],
  },
];

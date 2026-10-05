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
}

/* Landing section: 6 interactive industry cards, copy exactly as in the PDF. */
export const INDUSTRIES: Industry[] = [
  {
    slug: "fintech",
    icon: Building2,
    name: "Banking & FinTech",
    description: "Protect transactions, identities, and financial systems.",
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    description: "Protect sensitive information and critical systems.",
  },
  {
    slug: "education",
    icon: School,
    name: "Education",
    description: "Secure institutions, students, staff, and digital infrastructure.",
  },
  {
    slug: "government",
    icon: Landmark,
    name: "Government",
    description: "Strengthen critical systems and organizational security.",
  },
  {
    slug: "saas",
    icon: Cpu,
    name: "Technology & SaaS",
    description: "Build and operate secure applications and platforms.",
  },
  {
    slug: "enterprise",
    icon: Network,
    name: "Enterprise",
    description: "Protect people, applications, infrastructure, and data.",
  },
];

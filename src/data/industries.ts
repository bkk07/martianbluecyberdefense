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
}

/* Landing section: 6 interactive industry cards, copy exactly as in the PDF. */
export const INDUSTRIES: Industry[] = [
  {
    slug: "fintech",
    icon: Building2,
    name: "Banking & FinTech",
    description: "Protect transactions, identities, and financial systems.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Modern corporate banking towers",
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    description: "Protect sensitive information and critical systems.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Clinician reviewing records on a tablet",
  },
  {
    slug: "education",
    icon: School,
    name: "Education",
    description: "Secure institutions, students, staff, and digital infrastructure.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Students learning in a modern classroom",
  },
  {
    slug: "government",
    icon: Landmark,
    name: "Government",
    description: "Strengthen critical systems and organizational security.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Symbol of justice and public institutions",
  },
  {
    slug: "saas",
    icon: Cpu,
    name: "Technology & SaaS",
    description: "Build and operate secure applications and platforms.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Close-up of a circuit board",
  },
  {
    slug: "enterprise",
    icon: Network,
    name: "Enterprise",
    description: "Protect people, applications, infrastructure, and data.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Modern enterprise office interior",
  },
];

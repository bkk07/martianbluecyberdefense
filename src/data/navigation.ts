export interface NavLeaf {
  label: string;
  href: string;
  desc?: string;
}

export interface NavGroup {
  heading?: string;
  links: NavLeaf[];
}

export interface NavEntry {
  label: string;
  href: string;
  columns?: number;
  children?: NavLeaf[];
  groups?: NavGroup[];
  footerLink?: NavLeaf;
}

/* Navbar structure exactly as specified in the Martian Blue UI Design PDF. */
export const NAV_ITEMS: NavEntry[] = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Cyber Education",
    href: "/education",
  },
  {
    label: "Resources",
    href: "/resources",
    columns: 2,
    children: [
      { label: "Cybersecurity Insights", href: "/resources" },
      { label: "Blog", href: "/resources#blog" },
      { label: "Case Studies", href: "/resources#case-studies" },
      { label: "Security Guides", href: "/resources#guides" },
      { label: "Research", href: "/resources#research" },
      { label: "Webinars", href: "/resources#watch" },
      { label: "Masterclasses", href: "/resources#watch" },
      { label: "Events", href: "/resources#explore" },
      { label: "FAQs", href: "/resources#explore" },
      { label: "Cybersecurity Glossary", href: "/resources#explore" },
      { label: "Downloads", href: "/resources#explore" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
  { label: "Contact Us", href: "/contact" },
];

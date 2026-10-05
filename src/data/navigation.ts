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
    columns: 2,
    children: [
      { label: "Antiphishing & Cyber Frauds", href: "/services#service-antiphishing" },
      { label: "Data Leakage Detection & Prevention", href: "/services#service-dlp" },
      { label: "Digital Payments & Identity", href: "/services#service-identity" },
      { label: "Secure Software Development", href: "/services#service-sdlc" },
      { label: "Education & Upskilling", href: "/services#service-education" },
      { label: "Tactical Cyber Security & AI", href: "/services#service-tactical-ai" },
    ],
    footerLink: { label: "View All Services", href: "/services" },
  },
  {
    label: "Solutions",
    href: "/solutions",
    columns: 2,
    children: [
      { label: "Phishing Protection", href: "/solutions#phishing" },
      { label: "Security Awareness", href: "/services#service-antiphishing" },
      { label: "Data Protection", href: "/solutions#data" },
      { label: "Application Security", href: "/solutions#appsec" },
      { label: "Identity & Access Security", href: "/solutions#identity" },
      { label: "Threat Detection & Response", href: "/solutions#threat" },
      { label: "AI-Powered Cyber Defense", href: "/solutions#ai" },
      { label: "Security Assessments", href: "/services#service-tactical-ai" },
    ],
  },
  {
    label: "Industries",
    href: "/#industries",
    columns: 2,
    children: [
      { label: "Banking & FinTech", href: "/#industries", desc: "Protect financial data, identities and critical banking systems." },
      { label: "Digital Payments & Financial Services", href: "/#industries", desc: "Secure transactions, identities and payment infrastructure." },
      { label: "Healthcare", href: "/#industries", desc: "Protect patient data, systems and digital healthcare services." },
      { label: "Education", href: "/#industries", desc: "Secure institutions, platforms and student information." },
      { label: "Government & Public Sector", href: "/#industries", desc: "Secure critical public infrastructure and sensitive systems." },
      { label: "E-commerce & Retail", href: "/#industries", desc: "Protect customer data, transactions and digital platforms." },
      { label: "Technology & SaaS", href: "/#industries", desc: "Secure applications, APIs, cloud systems and infrastructure." },
      { label: "Enterprises & Startups", href: "/#industries", desc: "Build a security strategy that scales with your organization." },
    ],
    footerLink: { label: "Can't find your industry? Talk to Us", href: "/contact" },
  },
  {
    label: "Cyber Education",
    href: "/education",
    groups: [
      {
        heading: "Programs",
        links: [
          { label: "Cyber Security Fundamentals", href: "/education#programs" },
          { label: "Ethical Hacking & Penetration Testing", href: "/education#programs" },
          { label: "SOC Analyst & Threat Hunting", href: "/education#programs" },
        ],
      },
      {
        heading: "Learning",
        links: [
          { label: "Learning Paths", href: "/education#learning-path" },
          { label: "Upcoming Batches", href: "/education#batches" },
          { label: "Certifications", href: "/education#certification" },
          { label: "Hands-on Labs", href: "/education#labs" },
        ],
      },
      {
        heading: "Training",
        links: [
          { label: "Corporate Training", href: "/education#corporate" },
          { label: "Custom Cybersecurity Training", href: "/education#corporate" },
        ],
      },
    ],
    footerLink: { label: "Explore Cyber Education", href: "/education" },
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
    children: [
      { label: "About Martian Blue", href: "/about" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "Our Team", href: "/about#team" },
      { label: "Why Martian Blue", href: "/about#why" },
      { label: "Partners", href: "/about#partners" },
      { label: "Careers", href: "/about#partners" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

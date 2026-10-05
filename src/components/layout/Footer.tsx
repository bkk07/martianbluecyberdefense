import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../data/services";

const CURRENT_YEAR = new Date().getFullYear();

const SOLUTION_LINKS = [
  { label: "Threat Detection", href: "/solutions#threat" },
  { label: "Security Awareness", href: "/services#service-antiphishing" },
  { label: "Data Protection", href: "/solutions#data" },
  { label: "Identity Security", href: "/solutions#identity" },
  { label: "Application Security", href: "/solutions#appsec" },
  { label: "AI Cyber Defense", href: "/solutions#ai" },
];

const INDUSTRY_LINKS = [
  "Banking & FinTech",
  "Healthcare",
  "Education",
  "Government",
  "Technology",
  "Enterprise",
];

const RESOURCE_LINKS = ["Blog", "Case Studies", "Security Guides", "Research", "FAQs"];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/contact" },
];

function ColTitle({ children }: { children: string }) {
  return (
    <h3 className="font-display text-xs font-bold tracking-[0.22em] text-fog">{children}</h3>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="Martian Blue home">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-electric/40 bg-navy-800">
                <ShieldCheck size={22} className="text-ice" aria-hidden="true" />
              </span>
              <span className="font-display text-base font-bold tracking-[0.18em] text-paper">
                MARTIAN&nbsp;BLUE
              </span>
            </Link>
            <p className="mt-3 text-[13px] tracking-[0.14em] text-mist">
              Cyber Defense • AI • Security • Education
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-electric-bright"
            >
              Get Started
              <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            <nav aria-label="Footer — Services">
              <ColTitle>SERVICES</ColTitle>
              <ul className="mt-4 space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services#service-${s.slug}`} className="text-[13px] leading-snug text-mist transition-colors hover:text-paper">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer — Solutions">
              <ColTitle>SOLUTIONS</ColTitle>
              <ul className="mt-4 space-y-2.5">
                {SOLUTION_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="text-[13px] text-mist transition-colors hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer — Industries">
              <ColTitle>INDUSTRIES</ColTitle>
              <ul className="mt-4 space-y-2.5">
                {INDUSTRY_LINKS.map((l) => (
                  <li key={l}>
                    <Link to="/industries" className="text-[13px] text-mist transition-colors hover:text-paper">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer — Resources">
              <ColTitle>RESOURCES</ColTitle>
              <ul className="mt-4 space-y-2.5">
                {RESOURCE_LINKS.map((l) => (
                  <li key={l}>
                    <Link to="/resources" className="text-[13px] text-mist transition-colors hover:text-paper">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer — Company">
              <ColTitle>COMPANY</ColTitle>
              <ul className="mt-4 space-y-2.5">
                {COMPANY_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="text-[13px] text-mist transition-colors hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-sm text-mist">Martian Blue Cyber Defense</p>
          <div className="mt-2 flex flex-col gap-2 text-xs text-fog sm:flex-row sm:items-center sm:justify-between">
            <p>
              <span>Privacy Policy</span> | <span>Terms</span> | <span>Security</span>
            </p>
            <p>© {CURRENT_YEAR} Martian Blue Cyber Defense. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

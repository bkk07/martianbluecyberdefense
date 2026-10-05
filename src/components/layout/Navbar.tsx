import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS, type NavEntry } from "../../data/navigation";
import { MobileMenu } from "./MobileMenu";

function DropdownPanel({ item }: { item: NavEntry }) {
  const wide = (item.columns ?? 1) > 1 || !!item.groups;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 ${
        wide ? "w-[600px]" : "w-72"
      }`}
    >
      <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-950/95 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        {item.groups ? (
          <div className="grid grid-cols-3 gap-1 p-2">
            {item.groups.map((g) => (
              <div key={g.heading} className="rounded-lg bg-white/[0.02] p-2">
                <p className="px-2.5 pb-1.5 pt-1 text-[11px] font-bold tracking-[0.18em] text-fog">
                  {g.heading?.toUpperCase()}
                </p>
                <ul className="space-y-0.5">
                  {g.links.map((leaf) => (
                    <li key={leaf.label}>
                      <Link
                        to={leaf.href}
                        className="block rounded-md px-2.5 py-2 text-[13px] font-medium text-mist transition-colors hover:bg-white/5 hover:text-paper"
                      >
                        {leaf.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className={`grid gap-1 p-2 ${(item.columns ?? 1) > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
            {item.children?.map((leaf) => (
              <li key={leaf.label}>
                <Link
                  to={leaf.href}
                  className="group flex items-start justify-between gap-3 rounded-lg px-3.5 py-2.5 transition-colors hover:bg-white/5"
                >
                  <span>
                    <span className="block text-[13.5px] font-medium text-paper">{leaf.label}</span>
                    {leaf.desc && <span className="mt-0.5 block text-xs leading-snug text-fog">{leaf.desc}</span>}
                  </span>
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-fog opacity-0 transition-all group-hover:translate-x-px group-hover:text-ice group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
        {item.footerLink && (
          <Link
            to={item.footerLink.href}
            className="group flex items-center justify-between border-t border-white/10 bg-electric/10 px-5 py-3 text-sm font-semibold text-ice transition-colors hover:bg-electric/20"
          >
            {item.footerLink.label}
            <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const hasMenu = (item: NavEntry) => !!(item.children || item.groups);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-abyss/85 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-abyss/90 to-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-[72px] lg:px-10"
      >
        <Link to="/" className="flex items-center gap-2.5" aria-label="Martian Blue home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-electric/40 bg-navy-800">
            <ShieldCheck size={20} className="text-ice" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-bold tracking-[0.18em] text-paper">
            MARTIAN&nbsp;BLUE
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(hasMenu(item) ? item.label : null)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="flex items-center">
                <Link
                  to={item.href}
                  className="rounded-md px-2.5 py-2 text-[13.5px] font-medium text-mist transition-colors hover:text-paper"
                  aria-haspopup={hasMenu(item) ? "true" : undefined}
                  aria-expanded={hasMenu(item) ? openMenu === item.label : undefined}
                  onClick={() => setOpenMenu(null)}
                >
                  {item.label}
                </Link>
                {hasMenu(item) && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={openMenu === item.label}
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    className="-ml-1 rounded p-1 text-mist hover:text-paper"
                  >
                    <ChevronDown
                      size={14}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>

              <AnimatePresence>
                {hasMenu(item) && openMenu === item.label && <DropdownPanel item={item} />}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="group hidden items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(46,124,246,0.7)] transition-all duration-200 hover:-translate-y-px hover:bg-electric-bright lg:inline-flex"
        >
          Get Started
          <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-paper lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-200 ${mobileOpen ? "top-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-all duration-200 ${mobileOpen ? "top-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

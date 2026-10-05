import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS, type NavEntry } from "../../data/navigation";

function entryLinks(item: NavEntry) {
  if (item.groups) return item.groups.flatMap((g) => g.links);
  return item.children ?? [];
}

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>("Services");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 top-16 z-40 flex flex-col bg-abyss/[0.98] backdrop-blur-xl lg:hidden"
      role="dialog"
      aria-label="Site menu"
    >
      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
        <ul className="divide-y divide-white/8">
          {NAV_ITEMS.map((item) => {
            const links = entryLinks(item);
            return (
              <li key={item.label} className="py-1">
                {links.length > 0 ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={expanded === item.label}
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-left text-[15px] font-semibold text-paper"
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`text-mist transition-transform duration-200 ${expanded === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded === item.label && (
                      <ul className="mb-2 ml-1 space-y-0.5 border-l border-white/10 pl-4">
                        <li>
                          <Link
                            to={item.href}
                            onClick={onClose}
                            className="block rounded px-2 py-2 text-sm font-medium text-ice"
                          >
                            Overview — {item.label}
                          </Link>
                        </li>
                        {links.map((leaf) => (
                          <li key={leaf.label}>
                            <Link
                              to={leaf.href}
                              onClick={onClose}
                              className="block rounded px-2 py-2 text-sm text-mist transition-colors hover:text-paper"
                            >
                              {leaf.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="block rounded-lg px-2 py-3 text-[15px] font-semibold text-paper"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-white/10 p-5">
        <Link
          to="/contact"
          onClick={onClose}
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-electric px-6 py-3.5 text-sm font-semibold text-white"
        >
          Get Started
          <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

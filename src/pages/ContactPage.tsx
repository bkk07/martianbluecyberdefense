import { ArrowRight, Clock, GraduationCap, Handshake, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";

const INTERESTS = [
  "General enquiry",
  "Cybersecurity service enquiry",
  "Training enquiry",
  "Partnership",
  "Other business enquiry",
];

const HELP_CARDS = [
  {
    icon: ShieldCheck,
    title: "CYBERSECURITY SERVICES",
    copy: "Need security support?",
    href: "/services",
  },
  {
    icon: GraduationCap,
    title: "TRAINING & COURSES",
    copy: "Need training or a program?",
    href: "/education",
  },
  {
    icon: Handshake,
    title: "PARTNERSHIP",
    copy: "Interested in working with us?",
    href: "/about#partners",
  },
];

const inputCls =
  "w-full rounded-lg border border-white/12 bg-abyss/70 px-4 py-3 text-[15px] text-paper placeholder:text-fog focus:border-ice/60 focus:outline-none";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main id="main">
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk cybersecurity."
        copy="Have a security requirement, training request, partnership opportunity or general question?"
        primary={{ label: "Start a Conversation", href: "#contact-form" }}
      />

      <Container className="pb-20">
        <div id="contact-form" className="grid scroll-mt-28 gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <Reveal>
            <form onSubmit={onSubmit} className="panel rounded-2xl p-7 sm:p-9" aria-label="Send us a message">
              <h2 className="font-display text-xl font-bold text-paper">SEND US A MESSAGE</h2>
              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-mist">Full Name</label>
                  <input id="cf-name" name="name" required autoComplete="name" className={inputCls} placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-mist">Work Email</label>
                  <input id="cf-email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="cf-interest" className="mb-1.5 block text-sm font-medium text-mist">I&apos;m interested in</label>
                  <select id="cf-interest" name="interest" required defaultValue="" className={`${inputCls} appearance-none`}>
                    <option value="" disabled>Select an option ▼</option>
                    {INTERESTS.map((o) => (
                      <option key={o} value={o} className="bg-navy-950">{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="cf-msg" className="mb-1.5 block text-sm font-medium text-mist">Message</label>
                  <textarea id="cf-msg" name="message" required rows={5} className={`${inputCls} resize-y`} placeholder="Tell us about your requirement…" />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-electric-bright sm:w-auto"
                >
                  {sent ? "Message Sent — We'll Reply Soon" : "Send Message"}
                  {!sent && <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />}
                </button>
                {sent && (
                  <p className="text-sm text-ice" role="status">
                    Thanks — this demo form doesn&apos;t send email yet. Reach us at contact@martianblue.example.
                  </p>
                )}
              </div>
            </form>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.1}>
            <aside className="panel flex h-full flex-col rounded-2xl p-7 sm:p-9" aria-label="Contact MartianBlue">
              <h2 className="font-display text-xl font-bold text-paper">CONTACT MARTIANBLUE</h2>
              <ul className="mt-6 space-y-5 text-[15px]">
                <li className="flex gap-3.5">
                  <Mail size={19} className="mt-0.5 shrink-0 text-ice" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-fog">Email</p>
                    <p className="mt-1 text-mist">contact@martianblue.example</p>
                  </div>
                </li>
                <li className="flex gap-3.5">
                  <Phone size={19} className="mt-0.5 shrink-0 text-ice" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-fog">Phone</p>
                    <p className="mt-1 text-mist">+91 ........</p>
                  </div>
                </li>
                <li className="flex gap-3.5">
                  <MapPin size={19} className="mt-0.5 shrink-0 text-ice" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-fog">Location</p>
                    <p className="mt-1 text-mist">........</p>
                  </div>
                </li>
                <li className="flex gap-3.5">
                  <Clock size={19} className="mt-0.5 shrink-0 text-ice" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-fog">Business Hours</p>
                    <p className="mt-1 text-mist">........</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-bold tracking-[0.18em] text-fog">FOLLOW US</p>
                <div className="mt-3 flex gap-2.5">
                  {["X", "GitHub", "YouTube"].map((s) => (
                    <span key={s} className="rounded-full border border-white/15 px-4 py-1.5 text-[13px] text-mist">
                      {s === "X" ? "[ X ]" : `[ ${s} ]`}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>

        {/* What can we help with */}
        <Reveal className="mt-14 text-center">
          <h2 className="font-display text-2xl font-bold text-paper">WHAT CAN WE HELP WITH?</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {HELP_CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.07}>
                <a href={c.href} className="panel group flex h-full flex-col items-center rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-electric/40">
                  <Icon size={26} className="text-ice" aria-hidden="true" />
                  <h3 className="font-display mt-4 text-base font-bold tracking-[0.1em] text-paper">{c.title}</h3>
                  <p className="mt-2 text-sm text-mist">{c.copy}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ice">
                    Contact <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </main>
  );
}

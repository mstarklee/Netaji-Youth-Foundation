import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import MarqueeBar from "@/components/MarqueeBar";
import Reveal from "@/components/Reveal";
import StickerBadge from "@/components/StickerBadge";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Netaji Youth Foundation in Vedaranyam, Tamil Nadu. We welcome parents, trainers, schools, and community members.",
};

const CONTACT_BLOCKS = [
  {
    icon: MapPin,
    label: "Location",
    body: "Vedaranyam, Nagai district, Tamil Nadu, India",
    tint: "volt" as const,
  },
  {
    icon: Mail,
    label: "Email",
    body: "hello@netajiyouthfoundation.org",
    href: "mailto:hello@netajiyouthfoundation.org",
    tint: "orange" as const,
  },
  {
    icon: Phone,
    label: "Phone",
    body: "+91-XXXXXXXXXX",
    tint: "volt" as const,
  },
  {
    icon: Clock,
    label: "Timing",
    body: "Monday – Saturday | 9:00 AM – 6:00 PM",
    tint: "orange" as const,
  },
];

const TINT_BG: Record<"volt" | "orange", string> = {
  volt: "bg-volt text-black",
  orange: "bg-orange text-white",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact Us"
        title="Let's"
        italicWord="connect."
        tint="volt"
        badge="✱ Open to all"
        intro={
          <p>
            We would be glad to hear from parents, trainers, schools, community
            members, and well-wishers who want to connect with Netaji Youth
            Foundation.
          </p>
        }
      />

      <MarqueeBar
        items={[
          "PARENTS.",
          "TRAINERS.",
          "SCHOOLS.",
          "COMMUNITY.",
          "WELL-WISHERS.",
        ]}
        variant="volt"
      />

      {/* ── Contact info grid ─────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-orange" />
              <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                Contact Info
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-extrabold text-black uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              How to <br />
              <span className="font-hero italic">reach us.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {CONTACT_BLOCKS.map((block, i) => {
              const Icon = block.icon;
              const cardClasses = `block h-full border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#111111] ${
                block.href
                  ? "hover:shadow-[12px_12px_0_0_#FF5C00] transition-all"
                  : ""
              }`;
              const inner = (
                <>
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center border-2 border-black mb-5 ${TINT_BG[block.tint]}`}
                  >
                    <Icon size={20} strokeWidth={2.25} />
                  </span>
                  <p className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-orange">
                    {block.label}
                  </p>
                  <p className="mt-2 font-display font-extrabold uppercase text-base text-black leading-tight break-words">
                    {block.body}
                  </p>
                </>
              );
              return (
                <Reveal key={block.label} delay={i * 0.07}>
                  {block.href ? (
                    <a href={block.href} className={cardClasses}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cardClasses}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact form ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-black" />
                  <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-black">
                    Send a Message
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display font-extrabold uppercase text-black text-4xl md:text-5xl leading-[0.95] tracking-tight">
                  Have a <br />
                  <span className="font-hero italic text-orange">
                    question?
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="font-body text-neutral-600 text-base leading-relaxed max-w-sm">
                  Share what you have in mind. Whether it&apos;s about programs,
                  partnerships, or simply learning more — we are happy to talk.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <StickerBadge variant="volt" rotate={-3} size="lg">
                  ❤ We reply personally
                </StickerBadge>
              </Reveal>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Map ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={18} className="text-orange" strokeWidth={2.25} />
              <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                Find Us
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-extrabold text-black uppercase text-4xl md:text-6xl leading-[0.95] tracking-tight">
              Vedaranyam, <br />
              <span className="font-hero italic">Nagai district.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative mt-12 h-[420px] md:h-[520px] border-4 border-black overflow-hidden shadow-[12px_12px_0_0_#111111] bg-white">
              <iframe
                title="Netaji Youth Foundation — Vedaranyam location"
                src="https://maps.google.com/maps?q=10.392436,79.848738&hl=en&z=14&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href="https://maps.app.goo.gl/6rTJnPsLcy9wKS6e6"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-black px-3 py-2 font-display font-bold uppercase text-[10px] tracking-[0.3em] text-white hover:bg-orange hover:text-black transition-colors"
              >
                <MapPin size={12} strokeWidth={2.5} />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

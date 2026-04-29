import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
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
  },
  {
    icon: Mail,
    label: "Email",
    body: "hello@netajiyouthfoundation.org",
    href: "mailto:hello@netajiyouthfoundation.org",
  },
  {
    icon: Phone,
    label: "Phone",
    body: "+91-XXXXXXXXXX",
  },
  {
    icon: Clock,
    label: "Timing",
    body: "Monday – Saturday | 9:00 AM – 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact Us"
        title="Let's"
        italicWord="connect."
        tint="volt"
        intro={
          <p>
            We would be glad to hear from parents, trainers, schools, community
            members, and well-wishers who want to connect with Netaji Youth
            Foundation.
          </p>
        }
      />

      {/* ── Contact info grid ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-display font-medium text-[12px] tracking-wide text-orange mb-3">
              Contact Info
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-black text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
              How to{" "}
              <span className="font-hero italic">reach us.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CONTACT_BLOCKS.map((block, i) => {
              const Icon = block.icon;
              const inner = (
                <>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 mb-4">
                    <Icon size={16} strokeWidth={1.5} className="text-neutral-600" />
                  </span>
                  <p className="font-display font-medium text-[12px] tracking-wide text-orange">
                    {block.label}
                  </p>
                  <p className="mt-1.5 font-display font-semibold text-[14px] text-black leading-snug break-words">
                    {block.body}
                  </p>
                </>
              );
              return (
                <Reveal key={block.label} delay={i * 0.05}>
                  {block.href ? (
                    <a
                      href={block.href}
                      className="block h-full bg-white border border-neutral-200 rounded-sm p-5 hover:border-neutral-400 transition-colors"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full bg-white border border-neutral-200 rounded-sm p-5">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact form ──────────────────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <Reveal>
                <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-3">
                  Send a Message
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display font-bold text-black text-3xl md:text-4xl leading-[1.1] tracking-tight">
                  Have a{" "}
                  <span className="font-hero italic text-orange">question?</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="font-body text-neutral-500 text-[15px] leading-relaxed max-w-sm">
                  Share what you have in mind. Whether it&apos;s about programs,
                  partnerships, or simply learning more — we are happy to talk.
                </p>
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
      <section className="bg-white py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={15} className="text-orange" strokeWidth={1.5} />
              <p className="font-display font-medium text-[12px] tracking-wide text-orange">
                Find Us
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-black text-3xl md:text-4xl leading-[1.1] tracking-tight">
              Vedaranyam,{" "}
              <span className="font-hero italic">Nagai district.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative mt-10 h-[380px] md:h-[460px] overflow-hidden rounded-sm bg-neutral-100">
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
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 font-display font-semibold text-[11px] tracking-wide text-white hover:bg-orange transition-colors"
              >
                <MapPin size={11} strokeWidth={1.5} />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  ClipboardCheck,
  HandHeart,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import MarqueeBar from "@/components/MarqueeBar";
import Reveal from "@/components/Reveal";
import StickerBadge from "@/components/StickerBadge";
import TrainerForm from "./TrainerForm";

export const metadata: Metadata = {
  title: "Become a Trainer",
  description:
    "Netaji Youth Foundation is hiring committed part-time trainers. This is a paid role focused on rural child development.",
};

const LOOKING_FOR = [
  { icon: ClipboardCheck, text: "Responsible and punctual" },
  { icon: Users, text: "Good with children" },
  { icon: ShieldCheck, text: "Committed to discipline and consistency" },
  { icon: UserCheck, text: "Able to guide and encourage students" },
  { icon: Sparkles, text: "Interested in sports, fitness, chess, or child development" },
  { icon: HandHeart, text: "Willing to work in rural community environments" },
];

const ROLE_AREAS = [
  "Fitness training",
  "Volleyball",
  "Kabaddi",
  "Soccer",
  "Chess training",
  "Basic education support",
  "Discipline and child engagement",
];

const EXPECTATIONS = [
  "Run sessions on time",
  "Maintain attendance records",
  "Support safe and respectful environment",
  "Encourage girls participation",
  "Share student progress updates",
  "Upload or share activity photos when needed",
  "Communicate clearly with coordinator/admin",
];

export default function BecomeATrainerPage() {
  return (
    <>
      <PageHero
        kicker="Become a Trainer"
        title="Lead the next"
        italicWord="generation."
        tint="orange"
        badge="◉ Paid · Part-time"
        intro={
          <>
            <p>
              Netaji Youth Foundation is looking for committed part-time
              trainers who want to help children grow through discipline,
              fitness, sports, learning, and encouragement.
            </p>
            <p>
              This is{" "}
              <strong className="text-white font-bold">
                not a volunteer role
              </strong>
              . We are building a reliable, community-based model with paid
              trainers.
            </p>
          </>
        }
      />

      <MarqueeBar
        items={[
          "PAID ROLE.",
          "PART TIME.",
          "RURAL FIRST.",
          "STRUCTURED.",
          "CONSISTENT.",
        ]}
        variant="orange"
      />

      {/* ── Who We're Looking For ─────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-orange" />
                <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                  Who We&apos;re Looking For
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-extrabold text-black uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                Reliable. <br />
                <span className="font-hero italic text-orange">Caring.</span>{" "}
                <br />
                Consistent.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 font-body text-neutral-600 text-lg leading-relaxed max-w-md">
                We are seeking trainers who show up for children, build trust
                with families, and help create a calm, disciplined environment.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LOOKING_FOR.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.text} delay={i * 0.06}>
                    <li className="border-2 border-black bg-white p-5 h-full flex items-start gap-4">
                      <span
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center border-2 border-black ${
                          i % 2 === 0
                            ? "bg-volt text-black"
                            : "bg-black text-volt"
                        }`}
                      >
                        <Icon size={18} strokeWidth={2.25} />
                      </span>
                      <span className="font-body text-base text-black leading-snug pt-1">
                        {item.text}
                      </span>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <MarqueeBar
        items={["TRAIN.", "GUIDE.", "PROTECT.", "INSPIRE.", "REPEAT."]}
        variant="black"
        reverse
        speed={28}
      />

      {/* ── Role Areas + Expectations ─────────────────────────── */}
      <section className="bg-gray-50 py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Role areas */}
          <div className="border-4 border-black bg-volt p-8 md:p-10 shadow-[10px_10px_0_0_#111111]">
            <Reveal>
              <p className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-black">
                Trainer Role Areas
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="mt-3 font-display font-extrabold uppercase text-3xl md:text-4xl text-black leading-[0.95] tracking-tight">
                Where you might <br />
                <span className="font-hero italic">work.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 font-body text-black/80 text-base leading-relaxed">
                Depending on need, trainers may support:
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {ROLE_AREAS.map((area) => (
                  <li
                    key={area}
                    className="inline-flex items-center border-2 border-black bg-white px-4 py-2 font-display font-bold uppercase text-xs tracking-widest text-black"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Expectations */}
          <div className="border-4 border-black bg-black text-white p-8 md:p-10 shadow-[10px_10px_0_0_#FF5C00]">
            <Reveal>
              <p className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-volt">
                Trainer Expectations
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="mt-3 font-display font-extrabold uppercase text-3xl md:text-4xl text-white leading-[0.95] tracking-tight">
                What we ask <br />
                <span className="font-hero italic text-volt">of you.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-4">
                {EXPECTATIONS.map((exp) => (
                  <li
                    key={exp}
                    className="flex items-start gap-3 font-body text-white/85 text-base leading-snug"
                  >
                    <CheckCircle2
                      size={20}
                      strokeWidth={2.25}
                      className="text-volt shrink-0 mt-0.5"
                    />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Application Form ──────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-black" />
                  <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-black">
                    Application
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display font-extrabold uppercase text-black text-4xl md:text-5xl leading-[0.95] tracking-tight">
                  Apply as a <br />
                  <span className="font-hero italic text-orange">trainer.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="font-body text-neutral-600 text-base leading-relaxed max-w-sm">
                  Tell us about yourself, your background, and what draws you to
                  the work we do with rural children.
                </p>
              </Reveal>

              <Reveal rotate={-3}>
                <div className="relative aspect-[4/5] w-full max-w-xs border-4 border-black overflow-hidden shadow-[10px_10px_0_0_#D7F61D] bg-neutral-900">
                  <Image
                    src="/images/focus/leadership.png"
                    alt="Trainers guiding rural children"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 30vw"
                  />
                  <div className="absolute bottom-4 left-4 z-10">
                    <StickerBadge variant="orange" rotate={-4} size="sm">
                      ◉ Paid role
                    </StickerBadge>
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <TrainerForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

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
import Reveal from "@/components/Reveal";
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
        intro={
          <>
            <p>
              Netaji Youth Foundation is looking for committed part-time
              trainers who want to help children grow through discipline,
              fitness, sports, learning, and encouragement.
            </p>
            <p>
              This is{" "}
              <strong className="text-white font-medium">
                not a volunteer role
              </strong>
              . We are building a reliable, community-based model with paid
              trainers.
            </p>
          </>
        }
      />

      {/* ── Who We're Looking For ─────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-display font-medium text-[12px] tracking-wide text-orange mb-3">
                Who We&apos;re Looking For
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-black text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
                Reliable.{" "}
                <span className="font-hero italic text-orange">Caring.</span>{" "}
                Consistent.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 font-body text-neutral-500 text-[15px] leading-relaxed max-w-md">
                We are seeking trainers who show up for children, build trust
                with families, and help create a calm, disciplined environment.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LOOKING_FOR.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.text} delay={i * 0.05}>
                    <li className="bg-white border border-neutral-200 rounded-sm p-5 h-full flex items-start gap-3.5">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                        <Icon size={16} strokeWidth={1.5} className="text-neutral-600" />
                      </span>
                      <span className="font-body text-[15px] text-black leading-snug pt-1.5">
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

      {/* ── Role Areas + Expectations ─────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Role areas */}
          <div className="bg-white border border-neutral-200 rounded-sm p-7 md:p-9">
            <Reveal>
              <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-1.5">
                Trainer Role Areas
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display font-bold text-2xl md:text-[28px] text-black leading-tight tracking-tight">
                Where you might{" "}
                <span className="font-hero italic">work.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 font-body text-neutral-500 text-[15px] leading-relaxed">
                Depending on need, trainers may support:
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <ul className="mt-5 flex flex-wrap gap-2">
                {ROLE_AREAS.map((area) => (
                  <li
                    key={area}
                    className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 font-display font-medium text-[11px] tracking-wide text-neutral-600"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Expectations */}
          <div className="bg-black text-white rounded-sm p-7 md:p-9">
            <Reveal>
              <p className="font-display font-medium text-[12px] tracking-wide text-volt mb-1.5">
                Trainer Expectations
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display font-bold text-2xl md:text-[28px] text-white leading-tight tracking-tight">
                What we ask{" "}
                <span className="font-hero italic text-volt">of you.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-6 space-y-3">
                {EXPECTATIONS.map((exp) => (
                  <li
                    key={exp}
                    className="flex items-start gap-2.5 font-body text-white/70 text-[15px] leading-snug"
                  >
                    <CheckCircle2
                      size={16}
                      strokeWidth={1.5}
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
      <section className="bg-white py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <Reveal>
                <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-3">
                  Application
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display font-bold text-black text-3xl md:text-4xl leading-[1.1] tracking-tight">
                  Apply as a{" "}
                  <span className="font-hero italic text-orange">trainer.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="font-body text-neutral-500 text-[15px] leading-relaxed max-w-sm">
                  Tell us about yourself, your background, and what draws you to
                  the work we do with rural children.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm bg-neutral-900">
                  <Image
                    src="/images/focus/leadership.png"
                    alt="Trainers guiding rural children"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 30vw"
                  />
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

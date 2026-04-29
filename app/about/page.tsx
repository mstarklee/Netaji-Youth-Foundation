import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Eye, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Netaji Youth Foundation is a nonprofit dedicated to the development of rural children through programs that strengthen the mind, body, and character.",
};

const VALUES = [
  "Discipline",
  "Equality",
  "Opportunity",
  "Respect",
  "Leadership",
  "Consistency",
  "Community upliftment",
];

const MODEL_POINTS = [
  "Free participation for all children",
  "Part-time paid trainers",
  "Focus on rural communities",
  "Tamil + English communication",
  "Parent visibility and trust",
  "Equal encouragement for girls",
  "Measurable progress over time",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Us"
        title="About Netaji Youth"
        italicWord="Foundation"
        tint="volt"
        intro={
          <>
            <p>
              Netaji Youth Foundation is a nonprofit organization dedicated to
              the development of rural children through programs that strengthen
              the mind, body, and character.
            </p>
            <p>
              Our approach combines structured physical activity, sports, chess,
              leadership habits, education support, and health awareness — all
              offered{" "}
              <strong className="text-white font-medium">free of cost</strong> to
              children.
            </p>
          </>
        }
      />

      {/* ── Mission · Vision · Values ─────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-8">
              Our Foundation
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Mission */}
            <Reveal delay={0.05}>
              <article className="h-full bg-white border border-neutral-200 rounded-sm p-8 md:p-10">
                <Compass size={24} className="text-orange mb-5" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-2xl md:text-[28px] text-black leading-tight tracking-tight">
                  Our Mission.
                </h2>
                <p className="mt-5 font-body text-neutral-500 text-[15px] leading-relaxed">
                  To empower rural children through free, structured programs
                  that develop physical fitness, mental sharpness, discipline,
                  confidence, and leadership.
                </p>
              </article>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.1}>
              <article className="h-full bg-black text-white rounded-sm p-8 md:p-10">
                <Eye size={24} className="text-volt mb-5" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-2xl md:text-[28px] text-white leading-tight tracking-tight">
                  Our Vision.
                </h2>
                <p className="mt-5 font-body text-white/50 text-[15px] leading-relaxed">
                  To build a strong generation of rural youth who are healthy,
                  focused, responsible, and prepared for life.
                </p>
              </article>
            </Reveal>

            {/* Values */}
            <Reveal delay={0.15}>
              <article className="h-full bg-neutral-50 rounded-sm p-8 md:p-10">
                <Heart size={24} className="text-orange mb-5" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-2xl md:text-[28px] text-black leading-tight tracking-tight">
                  Our Values.
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {VALUES.map((value) => (
                    <li
                      key={value}
                      className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 font-display font-medium text-[11px] tracking-wide text-neutral-600"
                    >
                      {value}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Our Model ───────────────────────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28 lg:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative h-[380px] md:h-[460px]">
            <Reveal className="absolute top-0 left-0 w-[78%] h-[80%] z-10">
              <div className="relative w-full h-full overflow-hidden rounded-sm bg-neutral-900">
                <Image
                  src="/images/focus/leadership.png"
                  alt="Children training with discipline"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 32vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2} className="absolute bottom-0 right-0 w-[55%] h-[50%] z-20">
              <div className="relative w-full h-full overflow-hidden rounded-sm bg-neutral-900 ring-4 ring-white">
                <Image
                  src="/images/focus/education.png"
                  alt="Children studying together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-3">
                Our Model
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-black text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
                Local centers.{" "}
                <span className="text-orange">Long-term</span> impact.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 font-body text-neutral-500 text-[15px] leading-relaxed max-w-xl">
                Netaji Youth Foundation operates through local community-based
                centers where children can participate in structured
                after-school and weekend programs.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-8 font-display font-medium text-[12px] tracking-wide text-orange">
                Current model includes
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MODEL_POINTS.map((point, i) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 font-body text-[15px] text-black"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center font-display font-semibold text-[10px] rounded-full bg-neutral-100 text-neutral-500">
                      {String(i + 1)}
                    </span>
                    <span className="leading-snug pt-0.5">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why This Model Matters ─────────────────────────────── */}
      <section className="bg-black py-20 md:py-28 lg:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-display font-medium text-[12px] tracking-wide text-volt mb-5">
              Why This Model Matters
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-[46px] leading-[1.1] tracking-tight">
              Long-term{" "}
              <span className="font-hero italic text-orange">transformation</span>{" "}
              over one-time activity.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-body text-white/50 text-[15px] leading-relaxed max-w-xl mx-auto">
              Many rural children have raw talent and energy but do not have
              access to structured growth environments. By creating disciplined
              local centers with committed trainers and visible progress
              tracking, we aim to create long-term transformation rather than
              one-time activities.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/programs"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-neutral-200 transition-colors"
              >
                Explore Programs
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/founder-story"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-white/10 transition-colors"
              >
                Read Founder Story
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

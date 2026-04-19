import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Eye, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import MarqueeBar from "@/components/MarqueeBar";
import Reveal from "@/components/Reveal";
import StickerBadge from "@/components/StickerBadge";
import VoltHighlight from "@/components/VoltHighlight";

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
        badge="★ Nonprofit · Free for kids"
        intro={
          <>
            <p>
              Netaji Youth Foundation is a nonprofit organization dedicated to
              the development of rural children through programs that strengthen
              the mind, body, and character.
            </p>
            <p>
              We believe true child development goes beyond academics. A child
              needs physical strength, mental sharpness, discipline, confidence,
              guidance, and the right environment to grow into a capable adult.
            </p>
            <p>
              Our approach combines structured physical activity, sports, chess,
              leadership habits, education support, and health awareness — all
              offered{" "}
              <strong className="text-white font-bold">free of cost</strong> to
              children.
            </p>
          </>
        }
      />

      <MarqueeBar
        items={[
          "MIND.",
          "BODY.",
          "CHARACTER.",
          "DISCIPLINE.",
          "OPPORTUNITY.",
          "EQUALITY.",
        ]}
        variant="volt"
      />

      {/* ── Mission · Vision · Values ─────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-orange" />
              <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                Our Foundation
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Mission */}
            <Reveal delay={0.05}>
              <article className="relative h-full border-4 border-black bg-white p-8 md:p-10 shadow-[10px_10px_0_0_#D7F61D]">
                <Compass
                  size={32}
                  className="text-orange mb-6"
                  strokeWidth={2}
                />
                <h2 className="font-display font-extrabold uppercase text-3xl md:text-4xl text-black leading-[0.95] tracking-tight">
                  Our Mission.
                </h2>
                <p className="mt-6 font-body text-neutral-600 text-base md:text-lg leading-relaxed">
                  To empower rural children through free, structured programs
                  that develop physical fitness, mental sharpness, discipline,
                  confidence, and leadership.
                </p>
              </article>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.15}>
              <article className="relative h-full border-4 border-black bg-black text-white p-8 md:p-10 shadow-[10px_10px_0_0_#FF5C00]">
                <Eye size={32} className="text-volt mb-6" strokeWidth={2} />
                <h2 className="font-display font-extrabold uppercase text-3xl md:text-4xl text-white leading-[0.95] tracking-tight">
                  Our Vision.
                </h2>
                <p className="mt-6 font-body text-white/70 text-base md:text-lg leading-relaxed">
                  To build a strong generation of rural youth who are healthy,
                  focused, responsible, and prepared for life.
                </p>
              </article>
            </Reveal>

            {/* Values */}
            <Reveal delay={0.25}>
              <article className="relative h-full border-4 border-black bg-volt p-8 md:p-10 shadow-[10px_10px_0_0_#111111]">
                <Heart size={32} className="text-black mb-6" strokeWidth={2} />
                <h2 className="font-display font-extrabold uppercase text-3xl md:text-4xl text-black leading-[0.95] tracking-tight">
                  Our Values.
                </h2>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {VALUES.map((value) => (
                    <li
                      key={value}
                      className="inline-flex items-center border-2 border-black bg-white px-3 py-1.5 font-display font-bold uppercase text-[11px] tracking-widest text-black"
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

      <MarqueeBar
        items={[
          "STRUCTURED.",
          "LOCAL.",
          "ACCOUNTABLE.",
          "FREE.",
          "FOR EVERY CHILD.",
        ]}
        variant="black"
        reverse
        speed={28}
      />

      {/* ── Our Model ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-24 md:py-32 lg:py-40 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative h-[420px] md:h-[520px]">
            <Reveal rotate={-3} className="absolute top-0 left-0 w-[78%] h-[80%] z-10">
              <div className="relative w-full h-full border-4 border-black overflow-hidden shadow-[12px_12px_0_0_#D7F61D] bg-neutral-900">
                <Image
                  src="/images/focus/leadership.png"
                  alt="Children training with discipline"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 32vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2} rotate={6} className="absolute bottom-0 right-0 w-[55%] h-[50%] z-20">
              <div className="relative w-full h-full border-4 border-black overflow-hidden shadow-[-10px_10px_0_0_#FF5C00] bg-neutral-900">
                <Image
                  src="/images/focus/education.png"
                  alt="Children studying together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </Reveal>
            <div
              className="absolute -top-4 right-6 z-30 float"
              style={{ ["--r" as string]: "10deg" }}
            >
              <StickerBadge variant="orange" rotate={10} size="lg">
                ✱ Local centers
              </StickerBadge>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-black" />
                <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-black">
                  Our Model
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-extrabold text-black uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                Local centers. <br />
                <VoltHighlight color="orange">
                  <span className="text-white">Long-term</span>
                </VoltHighlight>{" "}
                impact.
              </h2>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-8 font-body text-neutral-600 text-lg leading-relaxed max-w-xl">
                Netaji Youth Foundation operates through local community-based
                centers where children can participate in structured
                after-school and weekend programs.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="mt-10 font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                Current model includes
              </p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MODEL_POINTS.map((point, i) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 font-body text-base text-black"
                  >
                    <span
                      className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center font-display font-extrabold text-[11px] border-2 border-black ${
                        i % 2 === 0 ? "bg-volt" : "bg-orange text-white"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
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
      <section className="relative bg-black grain py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute top-10 left-10 font-hero italic text-white/5 text-[200px] leading-none pointer-events-none select-none">
          ?
        </div>
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="font-display font-bold uppercase text-xs tracking-[0.3em] text-volt mb-6">
              Why This Model Matters
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-extrabold text-white uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Long-term <br />
              <span className="font-hero italic text-orange">
                transformation
              </span>{" "}
              <br />
              over one-time activity.
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 font-body text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Many rural children have raw talent and energy but do not have
              access to structured growth environments. By creating disciplined
              local centers with committed trainers and visible progress
              tracking, we aim to create long-term transformation rather than
              one-time activities.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs"
                className="group inline-flex items-center justify-center gap-3 bg-volt text-black px-7 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-volt hover:bg-white hover:border-white transition-colors"
              >
                Explore Programs
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition-transform"
                />
              </Link>
              <Link
                href="/founder-story"
                className="group inline-flex items-center justify-center gap-3 bg-transparent text-white px-7 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                Read Founder Story
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition-transform"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

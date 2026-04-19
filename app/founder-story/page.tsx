import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import MarqueeBar from "@/components/MarqueeBar";
import Reveal from "@/components/Reveal";
import StickerBadge from "@/components/StickerBadge";

export const metadata: Metadata = {
  title: "Founder Story",
  description:
    "From a small village in India to founder and CEO — the personal journey behind Netaji Youth Foundation.",
};

const STORY = [
  "I was born and raised in a small village in India, in a family that often struggled with poverty. There were times when even basic daily needs were difficult. I grew up seeing sacrifice closely — including moments when family members skipped meals because there was not enough food.",
  "I studied in Tamil medium during school and later joined an English-medium engineering college. The transition was not easy. I struggled with language and confidence, but I kept pushing myself. After graduation, I faced more setbacks, including repeated job interview failures. But I did not give up.",
  "With persistence, hard work, and belief in education, I entered the IT industry, built my career, and eventually became a founder and CEO.",
  "As life progressed, one truth stayed with me: children growing up in villages have talent, strength, and potential — but they need opportunity, structure, encouragement, and belief.",
  "Netaji Youth Foundation is my way of returning to my roots and helping build that opportunity for the next generation.",
  "This foundation is not just about programs. It is about giving rural children what many of them are missing early in life: confidence, discipline, strength, guidance, and a chance to dream bigger.",
  "I want children in villages like the one I came from to believe that their background does not limit their future.",
];

const MILESTONES = [
  { kicker: "Roots", text: "Born and raised in a small village in India." },
  { kicker: "School", text: "Studied in Tamil medium through schooling." },
  { kicker: "College", text: "Joined an English-medium engineering college." },
  { kicker: "Career", text: "Entered the IT industry after early setbacks." },
  { kicker: "Founder", text: "Built a career and became a founder and CEO." },
  { kicker: "Return", text: "Founded Netaji Youth Foundation to give back." },
];

export default function FounderStoryPage() {
  return (
    <>
      <PageHero
        kicker="Founder Story"
        title="From village"
        italicWord="to giving back"
        tint="orange"
        badge="❝ A personal journey"
        intro={
          <p>
            A story of poverty, persistence, education, and the choice to return
            home — to help rural children believe their background does not
            limit their future.
          </p>
        }
      />

      <MarqueeBar
        items={[
          "BORN IN A VILLAGE.",
          "BUILT A CAREER.",
          "RETURNED HOME.",
          "GIVING BACK.",
        ]}
        variant="orange"
      />

      {/* ── Story body + image rail ────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 lg:py-40 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky image column */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-6">
              <Reveal rotate={-2}>
                <div className="relative aspect-[4/5] w-full border-4 border-black overflow-hidden shadow-[12px_12px_0_0_#FF5C00] bg-neutral-900">
                  <Image
                    src="/images/childrenfuture.jpg"
                    alt="Children's future — Vedaranyam"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 40vw"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between font-display font-bold uppercase text-[10px] tracking-[0.3em] text-white">
                    <span className="bg-black px-3 py-1.5">Roots</span>
                    <span className="bg-volt text-black px-3 py-1.5">
                      Vedaranyam
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="border-4 border-black bg-volt p-6 shadow-[8px_8px_0_0_#111111]">
                  <p className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-black">
                    Founder
                  </p>
                  <p className="mt-2 font-display font-extrabold uppercase text-2xl text-black leading-tight">
                    From village classrooms to a career as a founder &amp; CEO.
                  </p>
                </div>
              </Reveal>
            </div>
          </aside>

          {/* Story */}
          <article className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-orange" />
                <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                  In His Own Words
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display font-extrabold text-black uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-10">
                The journey <br />
                <span className="font-hero italic text-orange">
                  shaped the mission.
                </span>
              </h2>
            </Reveal>

            <div className="space-y-7">
              {STORY.map((para, i) => (
                <Reveal key={i} delay={0.05 + i * 0.04}>
                  <p
                    className={`font-body text-lg md:text-xl leading-[1.7] ${
                      i === 0
                        ? "text-black first-letter:font-hero first-letter:italic first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-orange"
                        : "text-neutral-700"
                    }`}
                  >
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* ── Milestone strip ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-black" />
              <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-black">
                The Path
              </span>
            </div>
          </Reveal>

          <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.kicker} delay={i * 0.06}>
                <li className="border-2 border-black bg-white p-5 h-full shadow-[6px_6px_0_0_#111111]">
                  <span className="font-hero italic text-orange text-3xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-display font-extrabold uppercase text-xs tracking-[0.25em] text-black">
                    {m.kicker}
                  </p>
                  <p className="mt-2 font-body text-sm text-neutral-600 leading-snug">
                    {m.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Founder Note ────────────────────────────────────────── */}
      <section className="relative bg-black grain py-24 md:py-32 lg:py-40 px-6 overflow-hidden">
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="h-px w-10 bg-volt" />
              <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-volt">
                Founder Note
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative border-4 border-volt bg-black p-10 md:p-14 shadow-[12px_12px_0_0_#D7F61D]">
              <Quote
                size={56}
                strokeWidth={2}
                className="text-volt mb-8"
              />
              <p className="font-display font-extrabold text-white uppercase text-2xl md:text-3xl lg:text-4xl leading-[1.15] tracking-tight">
                If one child gains{" "}
                <span className="text-volt">confidence</span>, one girl chooses
                to lead, one boy becomes more disciplined, one family starts
                believing in education more strongly, or one village sees{" "}
                <span className="text-orange">hope</span> through its children —
                this effort is{" "}
                <span className="font-hero italic">worth it.</span>
              </p>
              <div className="mt-10 pt-6 border-t border-white/20 flex items-center justify-between">
                <p className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-white/60">
                  — Founder, Netaji Youth Foundation
                </p>
                <StickerBadge variant="orange" rotate={-3} size="sm">
                  ❤ Vedaranyam
                </StickerBadge>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-3 bg-volt text-black px-7 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-volt hover:bg-white hover:border-white transition-colors"
              >
                Register a Child
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition-transform"
                />
              </Link>
              <Link
                href="/become-a-trainer"
                className="group inline-flex items-center justify-center gap-3 bg-transparent text-white px-7 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                Become a Trainer
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

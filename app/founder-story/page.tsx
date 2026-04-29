import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

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
        intro={
          <p>
            A story of poverty, persistence, education, and the choice to return
            home — to help rural children believe their background does not
            limit their future.
          </p>
        }
      />

      {/* ── Story body + image rail ────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky image column */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-5">
              <Reveal>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-900">
                  <Image
                    src="/images/childrenfuture.jpg"
                    alt="Children's future — Vedaranyam"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 40vw"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-neutral-50 rounded-sm p-6">
                  <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400">
                    Founder
                  </p>
                  <p className="mt-2 font-display font-bold text-xl text-black leading-tight tracking-tight">
                    From village classrooms to a career as a founder &amp; CEO.
                  </p>
                </div>
              </Reveal>
            </div>
          </aside>

          {/* Story */}
          <article className="lg:col-span-7">
            <Reveal>
              <p className="font-display font-medium text-[12px] tracking-wide text-orange mb-3">
                In His Own Words
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display font-bold text-black text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight mb-10">
                The journey{" "}
                <span className="font-hero italic text-orange">
                  shaped the mission.
                </span>
              </h2>
            </Reveal>

            <div className="space-y-6">
              {STORY.map((para, i) => (
                <Reveal key={i} delay={0.05 + i * 0.03}>
                  <p
                    className={`font-body text-base md:text-[17px] leading-[1.75] ${
                      i === 0
                        ? "text-black first-letter:font-hero first-letter:italic first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-orange"
                        : "text-neutral-600"
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
      <section className="bg-neutral-50 py-16 md:py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-8">
              The Path
            </p>
          </Reveal>

          <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.kicker} delay={i * 0.05}>
                <li className="bg-white border border-neutral-200 rounded-sm p-5 h-full">
                  <span className="font-hero italic text-orange text-2xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-display font-semibold text-[12px] tracking-wide text-black">
                    {m.kicker}
                  </p>
                  <p className="mt-1.5 font-body text-[13px] text-neutral-500 leading-snug">
                    {m.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Founder Note ────────────────────────────────────────── */}
      <section className="bg-black py-20 md:py-28 lg:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-display font-medium text-[12px] tracking-wide text-volt mb-5 text-center">
              Founder Note
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative bg-neutral-900 rounded-sm p-8 md:p-12">
              <Quote size={36} strokeWidth={1.5} className="text-volt/40 mb-6" />
              <p className="font-display font-bold text-white text-xl md:text-2xl lg:text-[28px] leading-[1.3] tracking-tight">
                If one child gains{" "}
                <span className="text-volt">confidence</span>, one girl chooses
                to lead, one boy becomes more disciplined, one family starts
                believing in education more strongly, or one village sees{" "}
                <span className="text-orange">hope</span> through its children —
                this effort is{" "}
                <span className="font-hero italic">worth it.</span>
              </p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-display font-medium text-[12px] tracking-wide text-white/40">
                  — Founder, Netaji Youth Foundation
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-neutral-200 transition-colors"
              >
                Register a Child
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/become-a-trainer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-white/10 transition-colors"
              >
                Become a Trainer
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

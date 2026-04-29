import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  ImageIcon,
  PlayCircle,
  Target,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Impact & Updates",
  description:
    "Progress, milestones, activities, and stories of Netaji Youth Foundation as we grow our work with rural children in Tamil Nadu.",
};

const EARLY_GOALS = [
  { value: "300", label: "Children", sub: "Reach in Year 1" },
  { value: "1", label: "Center", sub: "Strong & disciplined in Vedaranyam" },
  { value: "50%", label: "Girls", sub: "Encourage strong participation" },
  { value: "5+", label: "Programs", sub: "Built to expand to more villages" },
];

const MEASURED = [
  "Children enrolled",
  "Attendance consistency",
  "Girls participation",
  "Program hours delivered",
  "Trainer engagement",
  "Parent feedback",
  "Child progress stories",
];

const STORY_CARDS = [
  {
    tag: "Launch",
    title: "First training sessions begin",
    body: "Our first cohort of children steps onto the ground in Vedaranyam — fitness drills, sports orientation, and discipline routines.",
    image: "/images/focus/fitness-sports.jpg",
  },
  {
    tag: "Milestone",
    title: "Chess practice gathers momentum",
    body: "Children learn the rules, practice patience and strategy, and begin internal matches every week.",
    image: "/images/focus/mental-Strength.png",
  },
  {
    tag: "Sports Day",
    title: "First sports day highlights",
    body: "Volleyball, kabaddi, and athletics — energy, teamwork, and a glimpse of the future.",
    image: "/images/kabadi.webp",
  },
  {
    tag: "Community",
    title: "Parent & community meetings",
    body: "Open conversations about goals, safety, progress visibility, and how families can stay engaged.",
    image: "/images/childrenfuture.jpg",
  },
  {
    tag: "Girls Lead",
    title: "Girls participation stories",
    body: "Stories of confidence, courage, and leadership from the girls of Vedaranyam.",
    image: "/images/women/empowerment.png",
  },
  {
    tag: "Health",
    title: "Health awareness events",
    body: "Practical guidance on nutrition, hydration, hygiene, and rest for growing children.",
    image: "/images/focus/nutrition.png",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        kicker="Impact & Updates"
        title="Building proof,"
        italicWord="one child at a time."
        tint="orange"
        intro={
          <p>
            This page shares the progress, milestones, activities, and stories
            of Netaji Youth Foundation as we grow our work with children in
            rural Tamil Nadu.
          </p>
        }
      />

      {/* ── Early Goals ───────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <Target size={15} className="text-orange" strokeWidth={1.5} />
              <p className="font-display font-medium text-[12px] tracking-wide text-orange">
                Our Early Goals
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-black text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
              Where we&apos;re{" "}
              <span className="font-hero italic">aiming.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {EARLY_GOALS.map((g, i) => (
              <Reveal key={g.label} delay={i * 0.06}>
                <div
                  className={`rounded-sm p-6 md:p-7 h-full ${
                    i % 2 === 0
                      ? "bg-neutral-50"
                      : "bg-black text-white"
                  }`}
                >
                  <p
                    className={`font-hero italic text-5xl md:text-6xl leading-none ${
                      i % 2 === 0 ? "text-black" : "text-volt"
                    }`}
                  >
                    {g.value}
                  </p>
                  <div className={`mt-4 pt-3 border-t ${i % 2 === 0 ? "border-neutral-200" : "border-white/15"}`}>
                    <p className={`font-display font-semibold text-[13px] tracking-wide ${i % 2 === 0 ? "text-black" : "text-white"}`}>
                      {g.label}
                    </p>
                    <p className={`mt-0.5 font-body text-[13px] ${i % 2 === 0 ? "text-neutral-400" : "text-white/40"}`}>
                      {g.sub}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Measure ───────────────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-3">
                What We Measure
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-black text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
                Honest numbers.{" "}
                <span className="font-hero italic text-orange">Real stories.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 font-body text-neutral-500 text-[15px] leading-relaxed max-w-xl">
                We believe in measurable progress and visible accountability —
                so families, communities, and partners can trust the work.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MEASURED.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 bg-white border border-neutral-200 rounded-sm px-4 py-3.5"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 font-display font-semibold text-[10px] text-neutral-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display font-medium text-[13px] tracking-wide text-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Story / Update Cards ──────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
            <Reveal>
              <div>
                <p className="font-display font-medium text-[12px] tracking-wide text-orange mb-3">
                  Stories &amp; Updates
                </p>
                <h2 className="font-display font-bold text-black text-3xl md:text-4xl leading-[1.1] tracking-tight">
                  From the{" "}
                  <span className="font-hero italic">ground.</span>
                </h2>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {STORY_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.05}>
                <article className="group flex h-full flex-col bg-white border border-neutral-200 rounded-sm overflow-hidden hover:border-neutral-400 transition-colors">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-4 left-4 z-10 inline-flex items-center rounded-full bg-black/80 px-3 py-1 font-display font-medium text-[10px] tracking-wide text-white">
                      {card.tag}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-display font-bold text-base text-black leading-tight tracking-tight">
                      {card.title}.
                    </h3>
                    <p className="mt-2 font-body text-neutral-500 text-[13px] leading-relaxed flex-1">
                      {card.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo / Video Placeholders ────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <Camera size={15} className="text-orange" strokeWidth={1.5} />
              <p className="font-display font-medium text-[12px] tracking-wide text-orange">
                Highlights
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-black text-3xl md:text-4xl leading-[1.1] tracking-tight">
              Photo &amp; video{" "}
              <span className="font-hero italic">coming soon.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Reveal delay={0.15}>
              <div className="relative aspect-[16/10] border border-dashed border-neutral-300 bg-white rounded-sm flex flex-col items-center justify-center text-center p-8">
                <ImageIcon size={36} className="text-neutral-300 mb-3" strokeWidth={1.5} />
                <p className="font-display font-bold text-lg text-black tracking-tight">
                  Photo gallery
                </p>
                <p className="mt-2 font-body text-neutral-400 text-[13px] max-w-sm">
                  Field photos from training sessions, sports days, and
                  community events will appear here.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[16/10] bg-black text-white rounded-sm flex flex-col items-center justify-center text-center p-8">
                <PlayCircle size={36} className="text-volt/50 mb-3" strokeWidth={1.5} />
                <p className="font-display font-bold text-lg text-white tracking-tight">
                  Video highlights
                </p>
                <p className="mt-2 font-body text-white/40 text-[13px] max-w-sm">
                  Short clips and stories will be posted here as the foundation
                  grows.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-neutral-800 transition-colors"
              >
                Register a Child
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 text-black px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                Get In Touch
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

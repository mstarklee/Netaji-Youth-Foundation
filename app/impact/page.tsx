import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  ImageIcon,
  PlayCircle,
  Target,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import MarqueeBar from "@/components/MarqueeBar";
import Reveal from "@/components/Reveal";
import StickerBadge from "@/components/StickerBadge";

export const metadata: Metadata = {
  title: "Impact & Updates",
  description:
    "Progress, milestones, activities, and stories of Netaji Youth Foundation as we grow our work with rural children in Tamil Nadu.",
};

const EARLY_GOALS = [
  { value: "300", label: "Children", sub: "Reach in Year 1" },
  { value: "1", label: "Center", sub: "Strong & disciplined in Vedaranyam" },
  { value: "♀", label: "Girls", sub: "Encourage strong participation" },
  { value: "∞", label: "Model", sub: "Built to expand to more villages" },
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
        badge="◉ Live & growing"
        intro={
          <p>
            This page shares the progress, milestones, activities, and stories
            of Netaji Youth Foundation as we grow our work with children in
            rural Tamil Nadu.
          </p>
        }
      />

      <MarqueeBar
        items={[
          "ATTEND.",
          "PRACTICE.",
          "PROGRESS.",
          "REPEAT.",
          "EVERY VILLAGE.",
        ]}
        variant="orange"
      />

      {/* ── Early Goals ───────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <Target size={18} className="text-orange" strokeWidth={2.25} />
              <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                Our Early Goals
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-extrabold text-black uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Where we&apos;re <br />
              <span className="font-hero italic">aiming.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {EARLY_GOALS.map((g, i) => (
              <Reveal key={g.label} delay={i * 0.08}>
                <div
                  className={`relative border-4 border-black p-6 md:p-8 h-full ${
                    i % 2 === 0
                      ? "bg-volt shadow-[8px_8px_0_0_#111111]"
                      : "bg-black text-white shadow-[8px_8px_0_0_#FF5C00]"
                  }`}
                >
                  <p
                    className={`font-hero italic text-7xl md:text-8xl leading-none ${
                      i % 2 === 0 ? "text-black" : "text-volt"
                    }`}
                  >
                    {g.value}
                  </p>
                  <div
                    className={`mt-5 pt-4 border-t-2 ${
                      i % 2 === 0 ? "border-black" : "border-white/30"
                    }`}
                  >
                    <p
                      className={`font-display font-extrabold uppercase text-sm tracking-widest ${
                        i % 2 === 0 ? "text-black" : "text-white"
                      }`}
                    >
                      {g.label}
                    </p>
                    <p
                      className={`mt-1 font-body text-sm ${
                        i % 2 === 0 ? "text-black/70" : "text-white/60"
                      }`}
                    >
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
      <section className="bg-gray-50 py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-black" />
                <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-black">
                  What We Measure
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-extrabold text-black uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                Honest numbers. <br />
                <span className="font-hero italic text-orange">
                  Real stories.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 font-body text-neutral-600 text-lg leading-relaxed max-w-xl">
                We believe in measurable progress and visible accountability —
                so families, communities, and partners can trust the work.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MEASURED.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 border-2 border-black bg-white px-4 py-4"
                  >
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center font-display font-extrabold text-sm border-2 border-black ${
                        i % 2 === 0 ? "bg-volt text-black" : "bg-orange text-white"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display font-bold uppercase text-sm tracking-wide text-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <MarqueeBar
        items={[
          "STORIES.",
          "MILESTONES.",
          "MOMENTS.",
          "PROGRESS.",
        ]}
        variant="black"
        reverse
        speed={26}
      />

      {/* ── Story / Update Cards ──────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-10 bg-orange" />
                  <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                    Stories &amp; Updates
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-black uppercase text-4xl md:text-6xl leading-[0.95] tracking-tight">
                  From the <br />
                  <span className="font-hero italic">ground.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <StickerBadge variant="volt" rotate={-3} size="lg">
                ✱ Updates incoming
              </StickerBadge>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {STORY_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <article className="group flex h-full flex-col border-4 border-black bg-white shadow-[8px_8px_0_0_#111111] hover:shadow-[12px_12px_0_0_#D7F61D] transition-all">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b-4 border-black bg-neutral-900">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-4 left-4 z-10 inline-flex items-center bg-black px-3 py-1.5 font-display font-bold uppercase text-[10px] tracking-[0.3em] text-volt">
                      {card.tag}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-display font-extrabold uppercase text-lg md:text-xl text-black leading-tight">
                      {card.title}.
                    </h3>
                    <p className="mt-3 font-body text-neutral-600 text-sm leading-relaxed flex-1">
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
      <section className="bg-gray-50 py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <Camera size={18} className="text-orange" strokeWidth={2.25} />
              <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                Highlights
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-extrabold text-black uppercase text-4xl md:text-6xl leading-[0.95] tracking-tight">
              Photo &amp; video <br />
              <span className="font-hero italic">coming soon.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={0.15}>
              <div className="relative aspect-[16/10] border-4 border-dashed border-black bg-white flex flex-col items-center justify-center text-center p-8">
                <ImageIcon size={48} className="text-black mb-4" strokeWidth={1.5} />
                <p className="font-display font-extrabold uppercase text-2xl text-black">
                  Photo gallery
                </p>
                <p className="mt-2 font-body text-neutral-600 max-w-sm">
                  Field photos from training sessions, sports days, and
                  community events will appear here.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="relative aspect-[16/10] border-4 border-dashed border-black bg-black text-white flex flex-col items-center justify-center text-center p-8">
                <PlayCircle size={48} className="text-volt mb-4" strokeWidth={1.5} />
                <p className="font-display font-extrabold uppercase text-2xl text-white">
                  Video highlights
                </p>
                <p className="mt-2 font-body text-white/70 max-w-sm">
                  Short clips and stories will be posted here as the foundation
                  grows.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.35}>
            <div className="mt-14 flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-3 bg-black text-white px-7 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-black hover:bg-orange hover:text-black hover:border-orange transition-colors"
              >
                Register a Child
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white text-black px-7 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-black hover:bg-volt transition-colors"
              >
                Get In Touch
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

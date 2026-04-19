import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Shield,
  Trophy,
  Brain,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import MarqueeBar from "@/components/MarqueeBar";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Free, structured after-school and weekend programs that help rural children grow in mind, body, and character.",
};

type Program = {
  num: string;
  title: string;
  kicker: string;
  intro: string;
  focus: string[];
  image: string;
  icon: LucideIcon;
  tint: "volt" | "orange" | "black";
};

const PROGRAMS: Program[] = [
  {
    num: "01",
    title: "Physical Fitness",
    kicker: "Body",
    intro:
      "We help children build strength, stamina, flexibility, and healthy routines through structured physical activity.",
    focus: [
      "Warm-up routines",
      "Running drills",
      "Basic strength and conditioning",
      "Stretching and mobility",
      "Discipline through routine practice",
    ],
    image: "/images/focus/fitness-sports.jpg",
    icon: Dumbbell,
    tint: "volt",
  },
  {
    num: "02",
    title: "Sports Development",
    kicker: "Team",
    intro:
      "Sports help children build teamwork, confidence, resilience, and leadership.",
    focus: ["Volleyball", "Kabaddi", "Soccer", "General athletic development"],
    image: "/images/kabadi.webp",
    icon: Trophy,
    tint: "orange",
  },
  {
    num: "03",
    title: "Chess & Mental Growth",
    kicker: "Mind",
    intro:
      "Chess teaches strategy, patience, concentration, planning, and calm decision-making.",
    focus: [
      "Chess basics and practice",
      "Memory exercises",
      "Focus-building activities",
      "Strategic thinking games",
    ],
    image: "/images/focus/mental-Strength.png",
    icon: Brain,
    tint: "black",
  },
  {
    num: "04",
    title: "Education Support",
    kicker: "Learn",
    intro:
      "We encourage children to stay engaged with school and develop learning discipline.",
    focus: [
      "Homework support",
      "Study habits",
      "Encouragement and accountability",
      "Routine and time discipline",
    ],
    image: "/images/focus/education.png",
    icon: GraduationCap,
    tint: "volt",
  },
  {
    num: "05",
    title: "Leadership & Discipline",
    kicker: "Lead",
    intro:
      "Children grow best in a structured environment. We reinforce values that build strong character.",
    focus: [
      "Personal responsibility",
      "Respect for others",
      "Time discipline",
      "Team participation",
      "Positive behavior and confidence",
    ],
    image: "/images/focus/leadership.png",
    icon: Shield,
    tint: "orange",
  },
  {
    num: "06",
    title: "Health & Nutrition Awareness",
    kicker: "Grow",
    intro:
      "Simple guidance can make a big difference in children's health and daily energy.",
    focus: [
      "Basic nutrition awareness",
      "Hydration habits",
      "Rest and recovery awareness",
      "Personal cleanliness and healthy routines",
    ],
    image: "/images/focus/nutrition.png",
    icon: HeartPulse,
    tint: "black",
  },
];

const TINT_BORDER: Record<Program["tint"], string> = {
  volt: "shadow-[12px_12px_0_0_#D7F61D]",
  orange: "shadow-[12px_12px_0_0_#FF5C00]",
  black: "shadow-[12px_12px_0_0_#111111]",
};

const TINT_BADGE: Record<Program["tint"], string> = {
  volt: "bg-volt text-black",
  orange: "bg-orange text-white",
  black: "bg-black text-volt",
};

function ProgramRow({ program, index }: { program: Program; index: number }) {
  const Icon = program.icon;
  const flip = index % 2 === 1;

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div
        className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}
      >
        <Reveal rotate={flip ? 2 : -2}>
          <div
            className={`relative aspect-[5/4] w-full border-4 border-black overflow-hidden bg-neutral-900 ${TINT_BORDER[program.tint]}`}
          >
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <span className="absolute top-5 left-5 z-10 inline-flex items-center bg-black px-3 py-1.5 font-display font-bold uppercase text-[10px] tracking-[0.3em] text-white">
              {program.kicker}
            </span>
            <span className="absolute bottom-5 right-5 z-10 font-hero italic text-white text-6xl leading-none drop-shadow-[3px_3px_0_#111111]">
              {program.num}
            </span>
          </div>
        </Reveal>
      </div>

      <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
        <Reveal delay={0.1}>
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`inline-flex h-10 w-10 items-center justify-center border-2 border-black ${TINT_BADGE[program.tint]}`}
            >
              <Icon size={18} strokeWidth={2.25} />
            </span>
            <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-black">
              Program {program.num}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="font-display font-extrabold uppercase text-black text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            {program.title}.
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-6 font-body text-neutral-600 text-lg leading-relaxed max-w-xl">
            {program.intro}
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="mt-8 font-display font-bold uppercase text-[11px] tracking-[0.3em] text-orange">
            Focus areas
          </p>
          <ul className="mt-4 space-y-2.5">
            {program.focus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-base text-black"
              >
                <span className="mt-2 inline-block h-2 w-2 rotate-45 bg-black shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </article>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        kicker="Our Programs"
        title="Mind. Body."
        italicWord="Character."
        tint="volt"
        badge="✱ Free for every child"
        intro={
          <p>
            Netaji Youth Foundation provides structured after-school and weekend
            programs designed to help rural children grow in mind, body, and
            character.
          </p>
        }
      />

      <MarqueeBar
        items={[
          "FITNESS.",
          "SPORTS.",
          "CHESS.",
          "EDUCATION.",
          "LEADERSHIP.",
          "HEALTH.",
        ]}
        variant="volt"
      />

      {/* ── Programs list ──────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32 lg:py-40 px-6">
        <div className="mx-auto max-w-7xl space-y-24 md:space-y-32 lg:space-y-40">
          {PROGRAMS.map((p, i) => (
            <ProgramRow key={p.num} program={p} index={i} />
          ))}
        </div>
      </section>

      <MarqueeBar
        items={[
          "AFTER SCHOOL.",
          "WEEKENDS.",
          "ON SCHEDULE.",
          "ON DISCIPLINE.",
        ]}
        variant="black"
        reverse
        speed={26}
      />

      {/* ── Schedule ──────────────────────────────────────────── */}
      <section className="bg-gray-50 py-24 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-orange" />
              <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                Program Schedule
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display font-extrabold text-black uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              How we <br />
              <span className="font-hero italic">show up.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={0.15}>
              <div className="border-4 border-black bg-white p-8 shadow-[10px_10px_0_0_#D7F61D] h-full">
                <Clock size={28} strokeWidth={2} className="text-orange mb-5" />
                <p className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-orange mb-2">
                  Weekdays
                </p>
                <h3 className="font-display font-extrabold uppercase text-2xl text-black">
                  After-school sessions
                </h3>
                <p className="mt-3 font-body text-neutral-600 leading-relaxed">
                  Daily structured time slots that work around school hours.
                  Discipline, fitness, education support and chess practice.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="border-4 border-black bg-black text-white p-8 shadow-[10px_10px_0_0_#FF5C00] h-full">
                <CalendarDays
                  size={28}
                  strokeWidth={2}
                  className="text-volt mb-5"
                />
                <p className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-volt mb-2">
                  Weekends
                </p>
                <h3 className="font-display font-extrabold uppercase text-2xl text-white">
                  Sports, chess &amp; enrichment
                </h3>
                <p className="mt-3 font-body text-white/70 leading-relaxed">
                  Longer sessions for sports development, chess tournaments,
                  health awareness, and team-building activities.
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
                href="/become-a-trainer"
                className="group inline-flex items-center justify-center gap-3 bg-white text-black px-7 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-black hover:bg-volt transition-colors"
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

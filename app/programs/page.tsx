import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Free, structured after-school and weekend programs that help rural children grow in mind, body, and character.",
};

type Program = {
  num: string;
  title: string;
  intro: string;
  focus: string[];
  image: string;
  icon: LucideIcon;
};

const PROGRAMS: Program[] = [
  {
    num: "01",
    title: "Physical Fitness",
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
  },
  {
    num: "02",
    title: "Sports Development",
    intro:
      "Sports help children build teamwork, confidence, resilience, and leadership.",
    focus: ["Volleyball", "Kabaddi", "Soccer", "General athletic development"],
    image: "/images/kabadi.webp",
    icon: Trophy,
  },
  {
    num: "03",
    title: "Chess & Mental Growth",
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
  },
  {
    num: "04",
    title: "Education Support",
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
  },
  {
    num: "05",
    title: "Leadership & Discipline",
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
  },
  {
    num: "06",
    title: "Health & Nutrition Awareness",
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
  },
];

function ProgramRow({ program, index }: { program: Program; index: number }) {
  const Icon = program.icon;
  const flip = index % 2 === 1;

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
        <Reveal>
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-sm bg-neutral-900">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <span className="absolute bottom-5 right-5 z-10 font-hero italic text-white/20 text-5xl leading-none">
              {program.num}
            </span>
          </div>
        </Reveal>
      </div>

      <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
        <Reveal delay={0.1}>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
              <Icon size={16} strokeWidth={1.5} className="text-neutral-600" />
            </span>
            <span className="font-display font-medium text-[12px] tracking-wide text-neutral-400">
              Program {program.num}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="font-display font-bold text-black text-2xl md:text-3xl lg:text-4xl leading-[1.1] tracking-tight">
            {program.title}.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 font-body text-neutral-500 text-[15px] leading-relaxed max-w-xl">
            {program.intro}
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-6 font-display font-medium text-[12px] tracking-wide text-orange">
            Focus areas
          </p>
          <ul className="mt-3 space-y-2">
            {program.focus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 font-body text-[15px] text-black"
              >
                <span className="mt-2 inline-block h-1 w-1 rounded-full bg-neutral-400 shrink-0" />
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
        intro={
          <p>
            Netaji Youth Foundation provides structured after-school and weekend
            programs designed to help rural children grow in mind, body, and
            character.
          </p>
        }
      />

      {/* ── Programs list ──────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px] space-y-20 md:space-y-28 lg:space-y-36">
          {PROGRAMS.map((p, i) => (
            <ProgramRow key={p.num} program={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── Schedule ──────────────────────────────────────────── */}
      <section className="bg-neutral-50 py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-3">
              Program Schedule
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-black text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
              How we{" "}
              <span className="font-hero italic">show up.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Reveal delay={0.15}>
              <div className="bg-white border border-neutral-200 rounded-sm p-7 h-full">
                <Clock size={20} strokeWidth={1.5} className="text-orange mb-4" />
                <p className="font-display font-medium text-[12px] tracking-wide text-orange mb-1.5">
                  Weekdays
                </p>
                <h3 className="font-display font-bold text-xl text-black tracking-tight">
                  After-school sessions
                </h3>
                <p className="mt-3 font-body text-neutral-500 text-[15px] leading-relaxed">
                  Daily structured time slots that work around school hours.
                  Discipline, fitness, education support and chess practice.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-black text-white rounded-sm p-7 h-full">
                <CalendarDays size={20} strokeWidth={1.5} className="text-volt mb-4" />
                <p className="font-display font-medium text-[12px] tracking-wide text-volt mb-1.5">
                  Weekends
                </p>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Sports, chess &amp; enrichment
                </h3>
                <p className="mt-3 font-body text-white/50 text-[15px] leading-relaxed">
                  Longer sessions for sports development, chess tournaments,
                  health awareness, and team-building activities.
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
                href="/become-a-trainer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 text-black px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-black hover:text-white hover:border-black transition-colors"
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

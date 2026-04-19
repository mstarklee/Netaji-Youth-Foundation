"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

type Pillar = {
  title: string;
  kicker: string;
  body: string;
  image: string;
  layout: string;
};

const PILLARS: Pillar[] = [
  {
    title: "Fitness & Sports",
    kicker: "Body",
    body: "Structured activities that improve health, stamina, teamwork, confidence, and resilience.",
    image: "/images/focus/fitness-sports.jpg",
    layout: "lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Mental Strength",
    kicker: "Mind",
    body: "Chess, memory-building, concentration, and strategic thinking that sharpen the mind.",
    image: "/images/focus/mental-Strength.png",
    layout: "lg:col-span-5",
  },
  {
    title: "Education Support",
    kicker: "Learn",
    body: "Study discipline and support that help children stay committed to school and learning.",
    image: "/images/focus/education.png",
    layout: "lg:col-span-5",
  },
  {
    title: "Leadership",
    kicker: "Lead",
    body: "Habits, routines, responsibility, and values that shape strong character.",
    image: "/images/focus/leadership.png",
    layout: "lg:col-span-6",
  },
  {
    title: "Health & Nutrition",
    kicker: "Grow",
    body: "Simple, practical guidance to help children and families build healthier routines.",
    image: "/images/focus/nutrition.png",
    layout: "lg:col-span-6",
  },
];

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden border-4 border-black bg-black min-h-[380px] lg:min-h-0 ${pillar.layout}`}
    >
      {/* Full-bleed image */}
      <Image
        src={pillar.image}
        alt={pillar.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        sizes="(max-width: 1024px) 100vw, 58vw"
        priority={index === 0}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

      {/* Kicker tag */}
      <span className="absolute top-6 right-6 z-20 inline-flex items-center h-8 px-3 border-2 border-volt text-volt bg-black/40 backdrop-blur-sm font-display font-bold uppercase text-[10px] tracking-[0.3em]">
        {pillar.kicker}
      </span>

      {/* Bottom content strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t-4 border-black bg-black text-white px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-extrabold uppercase text-xl md:text-2xl leading-[1.05] tracking-tight">
              {pillar.title}.
            </h3>
            <p className="mt-2 font-body text-white/60 text-[13px] md:text-sm leading-relaxed line-clamp-2">
              {pillar.body}
            </p>
          </div>
          <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center border-2 border-white/30 group-hover:border-volt group-hover:bg-volt group-hover:text-black transition-colors">
            <ArrowUpRight
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PillarShowcase() {
  return (
    <section className="relative bg-gray-50 overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={18} className="text-orange" strokeWidth={2.5} />
              <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-black">
                Five Pillars
              </span>
            </div>
          </Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal delay={0.1}>
              <h2 className="font-display font-extrabold text-black uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
                What we <br />
                build kids <br />
                up with.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/programs"
                className="group inline-flex items-center gap-3 font-display font-bold text-sm uppercase tracking-widest text-black"
              >
                <span className="relative">
                  All Programs
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black group-hover:bg-orange transition-colors" />
                </span>
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange transition-all"
                />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-12 lg:auto-rows-[300px]">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.title} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

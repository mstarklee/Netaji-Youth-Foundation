"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

type Pillar = {
  title: string;
  body: string;
  image: string;
  layout: string;
};

const PILLARS: Pillar[] = [
  {
    title: "Fitness & Sports",
    body: "Structured activities that improve health, stamina, teamwork, confidence, and resilience.",
    image: "/images/focus/fitness-sports.jpg",
    layout: "lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Mental Strength",
    body: "Chess, memory-building, concentration, and strategic thinking that sharpen the mind.",
    image: "/images/focus/mental-Strength.png",
    layout: "lg:col-span-5",
  },
  {
    title: "Education Support",
    body: "Study discipline and support that help children stay committed to school and learning.",
    image: "/images/focus/education.png",
    layout: "lg:col-span-5",
  },
  {
    title: "Leadership",
    body: "Habits, routines, responsibility, and values that shape strong character.",
    image: "/images/focus/leadership.png",
    layout: "lg:col-span-6",
  },
  {
    title: "Health & Nutrition",
    body: "Simple, practical guidance to help children and families build healthier routines.",
    image: "/images/focus/nutrition.png",
    layout: "lg:col-span-6",
  },
];

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden bg-neutral-900 min-h-[320px] lg:min-h-0 cursor-pointer ${pillar.layout}`}
    >
      <Image
        src={pillar.image}
        alt={pillar.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 58vw"
        priority={index === 0}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-5 lg:p-6">
        <h3 className="font-display font-bold text-white text-base lg:text-lg leading-tight tracking-tight">
          {pillar.title}
        </h3>
        <p className="mt-1.5 font-body text-white/45 text-[13px] leading-relaxed line-clamp-2 max-w-xs">
          {pillar.body}
        </p>
      </div>

      {/* Hover arrow */}
      <span className="absolute top-4 right-4 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/0 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100">
        <ArrowRight size={14} strokeWidth={1.5} />
      </span>
    </motion.div>
  );
}

export default function PillarShowcase() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10 lg:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-3">
                What We Focus On
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-black text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
                Five pillars that build<br className="hidden md:block" /> children up.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/programs"
              className="group inline-flex items-center gap-2 font-display font-semibold text-[13px] tracking-wide text-black hover:text-neutral-500 transition-colors"
            >
              All Programs
              <ArrowRight size={15} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-12 lg:auto-rows-[280px]">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.title} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

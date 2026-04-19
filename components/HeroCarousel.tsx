"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Tint = "volt" | "orange";

type Slide = {
  num: string;
  kicker: string;
  headline: string;
  subtitle: string;
  image: string;
  alt: string;
  tint: Tint;
};

const SLIDES: Slide[] = [
  {
    num: "01",
    kicker: "The Body",
    headline: "Build Your Body.",
    subtitle:
      "Structured fitness and sports programs that build strength, stamina, and confidence in rural children.",
    image: "/images/football.jpg",
    alt: "Children playing football",
    tint: "volt",
  },
  {
    num: "02",
    kicker: "The Mind",
    headline: "Train Your Mind.",
    subtitle:
      "Chess, mental exercises, and strategic thinking that sharpen young minds for lifelong success.",
    image: "/images/portrait-young-person-playing-professional-tennis.jpg",
    alt: "Young athlete focused on the game",
    tint: "orange",
  },
];

const TINT_BG: Record<Tint, string> = {
  volt: "bg-volt",
  orange: "bg-orange",
};

const TINT_DOT: Record<Tint, string> = {
  volt: "bg-black",
  orange: "bg-black",
};

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = SLIDES[current];

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    [],
  );
  const prev = () =>
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      className="relative isolate bg-gray-50 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Foundation programs"
    >
      {/* Top rail */}
      <div className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 md:px-10 lg:px-14 lg:pt-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-black" />
          <span className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-black">
            Netaji Youth Foundation
          </span>
        </div>
        <div className="flex items-center gap-2 font-display font-bold text-[11px] uppercase tracking-[0.3em] text-black">
          <span>{slide.num}</span>
          <span className="opacity-30">/</span>
          <span className="opacity-30">
            {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="relative z-10 mx-auto grid min-h-[82vh] w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-14 lg:py-24">
        {/* ── Text column ─────────────────────── */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="flex items-center gap-3"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                <span className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-black/70">
                  {slide.kicker}
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="mt-5 font-hero italic uppercase text-black leading-[0.86] tracking-tight text-[64px] sm:text-[88px] md:text-[120px] lg:text-[140px] xl:text-[156px]"
              >
                {slide.headline}
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="mt-8 max-w-lg font-body text-lg md:text-xl leading-relaxed text-neutral-600"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-wrap items-center gap-6"
              >
                <Link
                  href="/programs"
                  className="group inline-flex items-center gap-3 rounded-full bg-black text-white px-7 py-4 font-display font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-orange hover:text-black transition-colors"
                >
                  Explore Programs
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                    className="transition-transform group-hover:rotate-45"
                  />
                </Link>
                <Link
                  href="/register"
                  className="group font-display font-bold text-[13px] uppercase tracking-[0.2em] text-black"
                >
                  <span className="relative">
                    Register a Child
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black transition-colors group-hover:bg-orange" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Image panel ─────────────────────── */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${current}`}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.99 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative aspect-[4/5] w-full border-4 border-black ${TINT_BG[slide.tint]} shadow-[12px_12px_0_0_#111111]`}
              >
                {/* Small kicker pill top-left */}
                <span className="absolute top-5 left-5 z-10 inline-flex h-7 items-center bg-black px-3 font-display font-bold uppercase text-[10px] tracking-[0.3em] text-white">
                  {slide.kicker}
                </span>

                {/* Number top-right */}
                <span className="absolute top-5 right-5 z-10 font-hero italic text-black leading-none text-4xl">
                  {slide.num}
                </span>

                {/* Framed photo */}
                <div className="absolute inset-x-5 top-16 bottom-14 overflow-hidden border-2 border-black bg-black">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    priority
                  />
                </div>

                {/* Caption strip at bottom */}
                <div className="absolute bottom-4 left-5 right-5 z-10 flex items-center justify-between font-display font-bold text-[10px] uppercase tracking-[0.3em] text-black">
                  <span className="flex items-center gap-2">
                    <span className="h-px w-5 bg-black" />
                    Vedaranyam
                  </span>
                  <span>Free for kids</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative floating tag */}
            <div className="absolute -top-4 -right-3 z-20 float" style={{ ["--r" as string]: "10deg" }}>
              <span className="inline-block rotate-[10deg] border-2 border-black bg-white px-3 py-1.5 font-display font-extrabold uppercase text-[10px] tracking-[0.3em] text-black shadow-[4px_4px_0_0_#111111]">
                ★ 100% Free
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rail */}
      <div className="relative z-30 mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 pb-8 md:px-10 lg:px-14 lg:pb-10">
        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.num}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? `w-12 ${TINT_DOT[slide.tint]}`
                  : "w-1.5 bg-black/25 hover:bg-black/50"
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-12 w-12 items-center justify-center border-2 border-black bg-white text-black transition-colors hover:bg-black hover:text-white"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="flex h-12 w-12 items-center justify-center border-2 border-l-0 border-black bg-black text-white transition-colors hover:bg-volt hover:text-black"
          >
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

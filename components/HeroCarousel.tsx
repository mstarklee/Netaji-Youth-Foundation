"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Slide = {
  kicker: string;
  headline: string;
  subtitle: string;
  image: string;
  alt: string;
  cta: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    kicker: "Physical Training",
    headline: "Build Your Body.",
    subtitle:
      "Structured fitness and sports programs that build strength, stamina, and confidence in rural children.",
    image: "/images/football.jpg",
    alt: "Children playing football",
    cta: { label: "Explore Programs", href: "/programs" },
  },
  {
    kicker: "Mental Growth",
    headline: "Train Your Mind.",
    subtitle:
      "Chess, mental exercises, and strategic thinking that sharpen young minds for lifelong success.",
    image: "/images/portrait-young-person-playing-professional-tennis.jpg",
    alt: "Young athlete focused on the game",
    cta: { label: "Our Programs", href: "/programs" },
  },
  {
    kicker: "Leadership",
    headline: "Lead Your Future.",
    subtitle:
      "Leadership, discipline, and character-building programs that prepare children for life beyond the field.",
    image: "/images/focus/leadership.png",
    alt: "Children in leadership training",
    cta: { label: "Learn More", href: "/about" },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative h-[92vh] min-h-[600px] max-h-[900px] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Foundation programs"
    >
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end h-full max-w-[1440px] mx-auto px-6 lg:px-10 pb-24 lg:pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-2xl"
          >
            {/* Kicker */}
            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display font-medium text-[12px] tracking-wide text-white/60 mb-4"
            >
              {slide.kicker}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-hero italic uppercase text-white leading-[0.92] tracking-tight text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px]"
            >
              {slide.headline}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 max-w-md font-body text-white/60 text-[15px] leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 flex items-center gap-4"
            >
              <Link
                href={slide.cta.href}
                className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-neutral-200 transition-colors"
              >
                {slide.cta.label}
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center rounded-full border border-white/30 text-white px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-white/10 transition-colors"
              >
                Register a Child
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom controls */}
        <div className="absolute bottom-10 left-6 lg:left-10 right-6 lg:right-10 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-[2px] rounded-full transition-all duration-500 ${
                  i === current ? "w-8 bg-white" : "w-4 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-neutral-200 transition-colors"
            >
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

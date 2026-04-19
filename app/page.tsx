import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import MarqueeBar from "@/components/MarqueeBar";
import StickerBadge from "@/components/StickerBadge";
import Reveal from "@/components/Reveal";
import CounterNumber from "@/components/CounterNumber";
import VoltHighlight from "@/components/VoltHighlight";
import PillarShowcase from "@/components/PillarShowcase";

const STATS = [
  { value: 1, suffix: "", label: "VILLAGE", sub: "Starting in Vedaranyam", tint: "volt" as const },
  { value: 300, suffix: "+", label: "CHILDREN", sub: "Target — Year 1", tint: "orange" as const },
  { value: 2000, suffix: "+", label: "3-YEAR VISION", sub: "Kids across villages", tint: "volt" as const },
  { value: 5, suffix: "", label: "PROGRAMS", sub: "Free for every child", tint: "orange" as const },
];

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Volt marquee — energy burst right after hero */}
      <MarqueeBar
        items={[
          "FREE FOR ALL CHILDREN",
          "STRONG MIND",
          "STRONG BODY",
          "STRONG FUTURE",
          "BUILT IN VEDARANYAM",
          "EVERY KID. EVERY VILLAGE.",
        ]}
        variant="volt"
      />

      {/* ──────────────────────────── Why We Exist ──────────────────────────── */}
      <section className="relative bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-black" />
                <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-black">
                  Why We Exist
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display font-extrabold text-black uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                Every child <br />
                deserves{" "}
                <VoltHighlight>strength</VoltHighlight>,{" "}
                <VoltHighlight color="orange">
                  <span className="text-white">confidence</span>
                </VoltHighlight>
                , <br />
                and opportunity.
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-8 font-body text-neutral-600 text-lg leading-relaxed max-w-xl">
                In many rural communities, children have talent, energy, and
                potential — but they often lack structured opportunities,
                coaching, safe spaces, and long-term guidance. We exist to
                bridge that gap.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="mt-4 font-body text-neutral-600 text-lg leading-relaxed max-w-xl">
                We are building a disciplined, inspiring environment where
                children grow physically, mentally, and personally —{" "}
                <strong className="text-black font-bold">free of cost.</strong>
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="mt-10 flex flex-wrap gap-3">
                <StickerBadge variant="volt" rotate={-3}>
                  100% Free
                </StickerBadge>
                <StickerBadge variant="orange" rotate={2}>
                  Boys + Girls
                </StickerBadge>
                <StickerBadge variant="black" rotate={-2}>
                  Rural First
                </StickerBadge>
              </div>
            </Reveal>
          </div>

          {/* Right: tilted image stack */}
          <div className="lg:col-span-5 relative h-[420px] md:h-[520px]">
            <Reveal delay={0.2} rotate={-4} className="absolute top-4 left-2 w-[70%] h-[75%] z-10">
              <div className="relative w-full h-full border-4 border-black bg-neutral-900 overflow-hidden shadow-[12px_12px_0_0_#D7F61D]">
                <Image
                  src="/images/kids-playing-soccer-football.jpg"
                  alt="Kids playing football"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 60vw, 30vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.4} rotate={5} className="absolute bottom-2 right-0 w-[60%] h-[55%] z-20">
              <div className="relative w-full h-full border-4 border-black bg-neutral-900 overflow-hidden shadow-[-10px_10px_0_0_#FF5C00]">
                <Image
                  src="/images/kabadi.webp"
                  alt="Kabaddi training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </Reveal>
            <div className="absolute -top-2 right-8 z-30 float" style={{ ["--r" as string]: "8deg" }}>
              <StickerBadge variant="volt" rotate={8} size="lg">
                ★ Start strong
              </StickerBadge>
            </div>
          </div>
        </div>
      </section>

      {/* Black marquee */}
      <MarqueeBar
        items={[
          "TRAIN.",
          "LEARN.",
          "LEAD.",
          "REPEAT.",
          "TRAIN.",
          "LEARN.",
          "LEAD.",
          "REPEAT.",
        ]}
        variant="black"
        reverse
        speed={25}
      />

      {/* ──────────────────────────── What We Do (Sticky Showcase) ──────────────────────────── */}
      <PillarShowcase />

      {/* Orange marquee */}
      <MarqueeBar
        items={[
          "GIRLS LEAD TOO",
          "EQUAL ACCESS",
          "SAFE SPACES",
          "LEAD & INSPIRE",
          "EVERY CHILD COUNTS",
        ]}
        variant="orange"
        speed={28}
      />

      {/* ──────────────────────────── Girls Participation ──────────────────────────── */}
      <section className="relative bg-black grain overflow-hidden">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left: image */}
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/images/women/empowerment.png"
              alt="Girls participating in sports"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />

            {/* Overlay Anton text */}
            <div className="absolute bottom-6 left-6 z-10">
              <p className="font-hero italic text-volt text-6xl md:text-8xl leading-none drop-shadow-[4px_4px_0_#111111]">
                EQUAL.
              </p>
            </div>
          </div>

          {/* Right: content */}
          <div className="relative flex items-center px-8 md:px-16 py-20 lg:py-32 z-10">
            <div className="max-w-lg">
              <Reveal>
                <StickerBadge variant="volt" rotate={-5} size="md">
                  ♀ Girls Participation
                </StickerBadge>
              </Reveal>
              <Reveal delay={0.15}>
                <h2 className="mt-6 font-display font-extrabold text-white uppercase text-5xl md:text-6xl leading-[0.95] tracking-tight">
                  Strong girls <br />
                  build strong <br />
                  <span className="text-volt">communities.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-8 font-body text-white/70 text-lg leading-relaxed">
                  Netaji Youth Foundation believes that girls deserve the same
                  access, encouragement, confidence, and opportunity as boys.
                  We are committed to creating an environment where girls feel
                  safe, included, respected, and empowered to participate in
                  sports, learning, and leadership activities.
                </p>
              </Reveal>
              <Reveal delay={0.45}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <StickerBadge variant="white" rotate={-3}>
                    Safe
                  </StickerBadge>
                  <StickerBadge variant="orange" rotate={4}>
                    Included
                  </StickerBadge>
                  <StickerBadge variant="volt" rotate={-2}>
                    Respected
                  </StickerBadge>
                  <StickerBadge variant="white" rotate={3}>
                    Empowered
                  </StickerBadge>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── Starting Point ──────────────────────────── */}
      <section className="bg-white py-24 md:py-32 lg:py-40 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative h-[380px] md:h-[500px]">
            <Reveal rotate={-3} className="absolute inset-0">
              <div className="relative w-full h-full border-4 border-black overflow-hidden shadow-[12px_12px_0_0_#111111] bg-white">
                <iframe
                  title="Netaji Youth Foundation — Vedaranyam location"
                  src="https://maps.google.com/maps?q=10.392436,79.848738&hl=en&z=14&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href="https://maps.app.goo.gl/6rTJnPsLcy9wKS6e6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-black px-3 py-2 font-display font-bold uppercase text-[10px] tracking-[0.3em] text-white hover:bg-orange hover:text-black transition-colors"
                >
                  <MapPin size={12} strokeWidth={2.5} />
                  Open in Google Maps
                </a>
              </div>
            </Reveal>
            <div className="absolute -top-6 -right-4 z-10 float" style={{ ["--r" as string]: "-6deg" }}>
              <StickerBadge variant="orange" rotate={-6} size="lg">
                <MapPin size={14} className="inline mr-1" />
                You are here
              </StickerBadge>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-orange" />
                <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                  Our Starting Point
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-extrabold text-black uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                Begins in <br />
                <span className="font-hero italic text-orange">Vedaranyam.</span>
                <br />
                Built for rural <br />
                Tamil Nadu.
              </h2>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-8 font-body text-neutral-600 text-lg leading-relaxed max-w-xl">
                Our journey begins in Vedaranyam, in the Nagai district region
                of Tamil Nadu. We are starting where the founder&apos;s story
                began — with the goal of building a model that can grow across
                villages and create meaningful long-term impact.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 inline-flex items-center gap-4 border-2 border-black px-5 py-4 shadow-[6px_6px_0_0_#D7F61D]">
                <MapPin size={20} className="text-orange" strokeWidth={2.5} />
                <div>
                  <p className="font-display font-bold uppercase text-xs tracking-widest text-neutral-500">
                    Location
                  </p>
                  <p className="font-display font-extrabold uppercase text-lg text-black">
                    Vedaranyam, Nagai
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── Founder Message ──────────────────────────── */}
      <section className="relative bg-black grain py-24 md:py-32 lg:py-40 px-6 overflow-hidden">
        <div className="absolute top-10 left-10 font-hero italic text-white/5 text-[240px] leading-none pointer-events-none select-none">
          &ldquo;
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="font-display font-bold uppercase text-xs tracking-[0.3em] text-volt mb-6">
              — Founder Message
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-extrabold text-white uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-10">
              Returning to <br />
              <span className="text-volt italic font-hero">give back.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="font-body text-white/70 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              The foundation is built on a deeply personal journey — from
              growing up in a poor village, to becoming an engineer, to
              building a successful company, and now returning to create
              opportunities for children in rural India.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link
              href="/founder-story"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-volt text-black px-8 py-4 font-display font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors border-2 border-volt hover:border-white"
            >
              Read Founder Story
              <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────── Quick Stats — kinetic counter row ──────────────────────────── */}
      <section className="bg-black border-t-2 border-white/10 py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-10 bg-volt" />
              <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-volt">
                By the Numbers
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14 md:gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="relative">
                  <p
                    className={`font-hero italic text-7xl md:text-8xl lg:text-[112px] leading-none ${
                      s.tint === "volt" ? "text-volt" : "text-orange"
                    }`}
                  >
                    <CounterNumber value={s.value} suffix={s.suffix} />
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20 max-w-[220px]">
                    <p className="font-display font-extrabold uppercase text-sm tracking-widest text-white">
                      {s.label}
                    </p>
                    <p className="font-body text-white/50 text-sm mt-1">
                      {s.sub}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── Closing CTA — split volt/orange ──────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="relative grid grid-cols-1 lg:grid-cols-5">
          {/* Left — massive headline on white */}
          <div className="lg:col-span-3 bg-white px-8 md:px-16 lg:px-20 py-20 lg:py-32 relative">
            <Reveal>
              <StickerBadge variant="orange" rotate={-4} size="lg">
                ★ Join the movement
              </StickerBadge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display font-extrabold text-black uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                Shape the <br />
                <span className="font-hero italic">next</span>{" "}
                <VoltHighlight>generation.</VoltHighlight>
              </h2>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-8 font-body text-neutral-600 text-lg leading-relaxed max-w-xl">
                Whether you are a parent, trainer, teacher, or community
                supporter — Netaji Youth Foundation welcomes you to be part of
                a movement that helps children grow with discipline, health,
                confidence, and hope.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="group inline-flex items-center justify-between gap-3 bg-black text-white px-7 py-5 font-display font-bold text-sm uppercase tracking-widest hover:bg-orange hover:text-black transition-colors border-2 border-black min-w-[240px]"
                >
                  Register a Child
                  <ArrowUpRight
                    size={20}
                    className="group-hover:rotate-45 transition-transform"
                  />
                </Link>
                <Link
                  href="/become-a-trainer"
                  className="group inline-flex items-center justify-between gap-3 bg-white text-black px-7 py-5 font-display font-bold text-sm uppercase tracking-widest hover:bg-volt transition-colors border-2 border-black min-w-[240px]"
                >
                  Become a Trainer
                  <ArrowUpRight
                    size={20}
                    className="group-hover:rotate-45 transition-transform"
                  />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — image + volt accent */}
          <div className="lg:col-span-2 bg-volt relative min-h-[400px] lg:min-h-full">
            <div className="absolute inset-6 md:inset-8 border-4 border-black overflow-hidden">
              <Image
                src="/images/childrenfuture.jpg"
                alt="Children's future"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="absolute top-8 right-8 float" style={{ ["--r" as string]: "12deg" }}>
              <StickerBadge variant="black" rotate={12} size="lg">
                ✱ Free for kids
              </StickerBadge>
            </div>
            <div className="absolute bottom-10 left-10 z-10">
              <p className="font-hero italic text-black text-6xl md:text-7xl leading-none drop-shadow-[4px_4px_0_#ffffff]">
                GO.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import Reveal from "@/components/Reveal";
import CounterNumber from "@/components/CounterNumber";
import PillarShowcase from "@/components/PillarShowcase";

const STATS = [
  { value: 1, suffix: "", label: "Village", sub: "Starting in Vedaranyam" },
  { value: 300, suffix: "+", label: "Children", sub: "Target — Year 1" },
  { value: 2000, suffix: "+", label: "3-Year Vision", sub: "Kids across villages" },
  { value: 5, suffix: "", label: "Programs", sub: "Free for every child" },
];

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* ── Why We Exist ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/kids-playing-soccer-football.jpg"
              alt="Kids playing football"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-3">
                Why We Exist
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-black text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
                Every child deserves strength, confidence, and opportunity.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 font-body text-neutral-500 text-[15px] leading-relaxed">
                In many rural communities, children have talent, energy, and
                potential — but they lack structured opportunities, coaching,
                safe spaces, and long-term guidance. We exist to bridge that gap.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 font-body text-neutral-500 text-[15px] leading-relaxed">
                We are building a disciplined, inspiring environment where
                children grow physically, mentally, and personally —{" "}
                <span className="text-black font-medium">free of cost.</span>
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["100% Free", "Boys + Girls", "Rural First"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3.5 py-1.5 bg-neutral-100 font-display font-semibold text-[11px] tracking-wide text-neutral-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────────── */}
      <PillarShowcase />

      {/* ── Girls Participation ──────────────────────────────────── */}
      <section className="bg-black overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[540px]">
          {/* Image */}
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/images/women/empowerment.png"
              alt="Girls participating in sports"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
          </div>

          {/* Content */}
          <div className="flex items-center px-6 md:px-12 lg:px-16 py-16 lg:py-24">
            <div className="max-w-md">
              <Reveal>
                <p className="font-display font-medium text-[12px] tracking-wide text-volt mb-4">
                  Girls Participation
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
                  Strong girls build strong{" "}
                  <span className="text-volt">communities.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 font-body text-white/50 text-[15px] leading-relaxed">
                  Netaji Youth Foundation believes that girls deserve the same
                  access, encouragement, confidence, and opportunity as boys.
                  We are committed to creating an environment where girls feel
                  safe, included, and empowered.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Safe", "Included", "Respected", "Empowered"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-white/15 font-display font-medium text-[11px] tracking-wide text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Starting Point ───────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-3">
                Our Starting Point
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-black text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">
                Begins in{" "}
                <span className="font-hero italic text-orange">Vedaranyam.</span>
                <br />
                Built for rural Tamil Nadu.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 font-body text-neutral-500 text-[15px] leading-relaxed">
                Our journey begins in Vedaranyam, in the Nagai district of
                Tamil Nadu — where the founder&apos;s story began. We are building
                a model that can grow across villages and create meaningful
                long-term impact.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-6 inline-flex items-center gap-2.5">
                <MapPin size={16} className="text-orange" strokeWidth={1.5} />
                <span className="font-display font-semibold text-[13px] tracking-wide text-black">
                  Vedaranyam, Nagai District
                </span>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={0.1} className="order-1 lg:order-2 relative aspect-[4/3] overflow-hidden rounded-sm">
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
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-black px-3.5 py-2 font-display font-semibold text-[11px] tracking-wide text-white hover:bg-orange transition-colors rounded-full"
            >
              <MapPin size={11} strokeWidth={1.5} />
              Open in Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Founder Message ──────────────────────────────────────── */}
      <section className="bg-black py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-display font-medium text-[12px] tracking-wide text-volt mb-6">
              Founder Message
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-[46px] leading-[1.1] tracking-tight">
              Returning to{" "}
              <span className="font-hero italic text-volt">give back.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-body text-white/50 text-[15px] md:text-base leading-relaxed max-w-xl mx-auto">
              The foundation is built on a deeply personal journey — from
              growing up in a poor village, to becoming an engineer, to
              building a successful company, and now returning to create
              opportunities for children in rural India.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              href="/founder-story"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Read Founder Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="bg-black border-t border-white/8 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <p className="font-display font-medium text-[12px] tracking-wide text-neutral-500 mb-12">
              By the Numbers
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <p className="font-hero italic text-white text-5xl md:text-6xl lg:text-7xl leading-none">
                  <CounterNumber value={s.value} suffix={s.suffix} />
                </p>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="font-display font-semibold text-[13px] tracking-wide text-white">
                    {s.label}
                  </p>
                  <p className="font-body text-white/35 text-[13px] mt-0.5">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — text */}
        <div className="bg-white px-6 md:px-12 lg:px-16 py-20 lg:py-28">
          <Reveal>
            <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-4">
              Join the Movement
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-black text-3xl md:text-4xl lg:text-[46px] leading-[1.1] tracking-tight">
              Shape the next generation.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-body text-neutral-500 text-[15px] leading-relaxed max-w-md">
              Whether you are a parent, trainer, teacher, or community
              supporter — Netaji Youth Foundation welcomes you to be part of
              a movement that helps children grow with discipline, health,
              confidence, and hope.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
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

        {/* Right — image */}
        <div className="relative min-h-[380px] bg-neutral-900">
          <Image
            src="/images/childrenfuture.jpg"
            alt="Children's future"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </section>
    </>
  );
}

import { ReactNode } from "react";
import StickerBadge from "./StickerBadge";
import Reveal from "./Reveal";

type Tint = "volt" | "orange";

export default function PageHero({
  kicker,
  title,
  italicWord,
  italicPosition = "end",
  intro,
  tint = "volt",
  badge,
}: {
  kicker: string;
  title: string;
  italicWord?: string;
  italicPosition?: "start" | "end";
  intro?: ReactNode;
  tint?: Tint;
  badge?: string;
}) {
  const accentColor = tint === "volt" ? "text-volt" : "text-orange";
  const accentRail = tint === "volt" ? "bg-volt" : "bg-orange";

  return (
    <section className="relative bg-black grain overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36 px-6">
      <div className="absolute -top-10 -right-10 font-hero italic text-white/5 text-[260px] leading-none pointer-events-none select-none">
        {kicker.charAt(0)}
      </div>

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className={`h-px w-10 ${accentRail}`} />
            <span
              className={`font-display font-bold uppercase text-xs tracking-[0.3em] ${accentColor}`}
            >
              {kicker}
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <Reveal delay={0.1}>
            <h1 className="font-display font-extrabold text-white uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight max-w-4xl">
              {italicPosition === "start" && italicWord ? (
                <>
                  <span className={`font-hero italic ${accentColor}`}>
                    {italicWord}
                  </span>{" "}
                  {title}
                </>
              ) : italicWord ? (
                <>
                  {title}{" "}
                  <span className={`font-hero italic ${accentColor}`}>
                    {italicWord}
                  </span>
                </>
              ) : (
                title
              )}
              .
            </h1>
          </Reveal>

          {badge && (
            <Reveal delay={0.2}>
              <StickerBadge variant={tint} rotate={-4} size="lg">
                {badge}
              </StickerBadge>
            </Reveal>
          )}
        </div>

        {intro && (
          <Reveal delay={0.25}>
            <div className="mt-10 max-w-3xl space-y-5 font-body text-white/70 text-lg md:text-xl leading-relaxed">
              {intro}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

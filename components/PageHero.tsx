import { ReactNode } from "react";
import Reveal from "./Reveal";

type Tint = "volt" | "orange";

export default function PageHero({
  kicker,
  title,
  italicWord,
  italicPosition = "end",
  intro,
  tint = "volt",
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

  return (
    <section className="relative bg-black overflow-hidden pt-16 pb-14 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 px-6 lg:px-10">
      <div className="relative mx-auto max-w-[1440px]">
        <Reveal>
          <p className={`font-display font-medium text-[12px] tracking-wide ${accentColor} mb-4`}>
            {kicker}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tight max-w-3xl">
            {italicPosition === "start" && italicWord ? (
              <>
                <span className={`font-hero italic ${accentColor}`}>{italicWord}</span>{" "}
                {title}
              </>
            ) : italicWord ? (
              <>
                {title}{" "}
                <span className={`font-hero italic ${accentColor}`}>{italicWord}</span>
              </>
            ) : (
              title
            )}
            .
          </h1>
        </Reveal>

        {intro && (
          <Reveal delay={0.2}>
            <div className="mt-6 max-w-xl space-y-4 font-body text-white/50 text-[15px] leading-relaxed">
              {intro}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

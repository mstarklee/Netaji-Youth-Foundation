import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import MarqueeBar from "@/components/MarqueeBar";
import Reveal from "@/components/Reveal";
import RegistrationForm from "./RegistrationForm";

export const metadata: Metadata = {
  title: "Parent Registration",
  description:
    "Register your child for Netaji Youth Foundation programs. All programs are currently offered free of cost.",
};

const EXPECTATIONS = [
  "Structured after-school and weekend programs",
  "Focus on fitness, discipline, sports, chess, and growth",
  "Safe and respectful environment",
  "Progress visibility over time",
  "Encouragement for both boys and girls",
];

export default function RegisterPage() {
  return (
    <>
      <PageHero
        kicker="Parent Registration"
        title="Register your"
        italicWord="child."
        tint="volt"
        badge="✱ 100% Free"
        intro={
          <>
            <p>
              We welcome parents who want their children to grow in a
              disciplined, healthy, safe, and inspiring environment.
            </p>
            <p>
              All programs at Netaji Youth Foundation are currently offered{" "}
              <strong className="text-white font-bold">free of cost</strong>.
            </p>
          </>
        }
      />

      <MarqueeBar
        items={[
          "FREE FOR ALL CHILDREN.",
          "BOYS + GIRLS.",
          "SAFE.",
          "STRUCTURED.",
          "RESPECTFUL.",
        ]}
        variant="volt"
      />

      <section className="bg-white py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-orange" />
                  <span className="font-display font-bold uppercase text-xs tracking-[0.3em] text-orange">
                    What to Expect
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display font-extrabold uppercase text-black text-4xl md:text-5xl leading-[0.95] tracking-tight">
                  What parents <br />
                  can <span className="font-hero italic">expect.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <ul className="mt-2 space-y-4">
                  {EXPECTATIONS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-base text-black"
                    >
                      <CheckCircle2
                        size={20}
                        strokeWidth={2.25}
                        className="text-orange shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="border-4 border-black bg-black text-white p-6 shadow-[8px_8px_0_0_#FF5C00]">
                  <p className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-volt">
                    Note
                  </p>
                  <p className="mt-2 font-body text-white/80 text-sm leading-relaxed">
                    A team member will review your registration and contact you
                    with next steps.
                  </p>
                </div>
              </Reveal>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <RegistrationForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

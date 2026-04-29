import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
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
        intro={
          <>
            <p>
              We welcome parents who want their children to grow in a
              disciplined, healthy, safe, and inspiring environment.
            </p>
            <p>
              All programs at Netaji Youth Foundation are currently offered{" "}
              <strong className="text-white font-medium">free of cost</strong>.
            </p>
          </>
        }
      />

      <section className="bg-white py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-7">
              <Reveal>
                <p className="font-display font-medium text-[12px] tracking-wide text-orange mb-3">
                  What to Expect
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display font-bold text-black text-3xl md:text-4xl leading-[1.1] tracking-tight">
                  What parents can{" "}
                  <span className="font-hero italic">expect.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <ul className="mt-2 space-y-3.5">
                  {EXPECTATIONS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-[15px] text-black"
                    >
                      <CheckCircle2
                        size={17}
                        strokeWidth={1.5}
                        className="text-orange shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="bg-neutral-50 rounded-sm p-5">
                  <p className="font-display font-medium text-[12px] tracking-wide text-neutral-400 mb-1.5">
                    Note
                  </p>
                  <p className="font-body text-neutral-500 text-[13px] leading-relaxed">
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

"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import FormField from "@/components/form/FormField";
import FormTextarea from "@/components/form/FormTextarea";
import FormCheckboxGroup from "@/components/form/FormCheckboxGroup";

const EXPERTISE_OPTIONS = [
  { value: "fitness", label: "Fitness Training" },
  { value: "volleyball", label: "Volleyball" },
  { value: "kabaddi", label: "Kabaddi" },
  { value: "soccer", label: "Soccer" },
  { value: "chess", label: "Chess" },
  { value: "education", label: "Education Support" },
  { value: "discipline", label: "Discipline & Engagement" },
];

export default function TrainerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border-4 border-black bg-volt p-10 md:p-14 shadow-[12px_12px_0_0_#111111]">
        <CheckCircle2
          size={48}
          className="text-black mb-6"
          strokeWidth={2.25}
        />
        <h3 className="font-display font-extrabold uppercase text-3xl md:text-4xl text-black leading-[0.95]">
          Application received.
        </h3>
        <p className="mt-5 font-body text-black/80 text-lg leading-relaxed">
          Thank you for applying to Netaji Youth Foundation. Shortlisted
          candidates will be contacted for a discussion and manual verification.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex items-center gap-2 font-display font-bold uppercase text-xs tracking-[0.3em] text-black border-b-2 border-black pb-1 hover:text-orange hover:border-orange transition-colors"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-4 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0_0_#FF5C00]"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        <FormField label="Full Name" name="fullName" required />
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          required
        />
        <FormField label="Email" name="email" type="email" required />
        <FormField
          label="Village / Current Location"
          name="village"
          required
        />

        <div className="md:col-span-2">
          <FormCheckboxGroup
            label="Area of Expertise"
            name="expertise"
            options={EXPERTISE_OPTIONS}
          />
        </div>

        <div className="md:col-span-2">
          <FormTextarea
            label="Experience Working With Children"
            name="childExperience"
            placeholder="Briefly share any prior experience training, coaching, or working with children"
            rows={3}
          />
        </div>

        <FormField
          label="Languages Known"
          name="languagesKnown"
          placeholder="e.g., Tamil, English"
        />
        <FormField
          label="Weekly Availability"
          name="weeklyAvailability"
          placeholder="e.g., Mon–Fri evenings, weekend mornings"
        />

        <div className="md:col-span-2">
          <FormTextarea
            label="Why do you want to work with Netaji Youth Foundation?"
            name="whyJoin"
            placeholder="A short statement in your own words"
            rows={4}
          />
        </div>
      </div>

      <div className="mt-10 pt-8 border-t-2 border-black flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <p className="font-body text-sm text-neutral-600 max-w-md">
          Shortlisted candidates will be contacted for a discussion and manual
          verification.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-black hover:bg-volt hover:text-black hover:border-volt transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting…" : "Apply as Trainer"}
          <ArrowUpRight
            size={18}
            className="group-hover:rotate-45 transition-transform"
          />
        </button>
      </div>
    </form>
  );
}

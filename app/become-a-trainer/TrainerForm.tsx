"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
      <div className="bg-neutral-50 rounded-sm p-10 md:p-14">
        <CheckCircle2 size={36} className="text-black mb-5" strokeWidth={1.5} />
        <h3 className="font-display font-bold text-2xl md:text-[28px] text-black leading-tight tracking-tight">
          Application received.
        </h3>
        <p className="mt-4 font-body text-neutral-500 text-[15px] leading-relaxed">
          Thank you for applying to Netaji Youth Foundation. Shortlisted
          candidates will be contacted for a discussion and manual verification.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center gap-2 font-display font-medium text-[13px] tracking-wide text-black border-b border-black pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-neutral-200 rounded-sm p-8 md:p-12"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
        <FormField label="Full Name" name="fullName" required />
        <FormField label="Phone Number" name="phone" type="tel" required />
        <FormField label="Email" name="email" type="email" required />
        <FormField label="Village / Current Location" name="village" required />

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
          placeholder="e.g., Mon-Fri evenings, weekend mornings"
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

      <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <p className="font-body text-[13px] text-neutral-400 max-w-md">
          Shortlisted candidates will be contacted for a discussion and manual
          verification.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Apply as Trainer"}
          <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </form>
  );
}

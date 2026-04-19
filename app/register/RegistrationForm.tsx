"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import FormField from "@/components/form/FormField";
import FormSelect from "@/components/form/FormSelect";
import FormTextarea from "@/components/form/FormTextarea";
import FormCheckbox from "@/components/form/FormCheckbox";
import FormCheckboxGroup from "@/components/form/FormCheckboxGroup";

const PROGRAM_OPTIONS = [
  { value: "fitness", label: "Physical Fitness" },
  { value: "sports", label: "Sports Development" },
  { value: "chess", label: "Chess & Mental Growth" },
  { value: "education", label: "Education Support" },
  { value: "leadership", label: "Leadership & Discipline" },
  { value: "health", label: "Health & Nutrition" },
];

const GENDER_OPTIONS = [
  { value: "girl", label: "Girl" },
  { value: "boy", label: "Boy" },
  { value: "other", label: "Other" },
];

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Backend wiring (Prisma + Nodemailer) is a later feature.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border-4 border-black bg-volt p-10 md:p-14 shadow-[12px_12px_0_0_#111111]">
        <CheckCircle2 size={48} className="text-black mb-6" strokeWidth={2.25} />
        <h3 className="font-display font-extrabold uppercase text-3xl md:text-4xl text-black leading-[0.95]">
          Registration received.
        </h3>
        <p className="mt-5 font-body text-black/80 text-lg leading-relaxed">
          Thank you for trusting Netaji Youth Foundation with your child&apos;s
          journey. A team member will review your registration and contact you
          with next steps.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex items-center gap-2 font-display font-bold uppercase text-xs tracking-[0.3em] text-black border-b-2 border-black pb-1 hover:text-orange hover:border-orange transition-colors"
        >
          Submit another registration
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-4 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0_0_#D7F61D]"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        <FormField label="Parent Name" name="parentName" required />
        <FormField label="Child Name" name="childName" required />
        <FormField
          label="Child Age"
          name="childAge"
          type="number"
          min={4}
          max={18}
          required
        />
        <FormSelect
          label="Gender"
          name="gender"
          options={GENDER_OPTIONS}
          placeholder="Select gender"
          required
        />
        <FormField label="School Name" name="schoolName" />
        <FormField label="Class / Grade" name="classGrade" />
        <FormField label="Village / Area" name="village" required />
        <FormField
          label="Parent Phone Number"
          name="parentPhone"
          type="tel"
          required
        />
        <FormField
          label="Alternate Contact Number"
          name="alternatePhone"
          type="tel"
        />
        <FormField
          label="Emergency Contact Details"
          name="emergencyContact"
          hint="Name and phone of someone to reach in an emergency"
        />

        <div className="md:col-span-2">
          <FormCheckboxGroup
            label="Interested Programs"
            name="interestedPrograms"
            options={PROGRAM_OPTIONS}
          />
        </div>

        <div className="md:col-span-2">
          <FormTextarea
            label="Medical Notes / Health Considerations"
            name="medicalNotes"
            placeholder="Any allergies, conditions, or considerations we should know about"
            rows={3}
          />
        </div>

        <div className="md:col-span-2">
          <FormTextarea
            label="Additional Notes"
            name="additionalNotes"
            placeholder="Anything else you would like us to know"
            rows={3}
          />
        </div>

        <div className="md:col-span-2">
          <FormCheckbox
            name="photoPermission"
            label="I give permission for my child to be photographed or filmed during program activities for foundation use."
          />
        </div>
      </div>

      <div className="mt-10 pt-8 border-t-2 border-black flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <p className="font-body text-sm text-neutral-600 max-w-md">
          A team member will review your registration and contact you with next
          steps.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-black hover:bg-orange hover:text-black hover:border-orange transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting…" : "Submit Registration"}
          <ArrowUpRight
            size={18}
            className="group-hover:rotate-45 transition-transform"
          />
        </button>
      </div>
    </form>
  );
}

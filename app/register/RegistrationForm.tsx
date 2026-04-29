"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-neutral-50 rounded-sm p-10 md:p-14">
        <CheckCircle2 size={36} className="text-black mb-5" strokeWidth={1.5} />
        <h3 className="font-display font-bold text-2xl md:text-[28px] text-black leading-tight tracking-tight">
          Registration received.
        </h3>
        <p className="mt-4 font-body text-neutral-500 text-[15px] leading-relaxed">
          Thank you for trusting Netaji Youth Foundation with your child&apos;s
          journey. A team member will review your registration and contact you
          with next steps.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center gap-2 font-display font-medium text-[13px] tracking-wide text-black border-b border-black pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
        >
          Submit another registration
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

      <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <p className="font-body text-[13px] text-neutral-400 max-w-md">
          A team member will review your registration and contact you with next
          steps.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Submit Registration"}
          <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </form>
  );
}

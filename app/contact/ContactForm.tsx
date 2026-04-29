"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FormField from "@/components/form/FormField";
import FormTextarea from "@/components/form/FormTextarea";

export default function ContactForm() {
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
      <div className="bg-neutral-50 rounded-sm p-10 md:p-12">
        <CheckCircle2 size={36} className="text-black mb-5" strokeWidth={1.5} />
        <h3 className="font-display font-bold text-2xl md:text-[28px] text-black leading-tight tracking-tight">
          Message sent.
        </h3>
        <p className="mt-4 font-body text-neutral-500 text-[15px] leading-relaxed">
          Thank you for reaching out to Netaji Youth Foundation. We will get
          back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center gap-2 font-display font-medium text-[13px] tracking-wide text-black border-b border-black pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
        >
          Send another message
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
        <FormField label="Name" name="name" required />
        <FormField label="Phone Number" name="phone" type="tel" />
        <FormField label="Email" name="email" type="email" required />
        <FormField label="Subject" name="subject" required />
        <div className="md:col-span-2">
          <FormTextarea
            label="Message"
            name="message"
            placeholder="How can we help?"
            rows={6}
            required
          />
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-neutral-200 flex justify-end">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 font-display font-semibold text-[13px] tracking-wide hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send Message"}
          <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </form>
  );
}

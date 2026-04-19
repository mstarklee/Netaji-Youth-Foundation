"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
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
      <div className="border-4 border-black bg-volt p-10 md:p-12 shadow-[12px_12px_0_0_#111111]">
        <CheckCircle2 size={48} className="text-black mb-6" strokeWidth={2.25} />
        <h3 className="font-display font-extrabold uppercase text-3xl md:text-4xl text-black leading-[0.95]">
          Message sent.
        </h3>
        <p className="mt-5 font-body text-black/80 text-lg leading-relaxed">
          Thank you for reaching out to Netaji Youth Foundation. We will get
          back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex items-center gap-2 font-display font-bold uppercase text-xs tracking-[0.3em] text-black border-b-2 border-black pb-1 hover:text-orange hover:border-orange transition-colors"
        >
          Send another message
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

      <div className="mt-10 pt-8 border-t-2 border-black flex justify-end">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-black hover:bg-orange hover:text-black hover:border-orange transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending…" : "Send Message"}
          <ArrowUpRight
            size={18}
            className="group-hover:rotate-45 transition-transform"
          />
        </button>
      </div>
    </form>
  );
}

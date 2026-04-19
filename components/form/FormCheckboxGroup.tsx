"use client";

import { useState } from "react";

type Props = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
};

export default function FormCheckboxGroup({
  label,
  name,
  options,
  required,
}: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (value: string) => {
    setSelected((curr) =>
      curr.includes(value) ? curr.filter((v) => v !== value) : [...curr, value]
    );
  };

  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-black mb-1">
        {label}
        {required && <span className="text-orange ml-1">*</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isOn = selected.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              className={`inline-flex items-center font-display font-bold uppercase text-[11px] tracking-widest border-2 border-black px-4 py-2 transition-colors ${
                isOn
                  ? "bg-black text-volt"
                  : "bg-white text-black hover:bg-volt"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      {/* Hidden inputs so the form data still serializes if posted */}
      {selected.map((v) => (
        <input key={v} type="hidden" name={name} value={v} />
      ))}
    </fieldset>
  );
}

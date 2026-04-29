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
    <fieldset className="flex flex-col gap-2.5">
      <legend className="font-display font-medium text-[12px] tracking-wide text-neutral-500 mb-1">
        {label}
        {required && <span className="text-orange ml-0.5">*</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isOn = selected.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              className={`inline-flex items-center font-display font-medium text-[12px] tracking-wide rounded-full px-4 py-2 border transition-colors ${
                isOn
                  ? "bg-black text-white border-black"
                  : "bg-white text-neutral-600 border-neutral-300 hover:border-black hover:text-black"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      {selected.map((v) => (
        <input key={v} type="hidden" name={name} value={v} />
      ))}
    </fieldset>
  );
}

import { InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

export default function FormCheckbox({
  label,
  id,
  className = "",
  ...rest
}: Props) {
  const inputId = id ?? rest.name;
  return (
    <label
      htmlFor={inputId}
      className={`flex items-start gap-3 cursor-pointer group ${className}`}
    >
      <input
        id={inputId}
        type="checkbox"
        {...rest}
        className="mt-0.5 h-4 w-4 shrink-0 appearance-none border border-neutral-300 bg-white rounded-sm checked:bg-black checked:border-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 transition-colors cursor-pointer relative checked:after:content-['\2713'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:text-[10px] checked:after:font-bold"
      />
      <span className="font-body text-[13px] text-neutral-600 leading-snug">{label}</span>
    </label>
  );
}

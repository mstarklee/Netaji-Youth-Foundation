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
        className="mt-1 h-5 w-5 shrink-0 appearance-none border-2 border-black bg-white checked:bg-black checked:border-black focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 transition-colors cursor-pointer relative checked:after:content-['\2713'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-volt checked:after:text-sm checked:after:font-bold"
      />
      <span className="font-body text-sm text-black leading-snug">{label}</span>
    </label>
  );
}

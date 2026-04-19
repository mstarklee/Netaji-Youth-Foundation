import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
};

export default function FormField({
  label,
  hint,
  id,
  required,
  className = "",
  ...rest
}: Props) {
  const inputId = id ?? rest.name;
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={inputId}
        className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-black"
      >
        {label}
        {required && <span className="text-orange ml-1">*</span>}
      </label>
      <input
        id={inputId}
        required={required}
        {...rest}
        className="border-0 border-b-2 border-black bg-transparent py-3 font-body text-base text-black placeholder:text-neutral-400 focus:border-orange focus:outline-none focus:ring-0 transition-colors"
      />
      {hint && (
        <p className="font-body text-xs text-neutral-500">{hint}</p>
      )}
    </div>
  );
}

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
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={inputId}
        className="font-display font-medium text-[12px] tracking-wide text-neutral-500"
      >
        {label}
        {required && <span className="text-orange ml-0.5">*</span>}
      </label>
      <input
        id={inputId}
        required={required}
        {...rest}
        className="border-0 border-b border-neutral-300 bg-transparent py-2.5 font-body text-[15px] text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-0 transition-colors"
      />
      {hint && (
        <p className="font-body text-[11px] text-neutral-400">{hint}</p>
      )}
    </div>
  );
}

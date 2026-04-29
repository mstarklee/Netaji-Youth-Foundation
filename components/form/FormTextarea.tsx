import { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  hint?: string;
};

export default function FormTextarea({
  label,
  hint,
  id,
  required,
  className = "",
  rows = 4,
  ...rest
}: Props) {
  const textareaId = id ?? rest.name;
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={textareaId}
        className="font-display font-medium text-[12px] tracking-wide text-neutral-500"
      >
        {label}
        {required && <span className="text-orange ml-0.5">*</span>}
      </label>
      <textarea
        id={textareaId}
        required={required}
        rows={rows}
        {...rest}
        className="border border-neutral-300 bg-transparent p-3 font-body text-[15px] text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-0 transition-colors resize-y rounded-sm"
      />
      {hint && <p className="font-body text-[11px] text-neutral-400">{hint}</p>}
    </div>
  );
}

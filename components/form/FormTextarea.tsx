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
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={textareaId}
        className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-black"
      >
        {label}
        {required && <span className="text-orange ml-1">*</span>}
      </label>
      <textarea
        id={textareaId}
        required={required}
        rows={rows}
        {...rest}
        className="border-2 border-black bg-transparent p-4 font-body text-base text-black placeholder:text-neutral-400 focus:border-orange focus:outline-none focus:ring-0 transition-colors resize-y"
      />
      {hint && <p className="font-body text-xs text-neutral-500">{hint}</p>}
    </div>
  );
}

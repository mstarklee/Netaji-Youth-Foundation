import { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export default function FormSelect({
  label,
  options,
  placeholder,
  id,
  required,
  className = "",
  ...rest
}: Props) {
  const selectId = id ?? rest.name;
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={selectId}
        className="font-display font-medium text-[12px] tracking-wide text-neutral-500"
      >
        {label}
        {required && <span className="text-orange ml-0.5">*</span>}
      </label>
      <select
        id={selectId}
        required={required}
        defaultValue={rest.defaultValue ?? ""}
        {...rest}
        className="border-0 border-b border-neutral-300 bg-transparent py-2.5 font-body text-[15px] text-black focus:border-black focus:outline-none focus:ring-0 transition-colors appearance-none cursor-pointer"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

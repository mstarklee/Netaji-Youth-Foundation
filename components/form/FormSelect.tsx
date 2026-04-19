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
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={selectId}
        className="font-display font-bold uppercase text-[11px] tracking-[0.3em] text-black"
      >
        {label}
        {required && <span className="text-orange ml-1">*</span>}
      </label>
      <select
        id={selectId}
        required={required}
        defaultValue={rest.defaultValue ?? ""}
        {...rest}
        className="border-0 border-b-2 border-black bg-transparent py-3 font-body text-base text-black focus:border-orange focus:outline-none focus:ring-0 transition-colors appearance-none cursor-pointer"
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

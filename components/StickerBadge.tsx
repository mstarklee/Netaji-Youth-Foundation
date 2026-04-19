import { ReactNode } from "react";

type Variant = "volt" | "orange" | "white" | "black";

const STYLES: Record<Variant, string> = {
  volt: "bg-volt text-black border-black",
  orange: "bg-orange text-white border-black",
  white: "bg-white text-black border-black",
  black: "bg-black text-volt border-black",
};

export default function StickerBadge({
  children,
  className = "",
  rotate = -4,
  variant = "volt",
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
}) {
  const sizing =
    size === "sm"
      ? "text-[10px] px-2.5 py-1"
      : size === "lg"
      ? "text-sm px-4 py-2"
      : "text-xs px-3 py-1.5";

  return (
    <span
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-block font-display font-extrabold uppercase tracking-widest border-2 shadow-[4px_4px_0_0_#111111] ${STYLES[variant]} ${sizing} ${className}`}
    >
      {children}
    </span>
  );
}

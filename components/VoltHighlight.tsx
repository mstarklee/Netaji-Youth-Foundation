import { ReactNode } from "react";

export default function VoltHighlight({
  children,
  color = "volt",
}: {
  children: ReactNode;
  color?: "volt" | "orange";
}) {
  const fill = color === "volt" ? "#D7F61D" : "#FF5C00";
  return (
    <span className="relative inline-block">
      <svg
        aria-hidden="true"
        className="absolute left-0 -bottom-1 w-full h-[0.55em] -z-10"
        viewBox="0 0 200 18"
        preserveAspectRatio="none"
      >
        <path
          d="M2 10 C 40 2, 80 16, 120 8 S 190 4, 198 10 L 198 16 L 2 16 Z"
          fill={fill}
        />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}

type Variant = "volt" | "black" | "orange" | "white";

const BG: Record<Variant, string> = {
  volt: "bg-volt text-black",
  black: "bg-black text-white",
  orange: "bg-orange text-white",
  white: "bg-white text-black",
};

export default function MarqueeBar({
  items,
  variant = "volt",
  reverse = false,
  speed = 30,
}: {
  items: string[];
  variant?: Variant;
  reverse?: boolean;
  speed?: number;
}) {
  const content = [...items, ...items, ...items];
  return (
    <div
      className={`${BG[variant]} overflow-hidden py-3.5 select-none`}
    >
      <div
        className={reverse ? "animate-marquee-reverse" : "animate-marquee"}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex items-center gap-8 whitespace-nowrap pr-8">
          {content.map((item, i) => (
            <span
              key={i}
              className="font-display font-semibold text-sm md:text-base tracking-wide flex items-center gap-8"
            >
              {item}
              <span className="inline-block h-1 w-1 rounded-full bg-current opacity-40" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

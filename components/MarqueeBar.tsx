type Variant = "volt" | "black" | "orange" | "white";

const BG: Record<Variant, string> = {
  volt: "bg-volt text-black",
  black: "bg-black text-white",
  orange: "bg-orange text-black",
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
      className={`${BG[variant]} overflow-hidden border-y-2 border-black py-5 select-none`}
    >
      <div
        className={reverse ? "animate-marquee-reverse" : "animate-marquee"}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex items-center gap-10 whitespace-nowrap pr-10">
          {content.map((item, i) => (
            <span
              key={i}
              className="font-hero italic uppercase text-3xl md:text-5xl tracking-tight flex items-center gap-10"
            >
              {item}
              <span className="inline-block h-3 w-3 rotate-45 bg-current" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

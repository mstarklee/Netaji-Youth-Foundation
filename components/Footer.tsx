import Link from "next/link";

const INITIATIVES = [
  { label: "Sports Programs", href: "/programs" },
  { label: "Chess Fundamentals", href: "/programs" },
  { label: "Become a Trainer", href: "/become-a-trainer" },
  { label: "Impact", href: "/impact" },
];

const ABOUT_LINKS = [
  { label: "Our Mission", href: "/about" },
  { label: "Founder Story", href: "/founder-story" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Col 1: Brand */}
          <div>
            <p className="font-display font-bold tracking-tight text-[15px] text-white mb-3">
              Netaji Youth
            </p>
            <p className="font-body text-[13px] text-neutral-500 leading-relaxed">
              Empowering rural children in Tamil Nadu through sports, fitness,
              and structured discipline.
            </p>
          </div>

          {/* Col 2: Initiatives */}
          <div>
            <p className="font-display font-semibold text-[12px] tracking-wide text-neutral-400 mb-4">
              Initiatives
            </p>
            <ul className="space-y-2.5">
              {INITIATIVES.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-[13px] text-neutral-500 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: About Us */}
          <div>
            <p className="font-display font-semibold text-[12px] tracking-wide text-neutral-400 mb-4">
              About Us
            </p>
            <ul className="space-y-2.5">
              {ABOUT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-[13px] text-neutral-500 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: CTA + copyright */}
          <div className="flex flex-col justify-between gap-6">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 font-display font-semibold text-[12px] tracking-wide text-white hover:bg-white hover:text-black transition-colors"
            >
              Register a Child
            </Link>
            <p className="font-body text-[11px] text-neutral-600 leading-relaxed">
              &copy; 2026 Netaji Youth Foundation.
              <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

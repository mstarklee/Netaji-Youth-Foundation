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
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Col 1: Brand */}
          <div>
            <p className="font-display font-extrabold uppercase text-lg text-white mb-4">
              NETAJI YOUTH
            </p>
            <p className="font-body text-sm text-neutral-400 leading-relaxed">
              Empowering rural children in Tamil Nadu through sports, fitness,
              and structured discipline.
            </p>
          </div>

          {/* Col 2: Initiatives */}
          <div>
            <p className="font-display font-bold uppercase text-xs tracking-widest text-white mb-5">
              INITIATIVES
            </p>
            <ul className="space-y-3">
              {INITIATIVES.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: About Us */}
          <div>
            <p className="font-display font-bold uppercase text-xs tracking-widest text-white mb-5">
              ABOUT US
            </p>
            <ul className="space-y-3">
              {ABOUT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: CTA + copyright */}
          <div className="flex flex-col justify-between gap-8">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 font-display font-bold text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
            >
              REGISTER A CHILD →
            </Link>
            <p className="font-body text-xs text-neutral-500 leading-relaxed">
              © 2026 Netaji Youth Foundation.
              <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

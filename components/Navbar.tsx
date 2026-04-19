"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "FOUNDER", href: "/founder-story" },
  { label: "PROGRAMS", href: "/programs" },
  { label: "IMPACT", href: "/impact" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white">
        <div className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-display font-extrabold uppercase tracking-wide text-black text-lg"
          >
            NETAJI YOUTH
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-display font-semibold text-xs uppercase tracking-widest text-black transition-colors hover:text-black/50 pb-0.5 ${
                      active ? "border-b-2 border-black" : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="hidden md:inline-flex items-center rounded-full bg-black px-5 py-2 text-xs font-display font-bold uppercase tracking-widest text-white hover:bg-black/80 transition-colors"
            >
              REGISTER
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-1 text-black"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col p-8">
          <button
            onClick={() => setOpen(false)}
            className="self-end text-white mb-12"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-display font-extrabold text-4xl uppercase text-white hover:text-volt transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-display font-bold uppercase tracking-widest text-black hover:bg-volt transition-colors"
          >
            REGISTER
          </Link>
        </div>
      )}
    </>
  );
}

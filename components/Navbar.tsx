"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Founder", href: "/founder-story" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-extrabold uppercase tracking-tight text-black text-[15px]"
          >
            Netaji Youth
          </Link>

          {/* Center nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative font-display font-medium text-[13px] tracking-wide transition-colors ${
                      active ? "text-black" : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    {label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-black rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="hidden lg:inline-flex items-center rounded-full bg-black px-5 py-2 text-[12px] font-display font-semibold text-white hover:bg-neutral-800 transition-colors"
            >
              Register
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-1 text-black"
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-white flex flex-col px-6 py-6"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between mb-12">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="font-display font-extrabold uppercase tracking-tight text-black text-[15px]"
              >
                Netaji Youth
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="text-black"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile links */}
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }, i) => {
                const active = pathname === href;
                return (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block py-3 font-display font-semibold text-2xl tracking-tight transition-colors ${
                        active ? "text-black" : "text-neutral-400 hover:text-black"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-auto pb-4">
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-[13px] font-display font-semibold text-white hover:bg-neutral-800 transition-colors"
              >
                Register a Child
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

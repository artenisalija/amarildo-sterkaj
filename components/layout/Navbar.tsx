"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "About", href: "/#about" },
  { label: "Vision", href: "/#vision" },
  { label: "Influence", href: "/#influence" },
  { label: "Process", href: "/#process" },
  { label: "Ventures", href: "/#ventures" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-platinum/40 bg-ivory/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="container-lux flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-1" aria-label="Amarildo Sterkaj — home">
          <span className="font-serif text-2xl font-medium tracking-wide text-charcoal">A</span>
          <span className="h-1.5 w-1.5 self-center rounded-full bg-gold transition-transform duration-500 group-hover:scale-125" />
          <span className="font-serif text-2xl font-medium tracking-wide text-charcoal">S</span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-charcoal-soft transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/#contact"
            className="border border-gold/60 bg-ivory/60 px-6 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold shadow-(--shadow-btn-ghost) transition-all duration-500 hover:bg-gold hover:text-ivory hover:shadow-(--shadow-btn-hover)"
          >
            Work With Amarildo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }} className="block h-px w-6 bg-charcoal" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -3 : 0 }} className="block h-px w-6 bg-charcoal" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 top-20 z-40 bg-ivory lg:hidden"
          >
            <ul className="container-lux flex flex-col gap-2 pt-10">
              {[...links, { label: "Contact", href: "/#contact" }].map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-platinum/30 py-5 font-serif text-3xl font-light text-charcoal transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

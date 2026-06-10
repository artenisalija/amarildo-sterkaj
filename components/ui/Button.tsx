"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "ghost";
  className?: string;
};

/** Luxury CTA — gold fill or platinum-hairline ghost, with a slow hover lift. */
export function Button({ href, children, variant = "gold", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 px-9 py-4 text-[0.8125rem] font-medium uppercase tracking-[0.22em] transition-all duration-500";
  const styles =
    variant === "gold"
      ? "bg-gradient-to-b from-gold-soft via-gold to-gold text-ivory shadow-(--shadow-btn) ring-1 ring-inset ring-platinum/40 hover:bg-charcoal hover:from-charcoal hover:via-charcoal hover:to-charcoal hover:shadow-(--shadow-btn-hover)"
      : "border border-platinum bg-ivory/70 text-charcoal shadow-(--shadow-btn-ghost) hover:border-gold hover:text-gold hover:shadow-(--shadow-btn-hover)";

  return (
    <motion.div
      className="inline-block"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}

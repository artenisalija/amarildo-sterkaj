"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "gold", className = "" }: ButtonProps) {
  if (variant === "gold") {
    return (
      <motion.div
        className="inline-block"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href={href}
          className={`group relative inline-flex items-center gap-3 px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.24em] text-ivory overflow-hidden rounded-lg ${className}`}
        >
          {/* Premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-soft via-gold to-gold-rich transition-all duration-500 group-hover:shadow-[inset_0_-2px_8px_rgba(0,0,0,0.2)]" />

          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Underline accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-platinum via-gold-pale to-transparent transform scale-x-75 group-hover:scale-x-100 transition-transform duration-500" />

          {/* Content */}
          <span className="relative flex items-center gap-2">
            {children}
            <motion.span
              className="text-lg"
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden="true"
            >
              →
            </motion.span>
          </span>
        </Link>
      </motion.div>
    );
  }

  // Ghost variant
  return (
    <motion.div
      className="inline-block"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        className={`group relative inline-flex items-center gap-3 px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.24em] text-ivory overflow-hidden rounded-lg ${className}`}
      >
        {/* Animated border background */}
        <div className="absolute inset-0 bg-gradient-to-r from-platinum/40 via-gold/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Border */}
        <div className="absolute inset-0 border-2 border-platinum/70 transition-all duration-500 group-hover:border-gold" />

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

        {/* Content */}
        <span className="relative flex items-center gap-2 text-charcoal group-hover:text-gold transition-colors duration-500">
          {children}
          <motion.span
            className="text-lg"
            animate={{ x: [0, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            aria-hidden="true"
          >
            →
          </motion.span>
        </span>
      </Link>
    </motion.div>
  );
}

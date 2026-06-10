"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Slow-drifting platinum and gold abstract shapes with gentle scroll
 * parallax. Purely decorative — hidden from assistive technology.
 */
export function FloatingShapes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const slow = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const slower = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const reverse = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Champagne wash, upper right — richer */}
      <motion.div
        style={{ y: slow }}
        className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-champagne-deep/65 blur-3xl"
      />
      {/* Platinum mist, lower left — deeper */}
      <motion.div
        style={{ y: reverse }}
        className="absolute -bottom-48 -left-48 h-[32rem] w-[32rem] rounded-full bg-platinum/45 blur-3xl"
      />
      {/* Gold ring, drifting — more prominent */}
      <motion.div
        style={{ y: slower }}
        animate={{ y: [0, -24, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[14%] top-[22%] h-48 w-48 rounded-full border-2 border-gold/60 md:h-72 md:w-72"
      />
      {/* Solid gold orb — bolder */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-[12%] top-[30%] h-4 w-4 rounded-full bg-gold/80 shadow-lg"
      />
      {/* Platinum ring, lower right — more visible */}
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[18%] left-[20%] h-36 w-36 rounded-full border-2 border-platinum/70"
      />
      {/* Hairline diagonal — richer accent */}
      <motion.div
        style={{ y: reverse }}
        className="absolute right-[28%] top-[55%] h-px w-56 rotate-[-24deg] bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
    </div>
  );
}

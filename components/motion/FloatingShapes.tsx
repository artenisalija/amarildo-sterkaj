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
      {/* Champagne wash, upper right */}
      <motion.div
        style={{ y: slow }}
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-champagne/55 blur-3xl"
      />
      {/* Platinum mist, lower left */}
      <motion.div
        style={{ y: reverse }}
        className="absolute -bottom-48 -left-48 h-[30rem] w-[30rem] rounded-full bg-platinum/30 blur-3xl"
      />
      {/* Gold ring, drifting */}
      <motion.div
        style={{ y: slower }}
        animate={{ y: [0, -22, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[14%] top-[22%] h-44 w-44 rounded-full border border-gold-soft/50 md:h-64 md:w-64"
      />
      {/* Small solid gold orb */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-[12%] top-[30%] h-3 w-3 rounded-full bg-gold-soft/70"
      />
      {/* Platinum ring, lower right */}
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[18%] left-[20%] h-32 w-32 rounded-full border border-platinum/60"
      />
      {/* Hairline diagonal */}
      <motion.div
        style={{ y: reverse }}
        className="absolute right-[28%] top-[55%] h-px w-56 rotate-[-24deg] bg-gradient-to-r from-transparent via-gold-soft/60 to-transparent"
      />
    </div>
  );
}

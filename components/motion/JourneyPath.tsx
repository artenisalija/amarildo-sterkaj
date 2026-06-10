"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A winding platinum-and-gold line that draws itself as the visitor
 * scrolls — the visual thread of a journey running behind the entire
 * homepage. Decorative only; hidden from assistive technology.
 *
 * The viewBox is stretched to the full height of the page wrapper
 * (preserveAspectRatio="none") while vector-effect keeps the stroke
 * hairline-thin at every screen size.
 */
export function JourneyPath() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 22,
    restDelta: 0.001,
  });

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-[5] w-16 overflow-hidden opacity-60 sm:w-24 lg:inset-0 lg:w-full lg:opacity-100">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          {/* Gold threaded with platinum — the journey alternates between the two metals */}
          <linearGradient id="journey-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cdb277" />
            <stop offset="0.18" stopColor="#9aa0a9" />
            <stop offset="0.38" stopColor="#b08d3e" />
            <stop offset="0.56" stopColor="#c9ccd1" />
            <stop offset="0.76" stopColor="#cdb277" />
            <stop offset="1" stopColor="#9aa0a9" />
          </linearGradient>
        </defs>

        {/* Faint full route, always visible as a whisper of where the path leads */}
        <path
          d="M 50 0
             C 50 30, 5 55, 5 100
             S 95 170, 95 225
             S 5 305, 5 365
             S 95 445, 95 505
             S 5 585, 5 645
             S 95 725, 95 785
             S 8 865, 50 935
             L 50 1000"
          stroke="#c9ccd1"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* The drawn journey, revealed by scroll */}
        <motion.path
          d="M 50 0
             C 50 30, 5 55, 5 100
             S 95 170, 95 225
             S 5 305, 5 365
             S 95 445, 95 505
             S 5 585, 5 645
             S 95 725, 95 785
             S 8 865, 50 935
             L 50 1000"
          stroke="url(#journey-gradient)"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}

"use client";

import { MotionConfig } from "framer-motion";

/**
 * Global motion configuration. `reducedMotion="user"` makes every
 * Framer Motion animation respect prefers-reduced-motion automatically.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

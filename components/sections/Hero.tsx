"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FloatingShapes } from "@/components/motion/FloatingShapes";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-ivory via-ivory to-ivory-soft"
    >
      <FloatingShapes />

      <div className="container-lux relative z-10 flex flex-col items-center pb-24 pt-36 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="eyebrow flex items-center gap-5"
        >
          <span className="inline-block h-px w-12 bg-gold/60" aria-hidden="true" />
          Investor · Strategist · Builder of Opportunity
          <span className="inline-block h-px w-12 bg-gold/60" aria-hidden="true" />
        </motion.p>

        <h1 className="mt-10 font-serif font-light leading-[1.02] text-charcoal">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease }}
              className="block text-6xl tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            >
              Amarildo
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.55, ease }}
              className="block text-6xl tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            >
              <span className="italic text-gilded">Sterkaj</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease }}
          className="mt-10 max-w-xl text-base leading-relaxed text-charcoal-soft md:text-lg"
        >
          Elevating people, projects, and capital toward their highest
          expression — through vision, trust, and relationships built at the
          premium level.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="/#contact" variant="gold">
            Work With Amarildo
          </Button>
          <Button href="/#vision" variant="ghost">
            Explore His Vision
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="block h-14 w-px overflow-hidden bg-platinum/50">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-1/2 w-full bg-gold"
          />
        </span>
      </motion.a>
    </section>
  );
}

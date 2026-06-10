"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-screen overflow-hidden"
    >
      {/* Full-screen portrait image — aligned to top to show face clearly */}
      <Image
        src="/amarildo-scaled.jpg"
        alt="Amarildo Sterkaj — Investor, Strategist, Builder"
        fill
        priority
        className="absolute inset-0 object-cover object-top"
        sizes="100vw"
      />

      {/* Dark overlay for strong text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-black/15" />

      {/* Content */}
      <div className="container-lux relative z-10 flex flex-col justify-between py-28 md:py-40 min-h-screen">
        {/* Top — room for navbar */}
        <div />

        {/* Bottom content — text and CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="max-w-2xl"
        >
          <h1 className="font-serif text-5xl font-light leading-[1.08] text-ivory sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">Amarildo</span>
            <span className="block italic text-gilded">Sterkaj</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/#contact" variant="gold">
              Work Together
            </Button>
            <Button href="/#vision" variant="ghost">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="block h-12 w-px overflow-hidden bg-ivory/50">
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

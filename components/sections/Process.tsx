"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" aria-label="The elevation process" className="scroll-mt-20 bg-ivory-soft py-32 md:py-44">
      <div className="container-lux">
        <SectionHeading
          eyebrow="The Elevation Process"
          title="Four movements. One outcome: lasting value."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-24">
          {/* Connecting line, drawn on scroll */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-gradient-to-r from-gold/50 via-platinum to-platinum/20 lg:block"
          />

          <ol className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-ivory-soft">
                  <span className="font-serif text-lg italic text-gold">{step.number}</span>
                </div>
                <h3 className="mt-7 font-serif text-2xl font-normal leading-snug text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal-soft">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

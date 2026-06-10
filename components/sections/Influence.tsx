"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { influenceAreas } from "@/lib/content";

export function Influence() {
  return (
    <section id="influence" aria-label="Areas of influence" className="scroll-mt-20 bg-gradient-to-br from-ivory via-ivory to-champagne-deep/35 py-32 md:py-44">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Areas of Influence"
          title="Where capital, strategy, and relationships converge."
        />

        <ul className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {influenceAreas.map((area, i) => (
            <motion.li
              key={area.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.08 * (i % 3), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative border border-platinum/60 bg-gradient-to-br from-ivory to-champagne/20 p-10 shadow-md transition-all duration-500 hover:border-gold/50 hover:shadow-lg hover:bg-gradient-to-br hover:from-ivory hover:to-champagne/35"
            >
              {/* Gold corner accent that draws on hover */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-14 w-px bg-gold/60 transition-all duration-500 md:h-10 md:bg-gold/0 md:group-hover:h-14 md:group-hover:bg-gold/70"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-14 bg-gold/60 transition-all duration-500 md:w-10 md:bg-gold/0 md:group-hover:w-14 md:group-hover:bg-gold/70"
              />

              <span className="font-serif text-sm italic text-platinum-deep" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-[1.65rem] font-normal leading-snug text-charcoal transition-colors duration-500 group-hover:text-gold">
                {area.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
                {area.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

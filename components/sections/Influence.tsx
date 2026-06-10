"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { influenceAreas } from "@/lib/content";

export function Influence() {
  return (
    <section id="influence" aria-label="Areas of influence" className="scroll-mt-20 bg-ivory py-32 md:py-44">
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
              className="group relative border border-platinum/40 bg-ivory p-10 shadow-(--shadow-lux) transition-shadow duration-500 hover:shadow-(--shadow-lux-hover)"
            >
              {/* Gold corner accent that draws on hover */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-10 w-px bg-gold/0 transition-all duration-500 group-hover:h-14 group-hover:bg-gold/70"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-10 bg-gold/0 transition-all duration-500 group-hover:w-14 group-hover:bg-gold/70"
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

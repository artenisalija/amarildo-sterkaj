"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ventures } from "@/lib/content";

export function Ventures() {
  return (
    <section id="ventures" aria-label="Selected ventures and highlights" className="scroll-mt-20 bg-ivory py-32 md:py-44">
      <div className="container-lux">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected Ventures"
            title="A quiet portfolio of elevation."
          />
          <p className="max-w-xs text-sm leading-relaxed text-charcoal-mist md:pb-2">
            A representative glimpse. The most meaningful work is shared
            privately, by introduction.
          </p>
        </div>

        <ul className="mt-20 grid gap-8 md:grid-cols-2">
          {ventures.map((venture, i) => (
            <motion.li
              key={venture.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1 * (i % 2), ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden border border-platinum/40 bg-gradient-to-br from-ivory to-ivory-soft p-10 shadow-(--shadow-lux) transition-shadow duration-500 hover:shadow-(--shadow-lux-hover)"
            >
              {/* Gold sheen sweep on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-[76%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-gold-pale/50 to-transparent opacity-70 transition-all duration-1000 md:-left-1/2 md:opacity-0 md:group-hover:left-[120%] md:group-hover:opacity-100"
              />

              <div className="flex items-center justify-between gap-4">
                <span className="eyebrow !tracking-[0.26em]">{venture.category}</span>
                <span className="rounded-full border border-platinum/50 px-4 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-charcoal-mist">
                  {venture.status}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-3xl font-light leading-snug text-charcoal transition-colors duration-500 group-hover:text-gold">
                {venture.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal-soft">
                {venture.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ventures } from "@/lib/content";

const ventureImages = [
  "/1-683x1024.jpg",
  "/image00001-768x1024.jpeg",
  "/1-683x1024.jpg",
  "/image00001-768x1024.jpeg",
];

export function Ventures() {
  return (
    <section id="ventures" aria-label="Selected ventures and highlights" className="scroll-mt-20 bg-gradient-to-br from-ivory to-champagne/40 py-32 md:py-44">
      <div className="container-lux">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected Ventures"
            title="A quiet portfolio of elevation."
          />
          <p className="max-w-xs text-sm leading-relaxed text-charcoal-mist md:pb-2">
            A representative glimpse. The most meaningful work is shared privately, by introduction.
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
              className="group relative overflow-hidden border border-platinum/60 shadow-md transition-all duration-500 hover:shadow-lg"
            >
              {/* Image background */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={ventureImages[i % ventureImages.length]}
                  alt={venture.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Text content */}
              <div className="bg-gradient-to-br from-ivory via-champagne/15 to-champagne/25 p-10">
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
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

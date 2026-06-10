import { Reveal } from "@/components/motion/Reveal";
import { visionPrinciples } from "@/lib/content";

export function Vision() {
  return (
    <section id="vision" aria-label="Vision and philosophy" className="scroll-mt-20 bg-gradient-to-b from-champagne-deep/60 to-ivory py-32 md:py-44">
      <div className="container-lux">
        <Reveal>
          <p className="text-center font-serif text-4xl font-light italic leading-snug text-charcoal md:text-5xl">
            Long-term value. Premium partnerships. Built opportunity.
          </p>
        </Reveal>

        <div className="mx-auto mt-24 grid max-w-5xl gap-px overflow-hidden bg-platinum/30 md:grid-cols-3">
          {visionPrinciples.map((principle, i) => (
            <Reveal key={principle.number} delay={0.12 * i} className="bg-ivory-soft p-12">
              <h3 className="font-serif text-2xl font-normal text-charcoal">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
                {principle.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

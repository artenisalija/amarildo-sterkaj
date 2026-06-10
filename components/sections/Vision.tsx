import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { visionPrinciples } from "@/lib/content";

export function Vision() {
  return (
    <section id="vision" aria-label="Vision and philosophy" className="scroll-mt-20 bg-ivory-soft py-32 md:py-44">
      <div className="container-lux">
        <Reveal>
          <span className="eyebrow flex items-center justify-center gap-4">
            <span className="inline-block h-px w-10 bg-gold/60" aria-hidden="true" />
            The Vision
            <span className="inline-block h-px w-10 bg-gold/60" aria-hidden="true" />
          </span>
        </Reveal>

        <div className="mx-auto mt-12 max-w-4xl text-center">
          <TextReveal
            as="h2"
            className="font-serif text-4xl font-light leading-[1.18] text-charcoal md:text-6xl"
            text="Growth is quiet. Value is patient. Opportunity belongs to those who build it."
          />
          <Reveal as="p" delay={0.3} className="mx-auto mt-10 max-w-2xl text-base leading-loose text-charcoal-soft">
            Amarildo&rsquo;s philosophy is simple to state and demanding to live:
            pursue long-term value over short-term noise, choose premium
            partnerships over crowded rooms, and treat every opportunity as
            something to be shaped — not merely seized.
          </Reveal>
        </div>

        <div className="mx-auto mt-24 grid max-w-5xl gap-px overflow-hidden bg-platinum/30 md:grid-cols-3">
          {visionPrinciples.map((principle, i) => (
            <Reveal key={principle.number} delay={0.12 * i} className="bg-ivory-soft p-12">
              <span className="font-serif text-3xl font-light italic text-gold" aria-hidden="true">
                {principle.number}
              </span>
              <h3 className="mt-5 font-serif text-2xl font-normal text-charcoal">
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

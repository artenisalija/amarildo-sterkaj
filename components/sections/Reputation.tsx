import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

export function Reputation() {
  return (
    <section id="reputation" aria-label="Reputation" className="scroll-mt-20 bg-gradient-to-b from-champagne-deep/50 to-ivory py-32 md:py-44">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Reputation"
          title="Spoken of quietly, in the right rooms."
          align="center"
          className="mx-auto"
        />

        <ul className="mt-24 grid gap-14 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.attribution} as="li" delay={0.12 * i} className="flex flex-col">
              <figure className="flex h-full flex-col">
                <span className="font-serif text-6xl leading-none text-gold/40" aria-hidden="true">
                  “
                </span>
                <blockquote className="mt-2 flex-1 font-serif text-xl font-light italic leading-relaxed text-charcoal">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-8">
                  <div className="hairline mb-6" aria-hidden="true" />
                  <span className="block text-[0.75rem] font-medium uppercase tracking-[0.2em] text-charcoal-soft">
                    {testimonial.attribution}
                  </span>
                  <span className="mt-1 block text-xs italic text-charcoal-mist">
                    {testimonial.location}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

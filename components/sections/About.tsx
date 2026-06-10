import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function About() {
  return (
    <section id="about" aria-label="About Amarildo Sterkaj" className="scroll-mt-20 bg-gradient-to-br from-ivory to-champagne-deep/40 py-32 md:py-44">
      <div className="container-lux grid gap-20 lg:grid-cols-12 lg:gap-12">
        {/* Portrait — full focus */}
        <Reveal delay={0} className="lg:col-span-6">
          <figure className="relative">
            <span
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 h-full w-full bg-gradient-to-br from-champagne-deep/60 to-platinum/40"
            />
            <div className="relative overflow-hidden shadow-md">
              <Image
                src={`${basePath}/Amarildo Sterkaj.jpg`}
                alt="Portrait of Amarildo Sterkaj"
                width={1024}
                height={1365}
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="h-auto w-full object-cover object-center"
              />
              <span className="absolute inset-5 border border-ivory/50" aria-hidden="true" />
            </div>
          </figure>
        </Reveal>

        {/* Minimal text — statement + values */}
        <div className="flex flex-col justify-center gap-8 lg:col-span-6">
          <Reveal>
            <p className="font-serif text-2xl font-light italic leading-relaxed text-charcoal md:text-3xl">
              Vision. Trust. Long-term value.
            </p>
          </Reveal>

          <Reveal as="p" delay={0.1} className="text-sm leading-loose text-charcoal-soft">
            Investor and strategist working at the intersection of capital, opportunity, and relationships.
            His work elevates people, companies, and partnerships toward their highest expression.
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="grid grid-cols-3 gap-6">
              {[
                { term: "Vision", detail: "See beyond surface" },
                { term: "Trust", detail: "Built over time" },
                { term: "Value", detail: "That compounds" },
              ].map((item) => (
                <div key={item.term}>
                  <dt className="font-serif text-lg italic text-gold">{item.term}</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-charcoal-mist">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

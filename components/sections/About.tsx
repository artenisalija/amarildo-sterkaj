import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function About() {
  return (
    <section id="about" aria-label="About Amarildo Sterkaj" className="scroll-mt-20 bg-ivory py-32 md:py-44">
      <div className="container-lux grid gap-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow flex items-center gap-4">
              <span className="inline-block h-px w-10 bg-gold/60" aria-hidden="true" />
              About
            </span>
          </Reveal>
          <TextReveal
            as="h2"
            delay={0.15}
            className="mt-6 font-serif text-4xl font-light leading-[1.15] text-charcoal md:text-5xl"
            text="A person of vision, trusted where it matters most."
          />

          {/* Portrait, set on a champagne plate with a gold inner frame */}
          <Reveal delay={0.3} className="mt-14">
            <figure className="relative max-w-sm">
              {/* Offset champagne plate behind the portrait */}
              <span
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 h-full w-full bg-gradient-to-br from-champagne/80 to-platinum/30"
              />
              <div className="relative overflow-hidden shadow-(--shadow-lux)">
                <Image
                  src={`${basePath}/headshot.jpg`}
                  alt="Portrait of Amarildo Sterkaj"
                  width={640}
                  height={641}
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="h-auto w-full object-cover"
                />
                <span className="absolute inset-4 border border-ivory/60" aria-hidden="true" />
              </div>
              <figcaption className="mt-5 flex items-baseline gap-4">
                <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal-mist">
                  Amarildo Sterkaj
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center gap-10 lg:col-span-6 lg:col-start-7">
          <Reveal as="p" className="font-serif text-2xl font-light italic leading-relaxed text-charcoal-soft md:text-[1.7rem]">
            “Elevation is not an event. It is a discipline — applied to people,
            to capital, and to ideas.”
          </Reveal>

          <div className="hairline" aria-hidden="true" />

          <Reveal as="p" delay={0.1} className="text-base leading-loose text-charcoal-soft">
            Amarildo Sterkaj operates at the intersection of capital, strategy,
            and relationships. His work connects people, ideas, and
            opportunities — quietly assembling the conditions under which
            ambitious projects become inevitable.
          </Reveal>

          <Reveal as="p" delay={0.2} className="text-base leading-loose text-charcoal-soft">
            With an investor&rsquo;s discipline and a builder&rsquo;s instinct, he is
            sought out by founders, principals, and partners who value three
            things above all: discretion, clarity, and a long-term view. The
            result is a reputation built not on volume, but on outcomes.
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="grid grid-cols-3 gap-6 pt-4">
              {[
                { term: "Vision", detail: "Seeing the move behind the move" },
                { term: "Trust", detail: "The only currency that compounds" },
                { term: "Elevation", detail: "Raising every room he enters" },
              ].map((item) => (
                <div key={item.term}>
                  <dt className="font-serif text-xl italic text-gold">{item.term}</dt>
                  <dd className="mt-2 text-xs leading-relaxed tracking-wide text-charcoal-mist">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

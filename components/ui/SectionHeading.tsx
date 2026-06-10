import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

/** Editorial section header: gold eyebrow + large serif title. */
export function SectionHeading({ eyebrow, title, align = "left", className = "" }: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-5 ${alignment} ${className}`}>
      <Reveal>
        <span className="eyebrow flex items-center gap-4">
          <span className="inline-block h-px w-10 bg-gold/60" aria-hidden="true" />
          {eyebrow}
          {align === "center" && <span className="inline-block h-px w-10 bg-gold/60" aria-hidden="true" />}
        </span>
      </Reveal>
      <Reveal delay={0.1} as="h2" className="max-w-3xl font-serif text-5xl font-light leading-[1.1] text-charcoal md:text-6xl lg:text-7xl">
        {title}
      </Reveal>
    </div>
  );
}

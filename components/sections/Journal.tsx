import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Homepage teaser for the blog — the three most recent essays. */
export function Journal() {
  const latest = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <section id="journal" aria-label="From the journal" className="scroll-mt-20 bg-ivory-soft py-32 md:py-44">
      <div className="container-lux">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The Journal"
            title="Thinking, written down."
          />
          <Reveal delay={0.2}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 border-b border-gold/50 pb-1 text-[0.75rem] font-medium uppercase tracking-[0.22em] text-gold transition-colors hover:text-charcoal"
            >
              All essays
              <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">→</span>
            </Link>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-14 lg:grid-cols-3 lg:gap-10">
          {latest.map((post, i) => (
            <Reveal key={post.slug} as="li" delay={0.12 * i}>
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                <div className="flex items-center gap-4 text-[0.65rem] font-medium uppercase tracking-[0.2em]">
                  <span className="text-gold">{post.category}</span>
                  <span className="h-px w-8 bg-platinum" aria-hidden="true" />
                  <span className="text-charcoal-mist">{post.readTime}</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl font-light leading-snug text-charcoal transition-colors duration-500 group-hover:text-gold">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-soft">
                  {post.excerpt}
                </p>
                <time dateTime={post.date} className="mt-8 block text-xs italic text-charcoal-mist">
                  {formatDate(post.date)}
                </time>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

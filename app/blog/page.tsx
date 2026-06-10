import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Notes on opportunity, long-term value, trust, and the discipline of elevation — by Amarildo Sterkaj.",
  openGraph: {
    title: "The Journal — Amarildo Sterkaj",
    description:
      "Notes on opportunity, long-term value, trust, and the discipline of elevation.",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.slug !== featured.slug);

  return (
    <main className="bg-ivory">
      {/* Journal masthead */}
      <header className="border-b border-platinum/40 bg-ivory-soft pb-20 pt-44">
        <div className="container-lux text-center">
          <Reveal>
            <span className="eyebrow flex items-center justify-center gap-4">
              <span className="inline-block h-px w-10 bg-gold/60" aria-hidden="true" />
              The Journal
              <span className="inline-block h-px w-10 bg-gold/60" aria-hidden="true" />
            </span>
          </Reveal>
          <TextReveal
            as="h1"
            delay={0.15}
            className="mx-auto mt-8 max-w-3xl font-serif text-5xl font-light leading-[1.1] text-charcoal md:text-7xl"
            text="Notes on opportunity, value, and the long game."
          />
          <Reveal as="p" delay={0.4} className="mx-auto mt-8 max-w-xl text-base leading-loose text-charcoal-soft">
            Occasional essays from Amarildo Sterkaj — on strategy, trust,
            partnerships, and the quiet discipline of building things that last.
          </Reveal>
        </div>
      </header>

      {/* Featured essay */}
      <section aria-label="Featured essay" className="border-b border-platinum/30 py-20 md:py-28">
        <div className="container-lux">
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-champagne/70 via-ivory-soft to-platinum/30 lg:col-span-6">
                <span className="font-serif text-8xl font-light italic text-gold/25 transition-transform duration-700 group-hover:scale-110" aria-hidden="true">
                  {featured.title.charAt(0)}
                </span>
                <span className="absolute inset-5 border border-gold/20 transition-all duration-700 group-hover:inset-3" aria-hidden="true" />
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.22em]">
                  <span className="text-gold">{featured.category}</span>
                  <span className="h-px w-8 bg-platinum" aria-hidden="true" />
                  <span className="text-charcoal-mist">{formatDate(featured.date)}</span>
                </div>
                <h2 className="mt-5 font-serif text-4xl font-light leading-[1.12] text-charcoal transition-colors duration-500 group-hover:text-gold md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 text-base leading-loose text-charcoal-soft">{featured.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-3 text-[0.75rem] font-medium uppercase tracking-[0.22em] text-gold">
                  Read the essay
                  <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Essay index */}
      <section aria-label="All essays" className="py-20 md:py-28">
        <div className="container-lux">
          <ul className="grid gap-px overflow-hidden border border-platinum/30 bg-platinum/30 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} as="li" delay={0.08 * (i % 3)} className="bg-ivory">
                <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col p-9 transition-colors duration-500 hover:bg-ivory-soft">
                  <div className="flex items-center justify-between text-[0.65rem] font-medium uppercase tracking-[0.2em]">
                    <span className="text-gold">{post.category}</span>
                    <span className="text-charcoal-mist">{post.readTime}</span>
                  </div>
                  <h2 className="mt-5 font-serif text-[1.7rem] font-light leading-snug text-charcoal transition-colors duration-500 group-hover:text-gold">
                    {post.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-soft">{post.excerpt}</p>
                  <time dateTime={post.date} className="mt-8 block text-xs italic text-charcoal-mist">
                    {formatDate(post.date)}
                  </time>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

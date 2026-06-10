import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { getPost, posts } from "@/lib/blog";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [site.name],
      url: `${site.url}/blog/${post.slug}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const nextPost = posts[(currentIndex + 1) % posts.length];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <main className="bg-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="pb-24 pt-44">
        {/* Essay header */}
        <header className="container-lux">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.22em]">
                <span className="text-gold">{post.category}</span>
                <span className="h-px w-8 bg-platinum" aria-hidden="true" />
                <span className="text-charcoal-mist">{post.readTime}</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-8 font-serif text-4xl font-light leading-[1.12] text-charcoal md:text-6xl">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-[0.75rem] uppercase tracking-[0.22em] text-charcoal-mist">
                By {site.name} ·{" "}
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mx-auto mt-12 hairline max-w-md" aria-hidden="true" />
            </Reveal>
          </div>
        </header>

        {/* Essay body */}
        <div className="container-lux mt-16">
          <div className="mx-auto max-w-2xl">
            {post.content.map((paragraph, i) => (
              <Reveal
                key={i}
                as="p"
                className={`mb-8 leading-loose text-charcoal-soft ${
                  i === 0
                    ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-light first-letter:leading-[0.85] first-letter:text-gold"
                    : ""
                }`}
              >
                {paragraph}
              </Reveal>
            ))}

            <Reveal as="blockquote" className="my-14 border-l-2 border-gold/60 py-2 pl-8">
              <p className="font-serif text-2xl font-light italic leading-relaxed text-charcoal md:text-3xl">
                {post.pullQuote}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Footer navigation */}
        <footer className="container-lux mt-20">
          <div className="mx-auto flex max-w-2xl flex-col gap-10">
            <div className="hairline" aria-hidden="true" />
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-3 text-[0.75rem] font-medium uppercase tracking-[0.22em] text-charcoal-soft transition-colors hover:text-gold"
              >
                <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:-translate-x-1.5">←</span>
                All essays
              </Link>
              <Link href={`/blog/${nextPost.slug}`} className="group text-left sm:text-right">
                <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-charcoal-mist">
                  Next essay
                </span>
                <span className="mt-1 block font-serif text-xl font-light italic text-charcoal transition-colors duration-500 group-hover:text-gold">
                  {nextPost.title}
                </span>
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}

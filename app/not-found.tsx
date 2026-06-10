import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center">
      <span className="font-serif text-8xl font-light italic text-gold/40" aria-hidden="true">
        404
      </span>
      <h1 className="mt-6 font-serif text-4xl font-light text-charcoal">
        This door doesn&rsquo;t open.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-soft">
        The page you&rsquo;re looking for has moved, or was never on the map.
        The right rooms are this way.
      </p>
      <Link
        href="/"
        className="mt-10 border border-gold/60 px-8 py-3.5 text-[0.75rem] font-medium uppercase tracking-[0.22em] text-gold transition-all duration-500 hover:bg-gold hover:text-ivory"
      >
        Return home
      </Link>
    </main>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-platinum/40 bg-ivory-soft">
      <div className="container-lux flex flex-col gap-12 py-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-3xl font-light text-charcoal">
            Amarildo <span className="italic text-gold">Sterkaj</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
            Investor. Strategist. Builder of Opportunity. Elevating people,
            projects, and partnerships toward long-term value.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "About", href: "/#about" },
              { label: "Vision", href: "/#vision" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/#contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-charcoal-soft transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-platinum/30">
        <div className="container-lux flex flex-col gap-2 py-6 text-xs tracking-wide text-charcoal-mist md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="italic">Discretion. Clarity. Long-term value.</p>
        </div>
      </div>
    </footer>
  );
}

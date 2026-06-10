# Amarildo Sterkaj — Personal Brand Website

A premium, light-mode personal brand website for **Amarildo Sterkaj** — investor, strategist, and builder of opportunity. Platinum and gold meet in a bright, editorial-luxury environment: ivory backgrounds, champagne surfaces, platinum hairlines, and warm gold accents.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 4** (CSS-first theme tokens in `app/globals.css`)
- **Framer Motion 12** for all animation (no Three.js)
- **next/font** — Cormorant Garamond (display serif) + Jost (body sans), self-hosted at build time

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

> **Note:** Node 18.18+ required (Node 20/22/24 recommended). If `npm install` fails with an SSL cipher error on an older npm, run `npx -y npm@11 install` instead.

## Project Structure

```
app/
  layout.tsx            # Root layout: fonts, metadata, JSON-LD, nav/footer
  page.tsx              # Homepage (all sections)
  globals.css           # Tailwind v4 theme tokens + luxury utilities
  not-found.tsx         # Branded 404
  opengraph-image.tsx   # Generated OG image
  sitemap.ts            # Sitemap (home, blog, posts)
  robots.ts             # Robots rules
  blog/
    page.tsx            # The Journal — blog index
    [slug]/page.tsx     # Essay pages (static, with article JSON-LD)
components/
  layout/               # Navbar, Footer
  motion/               # MotionProvider, Reveal, TextReveal, FloatingShapes
  sections/             # Hero, About, Vision, Influence, Process,
                        # Ventures, Reputation, Contact
  ui/                   # Button, SectionHeading
lib/
  site.ts               # Site-wide constants (name, URL, socials)
  content.ts            # Homepage content data
  blog.ts               # Blog posts data + helpers
```

## Design System

| Token | Value | Use |
| --- | --- | --- |
| `ivory` | `#fbf8f2` | Page background |
| `ivory-soft` | `#f6f1e7` | Alternate section background |
| `champagne` | `#ece3d0` | Warm surfaces, decorative washes |
| `platinum` | `#c9ccd1` | Hairlines, borders, silver details |
| `gold` | `#b08d3e` | Accents, CTAs, eyebrows |
| `charcoal` | `#2f2c27` | Headings & primary text |
| `charcoal-soft` | `#5d574c` | Body text |

Typography: **Cormorant Garamond** (light/normal, italic accents) for headings; **Jost** for body, labels, and UI.

## Animation

All motion runs through Framer Motion with a shared luxury ease (`cubic-bezier(0.22, 1, 0.36, 1)`):

- Staggered hero entrance with masked line reveals
- Floating platinum/gold shapes with scroll parallax (`useScroll` + `useTransform`)
- Scroll-triggered fade-up reveals (`Reveal`) and word-stagger headlines (`TextReveal`)
- Gold sheen sweeps and corner-draw hover states on cards
- **Reduced motion respected globally** via `<MotionConfig reducedMotion="user">` plus a CSS `prefers-reduced-motion` guard for smooth scrolling

## SEO & Accessibility

- Per-page metadata with OpenGraph + Twitter cards, `metadataBase`, title templates
- Generated OG image (`app/opengraph-image.tsx`)
- `sitemap.xml` and `robots.txt` via the Metadata API
- JSON-LD: `Person` (site-wide) and `Article` (blog posts)
- Semantic landmarks (`header`, `main`, `nav`, `footer`, `article`), one `h1` per page, ordered heading hierarchy
- Labelled form fields, focus-visible styles, `aria` labels on icon-only controls, decorative elements hidden from AT

## Customization

- **Contact form** — `components/sections/Contact.tsx` currently confirms client-side. Wire `handleSubmit` to your email provider or an API route.
- **Social links** — edit `lib/site.ts` (Instagram, LinkedIn, WhatsApp placeholders).
- **Domain** — update `site.url` in `lib/site.ts` for correct canonical/OG URLs.
- **Content** — all copy lives in `lib/content.ts` and `lib/blog.ts`.

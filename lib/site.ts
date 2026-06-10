export const site = {
  name: "Amarildo Sterkaj",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://amarildosterkaj.com",
  tagline: "Investor. Strategist. Builder of Opportunity.",
  description:
    "Amarildo Sterkaj is an investor, strategic thinker, and connector who elevates people, projects, and opportunities — building long-term value through trust, vision, and premium partnerships.",
  email: "private@amarildosterkaj.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com/", handle: "@amarildosterkaj" },
    { label: "LinkedIn", href: "https://linkedin.com/", handle: "in/amarildosterkaj" },
    { label: "WhatsApp", href: "https://wa.me/", handle: "Private line" },
  ],
} as const;

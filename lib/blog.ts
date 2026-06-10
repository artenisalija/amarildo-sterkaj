export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO date
  readTime: string;
  featured?: boolean;
  content: string[];
  pullQuote: string;
};

export const posts: Post[] = [
  {
    slug: "the-quiet-architecture-of-opportunity",
    title: "The Quiet Architecture of Opportunity",
    excerpt:
      "Opportunities are rarely found. They are assembled — piece by piece, relationship by relationship — long before anyone calls them lucky.",
    category: "Strategy",
    date: "2026-05-18",
    readTime: "6 min read",
    featured: true,
    pullQuote: "By the time an opportunity looks obvious, the architecture beneath it was finished years ago.",
    content: [
      "People speak about opportunity as though it were weather — something that arrives, unannounced, and favors whoever happens to be standing outside. Anyone who has built anything of consequence knows better. Opportunity has an architecture, and that architecture is built quietly, deliberately, and usually long before the moment anyone would recognize as the 'break.'",
      "The first beam in that structure is positioning. Not marketing — positioning. Knowing precisely what you are the answer to, and making sure the small number of people who matter know it too. A well-positioned person does not chase rooms; rooms develop a reason to call them.",
      "The second is trust, accumulated in small denominations. Every kept confidence, every accurate read, every deal where you protected the other side's interest as carefully as your own — these compound. Trust is the only asset class where the yield curve always slopes upward for the patient.",
      "The third is timing, which is mostly the discipline of readiness. You cannot schedule the moment a market turns or a principal decides to sell. You can only ensure that when it happens, you are already in the conversation, already understood, already trusted. That is what preparation actually means at this level.",
      "Build the architecture and the opportunities arrive looking like coincidences. Neglect it, and you will spend your career chasing doors that were never going to open for you anyway.",
    ],
  },
  {
    slug: "trust-is-the-only-currency",
    title: "Trust Is the Only Currency That Compounds",
    excerpt:
      "Capital can be raised, talent can be hired, attention can be bought. Trust can only be earned — slowly — and lost in an afternoon.",
    category: "Relationships",
    date: "2026-04-02",
    readTime: "5 min read",
    pullQuote: "Every other asset depreciates without attention. Trust is the one that compounds in silence.",
    content: [
      "In every market I have ever observed, the scarcest resource is not capital. Capital is abundant and increasingly impatient. The scarce resource is the person whose word closes the gap that contracts cannot.",
      "Trust at the premium level is built on three behaviors, none of them complicated. The first is discretion: what is shared with you stays with you, permanently, without exception. The second is accuracy: when you give a read on a person, a deal, or a risk, it turns out to be right often enough that your assessment moves decisions. The third is alignment: people can see, over years, that you win when they win — never instead of them.",
      "What makes trust remarkable as an asset is its compounding behavior. A single decade-old relationship, properly maintained, can produce more value than a thousand new contacts. The introduction that changes a company's trajectory almost always travels along a line of trust that was laid years earlier, for no immediate reason.",
      "This is why the long game is not a sentimental preference. It is the rational strategy. The people who treat every interaction as a transaction cap their own upside; the people who treat every interaction as a deposit build something that pays for the rest of their lives.",
    ],
  },
  {
    slug: "rooms-before-you-need-them",
    title: "Build the Rooms Before You Need Them",
    excerpt:
      "The strongest networks are built in calm weather. By the time you need a room, it is too late to build one.",
    category: "Influence",
    date: "2026-02-21",
    readTime: "4 min read",
    pullQuote: "A network assembled in urgency is a queue. A network assembled in calm is a council.",
    content: [
      "There is a particular kind of phone call that reveals everything about how someone has built their life: the call made under pressure. For some, it is answered on the second ring, by someone who has already heard and is already moving. For others, it is a cold call dressed up as a warm one — and everyone can tell.",
      "The difference was determined years earlier. Relationships built when you need nothing carry a different signature than those built in urgency. They are offered freely, reciprocated naturally, and tested gradually. By the time stakes appear, the trust is already load-bearing.",
      "Practically, this means investing in people whose excellence you admire before there is any transaction in sight. It means making introductions that benefit you nothing. It means being the person who remembers, follows up, and shows up — across years, without a ledger.",
      "The compounding is invisible until it is unmistakable. One day you look up and realize the room you need has been waiting for you to arrive, because you helped build it.",
    ],
  },
  {
    slug: "patience-as-strategy",
    title: "Patience Is a Strategy, Not a Temperament",
    excerpt:
      "Long-term value is not won by waiting passively. It is won by choosing, deliberately, the games where time is your ally.",
    category: "Investment",
    date: "2026-01-09",
    readTime: "5 min read",
    pullQuote: "Choose games where time works for you, and patience stops being a virtue — it becomes an edge.",
    content: [
      "Patience has a reputation problem. It sounds passive — a temperament for people content to wait. In serious investing, patience is nothing of the kind. It is an aggressive choice about which games to play.",
      "Every opportunity sits somewhere on a spectrum: at one end, games where time erodes your position — fashion-driven markets, momentum trades, anything dependent on attention. At the other, games where time is the engine itself — ownership of scarce assets, deep relationships, reputations, compounding businesses.",
      "The strategic move is brutally simple to state: concentrate your life in the second category. Hold assets that age well. Build relationships that deepen. Develop judgment that improves with every cycle you survive. Then time — the force that bankrupts the impatient — becomes the silent partner doing most of your work.",
      "This is why the question I ask of any venture is rarely 'how fast can this grow?' but 'what does this look like in ten years, and who do we become by holding it?' The first question gets answered by markets. The second gets answered by discipline.",
    ],
  },
  {
    slug: "elevation-over-extraction",
    title: "Elevation Over Extraction",
    excerpt:
      "There are two ways to participate in any venture: take value out, or raise the whole structure. Only one of them builds a name.",
    category: "Philosophy",
    date: "2025-11-27",
    readTime: "4 min read",
    pullQuote: "Extraction ends a relationship at the close. Elevation begins one there.",
    content: [
      "Every deal has a moment where the question quietly presents itself: do you optimize for what you can take from this, or for what this can become with you in it? Most people answer reflexively, and their careers follow the answer.",
      "Extraction is faster and perfectly defensible. It is also self-limiting. The extractor's reputation precedes them into every room, raising the price of every future deal and thinning the quality of every future introduction.",
      "Elevation works on a different clock. When you raise a venture — sharpen its strategy, strengthen its people, connect it to the relationships it deserves — you become part of its story. The founders tell it. The investors repeat it. The next opportunity arrives warmer than the last.",
      "Over a decade, the two strategies produce different lives. One produces a sequence of closed transactions. The other produces a constellation: people, companies, and partnerships that carry your fingerprint and answer your calls. That constellation is the real portfolio.",
    ],
  },
  {
    slug: "the-discipline-of-saying-no",
    title: "The Discipline of Saying No",
    excerpt:
      "Every yes is a decade-long commitment wearing a deal's clothing. The portfolio that matters most is the one of declined opportunities.",
    category: "Strategy",
    date: "2025-10-05",
    readTime: "5 min read",
    pullQuote: "The quality of a portfolio is determined less by what it contains than by everything it refused.",
    content: [
      "The most expensive mistakes I have witnessed were not bad investments. They were good-enough investments — opportunities just attractive enough to say yes to, which then consumed the attention, capital, and energy that the exceptional opportunity would have needed.",
      "Saying no is hard because every opportunity arrives dressed for the occasion. The numbers are framed generously. The people are at their most impressive. The fear of missing out does the rest. Which is precisely why 'no' has to be a discipline rather than a feeling — a set of standards decided in advance, when no deal is on the table.",
      "Mine reduce to three questions. Do I understand this deeply enough to add more than money? Are these people I would want to be in business with during the worst quarter, not just the best? And does this compound toward the life I am building, or merely decorate it?",
      "Two yeses out of three is a no. It is remarkable how much clarity that single rule produces — and how much room it leaves for the rare opportunity that answers all three without hesitation.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

const fieldClass =
  "w-full border-b border-platinum/60 bg-transparent py-3.5 text-base text-charcoal placeholder:text-charcoal-mist/70 transition-colors duration-500 focus:border-gold focus:outline-none";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Wire this to your email service or API route of choice.
    setSubmitted(true);
  }

  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-20 bg-ivory py-32 md:py-44">
      <div className="container-lux grid gap-20 lg:grid-cols-2 lg:gap-28">
        <div>
          <Reveal>
            <span className="eyebrow flex items-center gap-4">
              <span className="inline-block h-px w-10 bg-gold/60" aria-hidden="true" />
              Private Contact
            </span>
          </Reveal>
          <Reveal as="h2" delay={0.1} className="mt-6 font-serif text-4xl font-light leading-[1.12] text-charcoal md:text-5xl">
            Start a <span className="italic text-gilded">private</span> conversation.
          </Reveal>
          <Reveal as="p" delay={0.2} className="mt-8 max-w-md text-base leading-loose text-charcoal-soft">
            Serious inquiries are read personally and answered with
            discretion. Share the essentials — the right conversations tend
            to be short before they become long.
          </Reveal>

          <Reveal delay={0.3} className="mt-12">
            <ul className="flex flex-col gap-5">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-4"
                  >
                    <span className="w-24 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal-mist">
                      {social.label}
                    </span>
                    <span className="font-serif text-lg italic text-charcoal transition-colors duration-300 group-hover:text-gold">
                      {social.handle}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 origin-left scale-x-0 bg-gold/40 transition-transform duration-500 group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="border border-platinum/40 bg-ivory-soft/60 p-8 shadow-(--shadow-lux) md:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-96 flex-col items-center justify-center text-center"
                  role="status"
                >
                  <span className="font-serif text-5xl italic text-gold" aria-hidden="true">
                    A·S
                  </span>
                  <h3 className="mt-6 font-serif text-3xl font-light text-charcoal">
                    Received, in confidence.
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-soft">
                    Your message will be read personally. Expect a considered
                    reply — not an automated one.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-7"
                >
                  <div>
                    <label htmlFor="name" className="mb-1 block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal-mist">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal-mist">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal-mist">
                      Phone <span className="normal-case tracking-normal">(optional)</span>
                    </label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+00 000 000 000" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal-mist">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="What would you like to build, elevate, or explore?"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-2 bg-gradient-to-b from-gold-soft via-gold to-gold px-9 py-4 text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-ivory shadow-(--shadow-btn) ring-1 ring-inset ring-platinum/40 transition-all duration-500 hover:from-charcoal hover:via-charcoal hover:to-charcoal hover:shadow-(--shadow-btn-hover)"
                  >
                    Start a Private Conversation
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

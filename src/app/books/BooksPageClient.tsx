"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { books } from "@/data/books";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { fadeInUp, heroStagger, staggerContainer } from "@/lib/animations";

export function BooksPageClient() {
  const book = books[0];
  const themesRef = useRef(null);
  const themesInView = useInView(themesRef, { once: true, margin: "-80px" });

  return (
    <SectionContainer className="pt-28 pb-24 md:pt-32 md:pb-32">
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="mb-20"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-3 text-sm font-medium uppercase tracking-widest text-accent"
        >
          Writing
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-text-primary md:text-5xl"
        >
          Books
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-4 max-w-2xl text-lg text-text-secondary"
        >
          Long-form explorations of ideas that deserve more than a blog post.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-10 rounded-2xl border border-white/5 bg-background-secondary p-8 md:flex-row md:gap-16 md:p-12"
      >
        {/* Book cover visual */}
        <div className="flex-shrink-0 self-start">
          <div className="relative h-72 w-48 rounded-lg bg-gradient-to-br from-accent/20 via-background to-highlight/10 shadow-2xl shadow-accent/10 md:h-80 md:w-56">
            <div className="absolute inset-0 flex flex-col justify-between rounded-lg p-6">
              <div>
                <div className="mb-2 h-px w-8 bg-accent/60" />
                <p className="font-serif text-sm leading-snug text-text-primary/80">
                  {book.title}
                </p>
              </div>
              <p className="text-xs text-text-secondary">Waaridh Borpujari</p>
            </div>
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-accent/50" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="mb-6 font-serif text-2xl font-semibold leading-tight text-text-primary md:text-3xl">
            {book.title}
          </h2>

          <div className="mb-8 space-y-4">
            {book.description.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-text-secondary md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div ref={themesRef}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-text-primary">
              Themes Explored
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={themesInView ? "visible" : "hidden"}
              className="space-y-3"
            >
              {book.themes.map((theme, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  <p className="text-sm text-text-secondary">{theme}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}

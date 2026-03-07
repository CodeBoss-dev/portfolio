"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { books } from "@/data/books";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/layout/SectionContainer";

export function BooksPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const book = books[0];

  return (
    <SectionContainer className="py-32">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Writing
          </p>
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Ideas worth exploring
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Link href="/books" className="group block">
            <div className="flex flex-col gap-8 rounded-2xl border border-white/5 bg-background-secondary p-8 transition-all duration-500 hover:border-accent/20 md:flex-row md:items-center md:p-12">
              {/* Book visual */}
              <div className="flex-shrink-0">
                <div className="relative h-48 w-36 rounded-lg bg-gradient-to-br from-accent/20 to-highlight/10 shadow-lg shadow-accent/5 md:h-56 md:w-40">
                  <div className="absolute inset-0 flex flex-col justify-end rounded-lg p-4">
                    <p className="font-serif text-xs leading-tight text-text-primary">
                      {book.title}
                    </p>
                  </div>
                  <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-lg bg-accent/40" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="mb-4 font-serif text-xl font-semibold text-text-primary md:text-2xl">
                  {book.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-text-secondary line-clamp-3">
                  {book.description.split("\n\n")[0]}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-accent transition-all duration-300 group-hover:gap-3">
                  Learn more
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}

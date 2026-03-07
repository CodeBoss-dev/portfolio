"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { researchPapers } from "@/data/research";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/layout/SectionContainer";

export function ResearchPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const paper = researchPapers[0];

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
            Research
          </p>
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Thinking in public
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Link href="/research" className="group block">
            <div className="rounded-2xl border border-white/5 bg-background-secondary p-8 transition-all duration-500 hover:border-accent/20 md:p-12">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="mb-4 font-serif text-xl font-semibold text-text-primary md:text-2xl">
                  {paper.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-text-secondary line-clamp-3">
                  {paper.abstract}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-accent transition-all duration-300 group-hover:gap-3">
                  Read more
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

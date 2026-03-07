"use client";

import { motion } from "framer-motion";
import { researchPapers } from "@/data/research";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { fadeInUp, heroStagger, staggerContainer } from "@/lib/animations";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function ResearchPageClient() {
  const paper = researchPapers[0];
  const insightsRef = useRef(null);
  const insightsInView = useInView(insightsRef, { once: true, margin: "-80px" });

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
          Research
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-text-primary md:text-5xl"
        >
          Exploring what works and why
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-4 max-w-2xl text-lg text-text-secondary"
        >
          Research that bridges the gap between technical implementation and
          measurable human impact.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="rounded-2xl border border-white/5 bg-background-secondary p-8 md:p-12"
      >
        <h2 className="mb-6 font-serif text-2xl font-semibold text-text-primary md:text-3xl">
          {paper.title}
        </h2>

        <div className="mb-8 space-y-4">
          {paper.abstract.split(". ").reduce((acc: string[], sentence, i, arr) => {
            if (i % 2 === 0) {
              acc.push(sentence + (arr[i + 1] ? ". " + arr[i + 1] + "." : "."));
            }
            return acc;
          }, []).map((paragraph, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-text-secondary md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div ref={insightsRef}>
          <h3 className="mb-6 text-lg font-semibold text-text-primary">
            Key Insights
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={insightsInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {paper.insights.map((insight, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5"
              >
                <span className="flex-shrink-0 text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {insight}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8">
          <h3 className="mb-3 text-lg font-semibold text-text-primary">
            Why It Matters
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
            {paper.significance}
          </p>
        </div>
      </motion.div>
    </SectionContainer>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function AboutBrief() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionContainer id="about" className="py-24 md:py-32">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p
          variants={fadeInUp}
          className="mb-3 text-sm font-medium uppercase tracking-widest text-accent"
        >
          About
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="max-w-2xl text-3xl font-bold leading-tight text-text-primary md:text-4xl"
        >
          The person behind
          <br />
          <span className="text-text-secondary">the systems.</span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
        >
          I&apos;m Waaridh Borpujari, an AI systems engineer focused on turning{" "}
          <span className="text-text-primary">expensive, manual business operations</span> into
          automated pipelines that cost a fraction to run. I work with founders and
          operators who are spending too much — in time, money, or both — on processes
          that software should be handling. The case studies on this page aren&apos;t
          hypothetical. They&apos;re{" "}
          <span className="text-text-primary">systems running right now</span>, saving real
          money and returning hours back to the people who built these companies.
        </motion.p>
      </motion.div>
    </SectionContainer>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";

function CaseStudy({
  eyebrow,
  headline,
  before,
  after,
  story,
  metric,
  metricLabel,
  index,
}: {
  eyebrow: string;
  headline: string;
  before: string;
  after: string;
  story: string;
  metric: string;
  metricLabel: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
      className="relative"
    >
      {/* Case number */}
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 text-xs font-bold text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      </div>

      <div className="rounded-2xl border border-white/5 bg-background-secondary p-8 md:p-12">
        <h3 className="mb-6 text-2xl font-bold text-text-primary md:text-3xl">
          {headline}
        </h3>

        {/* Before/After contrast */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-red-500/10 bg-red-500/[0.03] p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-400/80">
              Before
            </p>
            <p className="text-lg font-semibold text-text-primary">{before}</p>
          </div>
          <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.03] p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-400/80">
              After
            </p>
            <p className="text-lg font-semibold text-text-primary">{after}</p>
          </div>
        </div>

        {/* Narrative */}
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
          {story}
        </p>

        {/* Highlighted metric */}
        <div className="inline-flex items-baseline gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-6 py-4">
          <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            {metric}
          </span>
          <span className="text-sm text-text-secondary">{metricLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function AICaseStudies() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <SectionContainer className="py-24 md:py-32">
      <div ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Why AI?
          </p>
          <h2 className="max-w-xl text-3xl font-bold text-text-primary md:text-4xl">
            The transformation isn&apos;t theoretical.
            <br />
            <span className="text-text-secondary">It&apos;s already happening.</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          <CaseStudy
            index={0}
            eyebrow="Cost Transformation"
            headline="$40,000 a month on manual processing. Then $800."
            before="$40,000/month manual data processing"
            after="$800/month automated pipeline"
            story="A mid-size operation was hemorrhaging money on repetitive data work. Analysts spent entire weeks pulling information from multiple sources, cross-referencing it, flagging anomalies, and routing decisions to the right people. The work was critical but mechanical — the kind of thing that doesn't require human judgment, just human patience. An AI automation system replaced the entire workflow. Not partially. Entirely. The same data flows through the same checks with higher accuracy, and the team that used to process it now focuses on the decisions that actually need a human mind."
            metric="98%"
            metricLabel="cost reduction in 6 weeks"
          />

          <CaseStudy
            index={1}
            eyebrow="Speed Transformation"
            headline="What took a team 3 days now happens in 11 seconds."
            before="3 days of manual retrieval and analysis"
            after="11 seconds, fully automated"
            story="The bottleneck wasn't complexity — it was volume. When thousands of documents need to be searched, ranked, and synthesized into a coherent answer, even smart people are slow. They scan, they read, they cross-reference, they write. The AI retrieval system doesn't get tired. It ingests the entire corpus, finds the relevant pieces in milliseconds, and assembles a structured response before a human could finish reading the first document. The team didn't lose their jobs — they lost their busywork. Now they validate, refine, and make the final calls on information that's already been prepared for them."
            metric="23,500x"
            metricLabel="faster end-to-end"
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="mt-16 text-center"
        >
          <MagneticWrapper>
            <Button href="/systems" variant="primary">
              See How These Systems Were Built
            </Button>
          </MagneticWrapper>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

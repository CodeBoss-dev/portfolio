"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";

const metrics = [
  { value: "99.96%", label: "Latency Reduction", detail: "Sub-millisecond retrieval" },
  { value: "98%", label: "Cost Eliminated", detail: "Token optimization at scale" },
  { value: "1,500x", label: "Efficiency Gain", detail: "Agent intelligence multiplied" },
];

export function ImpactMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionContainer className="py-24 md:py-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
        >
          Measured Impact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          className="mb-16 text-2xl font-semibold text-text-primary md:text-3xl"
        >
          Numbers that speak for the work
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : {}
              }
              transition={{
                duration: 0.8,
                ease: [0.19, 1, 0.22, 1],
                delay: 0.2 + i * 0.15,
              }}
              className="group relative rounded-2xl border border-white/5 bg-background-secondary p-8 transition-all duration-500 hover:border-accent/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <p className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                  {metric.value}
                </p>
                <p className="mt-3 text-base font-medium text-text-primary">
                  {metric.label}
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  {metric.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}

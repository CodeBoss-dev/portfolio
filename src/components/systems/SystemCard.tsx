"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { TechnicalDetails } from "./TechnicalDetails";
import type { Project } from "@/types";

export function SystemCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      id={project.id}
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="scroll-mt-24 rounded-2xl border border-white/5 bg-background-secondary p-8 transition-colors duration-500 hover:border-white/10 md:p-10"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
        {project.category}
      </p>

      <h3 className="mb-4 text-2xl font-bold text-text-primary md:text-3xl">
        {project.title}
      </h3>

      <div className="mb-6 space-y-4">
        {project.narrative.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed text-text-secondary md:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Metrics */}
      <div className="mb-6 flex flex-wrap gap-4">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-white/5 bg-white/[0.02] px-5 py-3"
          >
            <p className="text-xl font-bold text-highlight">{metric.value}</p>
            <p className="text-xs text-text-secondary">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Expand button */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          data-cursor="pointer"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-300 hover:text-accent"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-xs"
          >
            +
          </motion.span>
          {isOpen ? "Hide" : "Technical"} Details
        </button>
      </div>

      <TechnicalDetails details={project.technicalDetails} isOpen={isOpen} />
    </motion.div>
  );
}

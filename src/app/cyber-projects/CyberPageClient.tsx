"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cyberProjects } from "@/data/cyber-projects";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  fadeInUp,
  heroStagger,
  expandCollapse,
} from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";

export function CyberPageClient() {
  const project = cyberProjects[0];
  const [isOpen, setIsOpen] = useState(false);

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
          Cyber Projects
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-text-primary md:text-5xl"
        >
          Defense in depth
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-4 max-w-2xl text-lg text-text-secondary"
        >
          Security work that goes beyond scanning for vulnerabilities — building
          systems that make networks genuinely harder to compromise.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="rounded-2xl border border-white/5 bg-background-secondary p-8 md:p-10"
      >
        <h2 className="mb-6 text-2xl font-bold text-text-primary md:text-3xl">
          {project.title}
        </h2>

        <div className="mb-8 space-y-4">
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
        <div className="mb-8 flex flex-wrap gap-4">
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

        {/* Expand */}
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={expandCollapse}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="overflow-hidden"
            >
              <div className="mt-6 border-t border-white/5 pt-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technicalDetails.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  <span className="font-medium text-text-primary">
                    Architecture:{" "}
                  </span>
                  {project.technicalDetails.architecture}
                </p>
                <ul className="space-y-2">
                  {project.technicalDetails.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionContainer>
  );
}

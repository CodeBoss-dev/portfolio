"use client";

import { motion } from "framer-motion";
import { projects, categories } from "@/data/projects";
import { SystemCard } from "@/components/systems/SystemCard";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { fadeInUp, heroStagger } from "@/lib/animations";

export function SystemsPageClient() {
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
          Systems
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-text-primary md:text-5xl"
        >
          Built to solve, not to impress
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-4 max-w-2xl text-lg text-text-secondary"
        >
          Each system here was designed around a real operational problem. The
          stories describe what was broken, what was built, and what changed as a
          result.
        </motion.p>
      </motion.div>

      <div className="space-y-24">
        {categories.map((category) => {
          const categoryProjects = projects.filter(
            (p) => p.category === category
          );
          return (
            <div key={category}>
              <h2 className="mb-8 text-lg font-semibold text-text-primary">
                {category}
              </h2>
              <div className="space-y-6">
                {categoryProjects.map((project) => (
                  <SystemCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

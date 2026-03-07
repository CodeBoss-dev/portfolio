"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";
import { SectionContainer } from "@/components/layout/SectionContainer";

const featured = projects.slice(0, 3);

export function FeaturedSystems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Selected Systems
          </p>
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Real problems, engineered solutions
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Link href={`/systems#${project.id}`}>
                <motion.div
                  {...scaleOnHover}
                  className="group h-full rounded-2xl border border-white/5 bg-background-secondary p-8 transition-colors duration-500 hover:border-accent/20"
                >
                  <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
                    {project.category}
                  </p>
                  <h3 className="mb-4 text-xl font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary line-clamp-3">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <span
                        key={metric.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs"
                      >
                        <span className="font-semibold text-highlight">
                          {metric.value}
                        </span>
                        <span className="text-text-secondary">
                          {metric.label}
                        </span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}

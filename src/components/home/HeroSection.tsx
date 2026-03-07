"use client";

import { motion } from "framer-motion";
import { heroStagger, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { SectionContainer } from "@/components/layout/SectionContainer";

export function HeroSection() {
  return (
    <SectionContainer className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_50%)] opacity-[0.03]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-secondary) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-text-primary md:text-5xl lg:text-7xl"
        >
          Engineering Intelligence
          <br />
          <span className="text-accent">at Scale</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl"
        >
          Building AI systems that reduce latency by 99.96%, cut costs by 98%,
          and turn complex infrastructure into elegant, predictable machines.
          Focused on AI agents, LLM-powered systems, intelligent automation, and
          machine learning applications.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticWrapper>
            <Button href="/systems" variant="primary">
              Explore Systems
            </Button>
          </MagneticWrapper>
          <MagneticWrapper>
            <Button href="/research" variant="secondary">
              Research & Writing
            </Button>
          </MagneticWrapper>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}

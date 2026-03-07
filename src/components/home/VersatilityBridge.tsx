"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const otherWork = [
  {
    label: "Research",
    href: "/research",
    description: "How dynamic animations shape user behavior in digital commerce",
  },
  {
    label: "Writing",
    href: "/books",
    description: "A book tracing AI's quiet transformation of industries and daily life",
  },
  {
    label: "Security",
    href: "/cyber-projects",
    description: "Penetration testing and network hardening that reduced breach vectors by 78%",
  },
];

export function VersatilityBridge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionContainer className="py-24 md:py-32">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Beyond AI
          </p>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-text-primary md:text-4xl">
            Good engineering isn&apos;t confined to one domain.
            <br />
            <span className="text-text-secondary">
              Neither is the work.
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-text-secondary">
            AI solves a particular class of problems exceptionally well. But building
            systems that organizations actually rely on means understanding security,
            user behavior, and the broader landscape of how technology creates value.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {otherWork.map((item) => (
            <motion.div key={item.label} variants={fadeInUp}>
              <Link href={item.href} className="group block">
                <div className="h-full rounded-2xl border border-white/5 bg-background-secondary p-6 transition-all duration-500 hover:border-accent/20 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent transition-all duration-300 group-hover:shadow-[0_0_8px_var(--color-accent)]" />
                    <span className="text-sm font-semibold text-text-primary">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explore
                    <svg
                      width="12"
                      height="12"
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
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}

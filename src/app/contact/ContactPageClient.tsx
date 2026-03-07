"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { fadeInUp, heroStagger } from "@/lib/animations";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactPageClient() {
  return (
    <SectionContainer className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 text-center md:py-32">
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="max-w-lg"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-3 text-sm font-medium uppercase tracking-widest text-accent"
        >
          Contact
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-text-primary md:text-5xl"
        >
          Let&apos;s talk
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg text-text-secondary"
        >
          Whether it&apos;s about building AI systems, exploring a collaboration,
          or just exchanging ideas — I&apos;m always open to a good conversation.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-12">
          <MagneticWrapper>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              data-cursor="pointer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 text-base font-medium text-white transition-all duration-500 hover:bg-accent/90"
            >
              <span className="relative z-10">Send an Email</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute inset-0 origin-left scale-x-0 bg-highlight transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
            </a>
          </MagneticWrapper>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
          >
            GitHub
          </a>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}

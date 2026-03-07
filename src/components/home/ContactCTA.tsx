"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { SectionContainer } from "@/components/layout/SectionContainer";

export function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionContainer className="py-32">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-text-primary md:text-5xl"
        >
          Let&apos;s Build Something
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-4 max-w-md text-text-secondary"
        >
          Interested in working together or learning more about these systems?
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-10">
          <MagneticWrapper>
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </MagneticWrapper>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}

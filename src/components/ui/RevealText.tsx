"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function RevealText({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "h4" | "span";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

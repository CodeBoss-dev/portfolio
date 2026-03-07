"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function MagneticWrapper({
  children,
  strength = 0.3,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = useMediaQuery("(max-width: 768px)");

  function handleMouseMove(e: React.MouseEvent) {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

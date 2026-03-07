"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    function handleMouseMove(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    }

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        target.closest("[data-cursor='pointer']") ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-accent mix-blend-difference"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 48 : 16,
        height: isHovering ? 48 : 16,
        borderColor: isHovering ? "#22D3EE" : "#3B82F6",
      }}
      transition={{ duration: 0.2, ease: [0.19, 1, 0.22, 1] }}
    />
  );
}

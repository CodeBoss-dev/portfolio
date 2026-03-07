"use client";

import { useEffect, useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;

    function handleMouseMove(e: MouseEvent) {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return position;
}

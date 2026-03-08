"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const GLITCH_WORDS = [
  "Explore Systems",
  "AI Infrastructure",
  "Agent Networks",
  "LLM Pipelines",
  "Our Projects",
  "Automation",
  "Intelligence",
];

function GlitchText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const word = GLITCH_WORDS[currentIndex];
    let charIndex = 0;
    let glitchCount = 0;

    // Type out the word
    const typeInterval = setInterval(() => {
      if (charIndex <= word.length) {
        setDisplayText(word.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);

        // Hold for a moment, then glitch transition
        setTimeout(() => {
          setIsGlitching(true);
          const glitchInterval = setInterval(() => {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
            const scrambled = Array.from({ length: word.length }, () =>
              chars[Math.floor(Math.random() * chars.length)]
            ).join("");
            setDisplayText(scrambled);
            glitchCount++;

            if (glitchCount > 6) {
              clearInterval(glitchInterval);
              setIsGlitching(false);
              setCurrentIndex((prev) => (prev + 1) % GLITCH_WORDS.length);
            }
          }, 60);
        }, 1800);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <span
      className={`font-mono text-sm tracking-wider transition-colors duration-100 md:text-base ${
        isGlitching ? "text-highlight" : "text-accent"
      }`}
    >
      {displayText}
      <span className="animate-pulse text-accent">_</span>
    </span>
  );
}

export function ZoomIntro() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scene stays visible through most of scroll, fades at end
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.6, 0.75, 0.85], [1, 1, 1, 0]);

  // Center heading fades out quickly as zoom begins
  const headingOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.85]);

  // Left text fades out quickly
  const leftTextOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Box zoom starts IMMEDIATELY on scroll (from 0)
  const boxScale = useTransform(scrollYProgress, [0, 0.45], [1, 18]);
  const boxOpacity = useTransform(scrollYProgress, [0, 0.3, 0.45, 0.55], [1, 1, 0.8, 0]);
  // Move box toward center as it scales
  const boxX = useTransform(scrollYProgress, [0, 0.35], [0, -15]);
  const boxY = useTransform(scrollYProgress, [0, 0.35], [0, -10]);

  // Scroll hint disappears immediately
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.02, 0.06], [1, 1, 0]);

  // Transition title: fades in as box fades out, then fades out before next section
  const transitionTitleOpacity = useTransform(scrollYProgress, [0.4, 0.55, 0.7, 0.82], [0, 1, 1, 0]);
  const transitionTitleY = useTransform(scrollYProgress, [0.4, 0.55, 0.7, 0.82], [40, 0, 0, -30]);
  const transitionTitleScale = useTransform(scrollYProgress, [0.4, 0.55], [0.9, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <motion.div
        style={{ opacity: sceneOpacity }}
        className="sticky top-0 flex h-screen overflow-hidden"
      >
        {/* Background ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-[0.03]" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.025 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-secondary) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* === CENTER: Main heading === */}
        <motion.div
          style={{ opacity: headingOpacity, scale: headingScale }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
            className="text-center text-4xl font-bold leading-[1.1] tracking-tight text-text-primary md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Real problems,
            <br />
            <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
              engineered solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.8 }}
            className="mt-5 max-w-md text-center text-base text-text-secondary md:text-lg"
          >
            I&apos;m Waaridh Borpujari. I help companies replace expensive manual processes with{" "}
            <span className="text-text-primary">intelligent automation</span>.
          </motion.p>
        </motion.div>

        {/* === BOTTOM LEFT: Scroll prompt (hidden on mobile, shown md+) === */}
        <motion.div
          style={{ opacity: leftTextOpacity }}
          className="absolute bottom-16 left-6 hidden max-w-[280px] md:block md:left-12 lg:left-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 1.2 }}
          >
            <p className="text-sm leading-relaxed text-text-secondary md:text-base">
              Scroll down, and we&apos;ll walk you through
              <span className="text-text-primary"> what we&apos;ve built </span>
              and the impact it created.
            </p>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-4 h-8 w-[1px] bg-gradient-to-b from-accent/60 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* === BOTTOM CENTER: Glitch box (centered on mobile, right on md+) === */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 lg:right-16">
          <motion.div
            style={{
              scale: boxScale,
              opacity: boxOpacity,
              x: boxX,
              y: boxY,
            }}
            className="origin-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 1 }}
              className="relative flex h-[100px] w-[200px] flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-background-secondary/80 backdrop-blur-sm md:h-[120px] md:w-[260px]"
            >
              {/* Corner dots */}
              <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-accent/50" />
              <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-accent/50" />
              <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-accent/50" />
              <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-accent/50" />

              {/* Scan line effect */}
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
              />

              {/* Glitching text */}
              <GlitchText />
            </motion.div>
          </motion.div>
        </div>

        {/* === TRANSITION TITLE: Bridges zoom-out to next section === */}
        <motion.div
          style={{
            opacity: transitionTitleOpacity,
            y: transitionTitleY,
            scale: transitionTitleScale,
          }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Built with AI
            </p>
            <h2 className="text-3xl font-bold leading-tight text-text-primary md:text-5xl lg:text-6xl">
              Systems that deliver
              <br />
              <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
                measurable impact
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Scroll indicator (center bottom, very subtle) */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-text-secondary/30">
            scroll
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

import type { Variants, Transition } from "framer-motion";

const expoOut: Transition = {
  duration: 0.8,
  ease: [0.19, 1, 0.22, 1],
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: expoOut,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: expoOut,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: expoOut,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: expoOut,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const scaleOnHover = {
  whileHover: {
    scale: 1.025,
    transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
  },
  whileTap: { scale: 0.98 },
};

export const expandCollapse: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4, ease: [0.19, 1, 0.22, 1] },
      opacity: { duration: 0.2 },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
      opacity: { duration: 0.3, delay: 0.15 },
    },
  },
};

export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const navItemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
  },
};

import { type Variants } from "framer-motion";
import { type Transition } from "framer-motion";

import { createVariants } from "../utils/createVariants";

export const fadeVariants = createVariants(
  {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  {
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
    exitTransition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
);

export const createSlideVariants = (
  direction: "up" | "down" | "left" | "right",
  distance: number = 20,
): Variants => {
  const axis = direction === "up" || direction === "down" ? "y" : "x";
  const sign = direction === "up" || direction === "left" ? -1 : 1;

  return createVariants(
    {
      initial: { [axis]: sign * distance, opacity: 0 },
      animate: { [axis]: 0, opacity: 1 },
      exit: { [axis]: sign * distance, opacity: 0 },
    },
    {
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
      exitTransition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    },
  );
};

export const scaleVariants = createVariants(
  {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
  },
  {
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
    exitTransition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
);

export const popVariants = createVariants(
  {
    initial: { scale: 0.9, opacity: 0, y: 10 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.9, opacity: 0, y: 10 },
  },
  {
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
    exitTransition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
);

interface SpringConfig {
  stiffness: number;
  damping: number;
  mass: number;
}

export const springs = {
  gentle: {
    stiffness: 100,
    damping: 20,
    mass: 1,
  },
  bouncy: {
    stiffness: 300,
    damping: 10,
    mass: 1,
  },
  stiff: {
    stiffness: 500,
    damping: 30,
    mass: 1,
  },
  slow: {
    stiffness: 50,
    damping: 15,
    mass: 1,
  },
} as const;

export const createSpring = (config: Partial<SpringConfig> = {}) => ({
  type: "spring" as const,
  ...springs.gentle,
  ...config,
});

interface CreateTransitionOptions {
  duration?: number;
  delay?: number;
  ease?: number[];
}

export const createTransition = (
  options: CreateTransitionOptions = {},
): Transition => {
  const { duration = 0.3, delay = 0, ease = [0.16, 1, 0.3, 1] } = options;

  return {
    duration,
    delay,
    ease,
  };
};

interface CreateStaggerOptions {
  staggerChildren?: number;
  delayChildren?: number;
  staggerDirection?: 1 | -1;
}

export const createStagger = (options: CreateStaggerOptions = {}) => {
  const {
    staggerChildren = 0.05,
    delayChildren = 0,
    staggerDirection = 1,
  } = options;

  return {
    staggerChildren,
    delayChildren,
    staggerDirection,
  };
};

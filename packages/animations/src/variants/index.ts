import { Variants } from "framer-motion";
import { DURATIONS, EASINGS } from "../constants/animation";

export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleVariants = {
  center: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  },
  up: {
    initial: { scaleY: 0, opacity: 0, originY: 1 },
    animate: { scaleY: 1, opacity: 1, originY: 1 },
    exit: { scaleY: 0, opacity: 0, originY: 1 },
  },
  down: {
    initial: { scaleY: 0, opacity: 0, originY: 0 },
    animate: { scaleY: 1, opacity: 1, originY: 0 },
    exit: { scaleY: 0, opacity: 0, originY: 0 },
  },
  left: {
    initial: { scaleX: 0, opacity: 0, originX: 1 },
    animate: { scaleX: 1, opacity: 1, originX: 1 },
    exit: { scaleX: 0, opacity: 0, originX: 1 },
  },
  right: {
    initial: { scaleX: 0, opacity: 0, originX: 0 },
    animate: { scaleX: 1, opacity: 1, originX: 0 },
    exit: { scaleX: 0, opacity: 0, originX: 0 },
  },
};

export const slideVariants = {
  up: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  },
  down: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  },
  left: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
  },
  right: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
  },
};

export const rotateVariants = {
  flip: {
    initial: { rotateX: 90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 },
  },
  spin: {
    initial: { rotate: 180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: -180, opacity: 0 },
  },
  spiral: {
    initial: { rotate: 360, scale: 0, opacity: 0 },
    animate: { rotate: 0, scale: 1, opacity: 1 },
    exit: { rotate: -360, scale: 0, opacity: 0 },
  },
};

export const specialVariants = {
  bounce: {
    initial: { scale: 0.3, opacity: 0 },
    animate: {
      scale: [0.3, 1.1, 0.9, 1],
      opacity: 1,
    },
    exit: {
      scale: [1, 0.9, 1.1, 0.3],
      opacity: 0,
    },
  },
  rubber: {
    initial: { scale: 1, opacity: 0 },
    animate: {
      scale: [1, 1.25, 0.75, 1.15, 0.95, 1],
      opacity: 1,
    },
    exit: {
      scale: [1, 0.95, 1.15, 0.75, 1.25, 1],
      opacity: 0,
    },
  },
  pulse: {
    initial: { scale: 1, opacity: 0 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: 1,
    },
    exit: {
      scale: [1, 1.05, 1],
      opacity: 0,
    },
  },
};

export const combinationVariants = {
  fadeSlideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  },
  scaleRotate: {
    initial: { scale: 0, rotate: 180, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0, rotate: -180, opacity: 0 },
  },
  elasticScale: {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1.2, 0.9, 1.1, 0.95, 1],
      opacity: 1,
    },
    exit: {
      scale: [1, 0.95, 1.1, 0.9, 1.2, 0],
      opacity: 0,
    },
  },
};

export const staggerVariants = {
  container: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  },
  item: fadeVariants,
};

export const interactionVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: DURATIONS.fast,
      ease: EASINGS.spring,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: DURATIONS.fastest,
      ease: EASINGS.spring,
    },
  },
};

export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.spring,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: DURATIONS.fast,
      ease: EASINGS.easeOut,
    },
  },
};

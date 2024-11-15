import { type Variants } from "framer-motion";
import { animationDurations, animationEasings } from "@harmony-ui/animations";

export const dialogContentVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.85,
    y: 20,
    perspective: 1000,
    rotateX: 10,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: animationDurations.medium,
      ease: animationEasings.emphasized,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: -20,
    rotateX: -10,
    filter: "blur(4px)",
    transition: {
      duration: animationDurations.short,
      ease: animationEasings.easeIn,
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

export const dialogOverlayVariants: Variants = {
  initial: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  animate: {
    opacity: 1,
    backdropFilter: "blur(8px)",
    transition: {
      duration: animationDurations.medium,
      ease: animationEasings.emphasized,
    },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: animationDurations.short,
      ease: animationEasings.easeIn,
    },
  },
};

export const dialogChildVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: animationDurations.short,
      ease: animationEasings.natural,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    filter: "blur(4px)",
    transition: {
      duration: animationDurations.short,
      ease: animationEasings.easeIn,
    },
  },
};

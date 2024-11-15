import { type Variants } from "framer-motion";
import { animationDurations, animationEasings } from "@harmony-ui/animations";

export const dialogContentVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.85,
    y: 20,
    rotateX: 10,
    transformPerspective: 1000,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
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
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: animationDurations.short,
      ease: animationEasings.natural,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: animationDurations.short,
      ease: animationEasings.easeIn,
    },
  },
};

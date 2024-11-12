import { Variants } from "framer-motion";

export const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideUpVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
};

export const scaleVariants: Variants = {
  initial: { scale: 0.96, opacity: 0 },
  enter: { scale: 1, opacity: 1 },
  exit: { scale: 0.96, opacity: 0 },
};

export const rotateInVariants: Variants = {
  initial: { rotate: -10, opacity: 0 },
  enter: { rotate: 0, opacity: 1 },
  exit: { rotate: 10, opacity: 0 },
};

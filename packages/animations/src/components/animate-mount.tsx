import { motion, type Variants, type AnimationControls } from "framer-motion";
import React from "react";

import { useReducedMotion } from "../hooks/useReducedMotion";

type VariantLabels = string | string[];
type TargetAndTransition = Record<string, any>;

interface AnimateMountProps {
  children: React.ReactNode;
  variants?: Variants;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | AnimationControls | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
  className?: string;
  transition?: object;
}

export const AnimateMount = ({
  children,
  variants,
  initial = "initial",
  animate = "animate",
  exit = "exit",
  className,
  transition,
}: AnimateMountProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants}
      className={className}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

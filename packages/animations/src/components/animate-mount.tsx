import { motion, type Variants, type AnimationControls } from "framer-motion";
import React from "react";

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
  const transformTemplate = ({ scale, y }: any) => {
    if (scale === 1 && y === 0) {
      return "translate3d(0, 0, 0)";
    }
    return `translate3d(0, ${y}px, 0) scale(${scale})`;
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants}
      className={className}
      transition={transition}
      transformTemplate={transformTemplate}
    >
      {children}
    </motion.div>
  );
};

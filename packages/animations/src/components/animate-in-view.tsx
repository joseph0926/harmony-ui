import { motion, type Variants } from "framer-motion";
import React, { useRef } from "react";

import { useInViewAnimation } from "../hooks/useInViewAnimation";

type MarginValue = `${number}${"px" | "%"}`;
type MarginType =
  | MarginValue
  | `${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

interface AnimateInViewProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  amount?: "some" | "all" | number;
  once?: boolean;
  delay?: number;
  margin?: MarginType;
}

export const AnimateInView = ({
  children,
  variants,
  className,
  amount,
  once,
  delay,
  margin,
}: AnimateInViewProps) => {
  const ref = useRef(null);
  const { controls } = useInViewAnimation(ref, {
    amount,
    once,
    delay,
    margin,
  });

  const defaultVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={variants ?? defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

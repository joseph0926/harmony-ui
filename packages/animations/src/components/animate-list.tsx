import { motion, type Variants } from "framer-motion";
import React from "react";

import { useReducedMotion } from "../hooks/useReducedMotion";

interface AnimateListProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  variants?: Variants;
  staggerChildren?: number;
  delayChildren?: number;
}

export const AnimateList = ({
  children,
  className,
  itemClassName,
  variants,
  staggerChildren = 0.05,
  delayChildren = 0,
}: AnimateListProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {children.map((child, i) => (
          <div key={i} className={itemClassName}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  const defaultVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  const defaultChildVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants ?? defaultVariants}
      className={className}
    >
      {children.map((child, i) => (
        <motion.div
          key={i}
          variants={defaultChildVariants}
          className={itemClassName}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

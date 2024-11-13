import { AnimatePresence, type Variants, motion } from "framer-motion";
import React from "react";

import { useStaggerAnimation } from "../hooks/useStaggerAnimation";

interface AnimatePresenceGroupProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  customVariants?: Variants;
  staggerChildren?: number;
  delayChildren?: number;
}

export const AnimatePresenceGroup = ({
  children,
  className,
  itemClassName,
  customVariants,
  staggerChildren,
  delayChildren,
}: AnimatePresenceGroupProps) => {
  const { getContainerVariants, getItemVariants } = useStaggerAnimation({
    staggerChildren,
    delayChildren,
  });

  return (
    <AnimatePresence>
      <motion.div
        className={className}
        variants={customVariants ?? getContainerVariants()}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children.map((child, index) => (
          <motion.div
            key={index}
            className={itemClassName}
            variants={getItemVariants()}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

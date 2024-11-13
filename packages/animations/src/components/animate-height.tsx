import { motion, AnimatePresence } from "framer-motion";
import React from "react";

import { useReducedMotion } from "../hooks/useReducedMotion";

interface AnimateHeightProps {
  children: React.ReactNode;
  isVisible: boolean;
  duration?: number;
  className?: string;
}

export const AnimateHeight = ({
  children,
  isVisible,
  duration = 0.3,
  className,
}: AnimateHeightProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return isVisible ? <div className={className}>{children}</div> : null;
  }

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: "auto", opacity: 1 },
            collapsed: { height: 0, opacity: 0 },
          }}
          transition={{
            duration,
            ease: [0.32, 0.72, 0, 1],
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

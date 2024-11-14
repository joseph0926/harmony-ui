import { motion, type Variants } from "framer-motion";
import React from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

interface AnimateInViewProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
  delay?: number;
}

export const AnimateInView = ({
  children,
  variants,
  className,
  ...options
}: AnimateInViewProps) => {
  const { ref, controls, delay } = useInViewAnimation(options);

  const defaultVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay },
    },
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

import { type Variants } from "framer-motion";
import { useCallback } from "react";

interface UseStaggerAnimationOptions {
  staggerChildren?: number;
  delayChildren?: number;
}

export const useStaggerAnimation = (
  options: UseStaggerAnimationOptions = {},
) => {
  const { staggerChildren = 0.05, delayChildren = 0 } = options;

  const getContainerVariants = useCallback(
    (): Variants => ({
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          staggerChildren,
          delayChildren,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          staggerDirection: -1,
          staggerChildren: staggerChildren / 2,
        },
      },
    }),
    [staggerChildren, delayChildren],
  );

  const getItemVariants = useCallback(
    (custom: Record<string, any> = {}): Variants => ({
      initial: {
        opacity: 0,
        y: 20,
        ...custom.initial,
      },
      animate: {
        opacity: 1,
        y: 0,
        ...custom.animate,
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
          ...custom.transition,
        },
      },
      exit: {
        opacity: 0,
        y: 20,
        ...custom.exit,
      },
    }),
    [],
  );

  return {
    getContainerVariants,
    getItemVariants,
  };
};

import { type Variants } from "framer-motion";
import { useCallback } from "react";

interface UseStaggerAnimationOptions {
  staggerChildren?: number;
  delayChildren?: number;
}

export const useStaggerAnimation = (
  options: UseStaggerAnimationOptions = {}
) => {
  const { staggerChildren = 0.05, delayChildren = 0 } = options;

  const getContainerVariants = useCallback(
    (): Variants => ({
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.3,
          staggerChildren,
          delayChildren,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: [0.32, 0, 0.67, 0],
          staggerDirection: -1,
          staggerChildren: staggerChildren / 2,
        },
      },
    }),
    [staggerChildren, delayChildren]
  );

  const getItemVariants = useCallback(
    (custom: Record<string, any> = {}): Variants => ({
      initial: {
        opacity: 0,
        y: 20,
        scale: 0.95,
        ...custom.initial,
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
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
        scale: 0.95,
        ...custom.exit,
        transition: {
          duration: 0.2,
          ease: [0.32, 0, 0.67, 0],
          ...custom.exitTransition,
        },
      },
    }),
    []
  );

  return {
    getContainerVariants,
    getItemVariants,
  };
};

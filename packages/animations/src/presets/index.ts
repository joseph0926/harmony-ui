import { motionTransitions, motionVariants } from "@harmony-ui/theme";
import { MotionProps } from "framer-motion";

export type AnimationPreset = "scale" | "slideUp" | "fadeIn" | "rotateIn";
export type TransitionPreset = "base" | "smooth" | "bouncy" | "swift";

export const createPreset = (
  animation: AnimationPreset,
  transition: TransitionPreset = "base",
): MotionProps => {
  return {
    initial: motionVariants[animation].initial,
    animate: motionVariants[animation].enter,
    exit: motionVariants[animation].exit,
    transition: motionTransitions[transition],
  };
};

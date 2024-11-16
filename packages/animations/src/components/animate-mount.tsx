import React from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { createVariant } from "../hooks/useVariants";
import { DURATIONS, EASINGS } from "../constants/animation";

const DEFAULT_SLIDE_DISTANCE = 20;

type MountAnimationType = "fade" | "scale" | "slide";

interface AnimateConfig {
  distance?: number;
  opacity?: number;
  scale?: number;
}

interface AnimateMountProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  type?: MountAnimationType;
  direction?: "up" | "down" | "left" | "right";
  duration?: keyof typeof DURATIONS;
  easing?: keyof typeof EASINGS;
  className?: string;
  customVariant?: Variants;
  config?: AnimateConfig;
}

const createFadeVariant = (config: AnimateConfig = {}): Variants => ({
  initial: { opacity: 0 },
  animate: { opacity: config.opacity ?? 1 },
  exit: { opacity: 0 },
});

const createScaleVariant = (config: AnimateConfig = {}): Variants => ({
  initial: {
    scale: config.scale ?? 0.95,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: config.opacity ?? 1,
  },
  exit: {
    scale: config.scale ?? 0.95,
    opacity: 0,
  },
});

const createSlideVariant = (
  axis: "x" | "y",
  value: number,
  config: AnimateConfig = {}
): Variants => ({
  initial: {
    [axis]: value,
    opacity: 0,
  },
  animate: {
    [axis]: 0,
    opacity: config.opacity ?? 1,
  },
  exit: {
    [axis]: value,
    opacity: 0,
  },
});

const getDirectionalVariant = (
  direction: AnimateMountProps["direction"],
  config: AnimateConfig = {}
): Variants => {
  const distance = config.distance ?? DEFAULT_SLIDE_DISTANCE;

  switch (direction) {
    case "up":
      return createSlideVariant("y", distance, config);
    case "down":
      return createSlideVariant("y", -distance, config);
    case "left":
      return createSlideVariant("x", distance, config);
    case "right":
      return createSlideVariant("x", -distance, config);
    default:
      return createFadeVariant(config);
  }
};

const getBaseVariant = (
  type: MountAnimationType,
  config: AnimateConfig = {}
): Variants => {
  switch (type) {
    case "fade":
      return createFadeVariant(config);
    case "scale":
      return createScaleVariant(config);
    case "slide":
      return createSlideVariant(
        "y",
        config.distance ?? DEFAULT_SLIDE_DISTANCE,
        config
      );
    default:
      return createFadeVariant(config);
  }
};

export const AnimateMount = ({
  children,
  type = "fade",
  direction,
  duration = "normal",
  easing = "spring",
  className,
  customVariant,
  config = {},
  variants,
  initial,
  animate,
  exit,
  ...rest
}: AnimateMountProps) => {
  const getVariant = (): Variants => {
    if (customVariant) {
      return createVariant(customVariant, { duration, easing });
    }

    if (type === "slide" && direction) {
      return createVariant(getDirectionalVariant(direction, config), {
        duration,
        easing,
      });
    }

    return createVariant(getBaseVariant(type, config), { duration, easing });
  };

  return (
    <motion.div
      initial={initial ?? "initial"}
      animate={animate ?? "animate"}
      exit={exit ?? "exit"}
      variants={getVariant()}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

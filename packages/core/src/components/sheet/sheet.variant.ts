import { type Variants } from "framer-motion";
import { animationDurations, animationEasings } from "@harmony-ui/animations";

export const slideDirections = {
  left: { x: "-100%", y: 0 },
  right: { x: "100%", y: 0 },
  top: { x: 0, y: "-100%" },
  bottom: { x: 0, y: "100%" },
};

const getDirectionalRotation = (direction: keyof typeof slideDirections) => {
  switch (direction) {
    case "left":
      return {
        rotateY: -10,
        rotateX: 0,
        originX: 0,
        originY: 0.5,
      };
    case "right":
      return {
        rotateY: 10,
        rotateX: 0,
        originX: 1,
        originY: 0.5,
      };
    case "top":
      return {
        rotateY: 0,
        rotateX: -10,
        originX: 0.5,
        originY: 0,
      };
    case "bottom":
      return {
        rotateY: 0,
        rotateX: 10,
        originX: 0.5,
        originY: 1,
      };
  }
};

const getDirectionalScale = (direction: keyof typeof slideDirections) => {
  switch (direction) {
    case "left":
      return { scaleX: 0.9, scaleY: 0.97 };
    case "right":
      return { scaleX: 0.9, scaleY: 0.97 };
    case "top":
      return { scaleX: 0.97, scaleY: 0.9 };
    case "bottom":
      return { scaleX: 0.97, scaleY: 0.9 };
  }
};

export const createSheetVariants = (
  direction: keyof typeof slideDirections
): Variants => {
  const rotation = getDirectionalRotation(direction);
  const scale = getDirectionalScale(direction);

  return {
    initial: {
      opacity: 0,
      ...slideDirections[direction],
      ...scale,
      rotateX: rotation.rotateX,
      rotateY: rotation.rotateY,
      filter: "blur(8px)",
      transformPerspective: 2000,
      transformOrigin: `${rotation.originX * 100}% ${rotation.originY * 100}%`,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      rotateX: 0,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        opacity: {
          duration: animationDurations.medium * 0.5,
          ease: animationEasings.easeOut,
        },
        x: {
          type: "spring",
          stiffness: 400,
          damping: 30,
        },
        y: {
          type: "spring",
          stiffness: 400,
          damping: 30,
        },
        rotateX: {
          duration: animationDurations.medium * 0.7,
          ease: animationEasings.emphasized,
        },
        rotateY: {
          duration: animationDurations.medium * 0.7,
          ease: animationEasings.emphasized,
        },
        scale: {
          duration: animationDurations.medium,
          ease: animationEasings.emphasized,
        },
        filter: {
          duration: animationDurations.medium * 0.8,
          ease: animationEasings.easeOut,
        },
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      ...slideDirections[direction],
      ...scale,
      rotateX: rotation.rotateX * 0.6,
      rotateY: rotation.rotateY * 0.6,
      filter: "blur(8px)",
      transition: {
        opacity: {
          duration: animationDurations.short * 0.6,
          ease: animationEasings.easeIn,
        },
        x: {
          type: "spring",
          stiffness: 400,
          damping: 35,
        },
        y: {
          type: "spring",
          stiffness: 400,
          damping: 35,
        },
        rotateX: {
          duration: animationDurations.short * 0.8,
          ease: animationEasings.easeIn,
        },
        rotateY: {
          duration: animationDurations.short * 0.8,
          ease: animationEasings.easeIn,
        },
        scale: {
          duration: animationDurations.short,
          ease: animationEasings.easeIn,
        },
        filter: {
          duration: animationDurations.short * 0.5,
          ease: animationEasings.easeIn,
        },
        when: "afterChildren",
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };
};

export const sheetOverlayVariants: Variants = {
  initial: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  animate: {
    opacity: 1,
    backdropFilter: "blur(8px)",
    transition: {
      duration: animationDurations.medium,
      ease: animationEasings.emphasized,
    },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: animationDurations.short,
      ease: animationEasings.easeIn,
    },
  },
};

export const sheetChildVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: animationDurations.short,
      ease: animationEasings.natural,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    filter: "blur(4px)",
    transition: {
      duration: animationDurations.short,
      ease: animationEasings.easeIn,
    },
  },
};

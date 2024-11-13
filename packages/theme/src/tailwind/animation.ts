import { motionDurations, motionEasing } from "../constants/animation";

export const animationConfig = {
  extend: {
    transitionTimingFunction: Object.entries(motionEasing).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: `cubic-bezier(${value.join(",")})`,
      }),
      {},
    ),
    transitionDuration: Object.entries(motionDurations).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: `${value * 1000}ms`,
      }),
      {},
    ),
    keyframes: {
      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      fadeOut: {
        from: { opacity: "1" },
        to: { opacity: "0" },
      },
      slideUpIn: {
        from: { transform: "translateY(20px)", opacity: "0" },
        to: { transform: "translateY(0)", opacity: "1" },
      },
      slideUpOut: {
        from: { transform: "translateY(0)", opacity: "1" },
        to: { transform: "translateY(-20px)", opacity: "0" },
      },
      slideDownIn: {
        from: { transform: "translateY(-20px)", opacity: "0" },
        to: { transform: "translateY(0)", opacity: "1" },
      },
      slideDownOut: {
        from: { transform: "translateY(0)", opacity: "1" },
        to: { transform: "translateY(20px)", opacity: "0" },
      },
      scaleIn: {
        from: { transform: "scale(0.95)", opacity: "0" },
        to: { transform: "scale(1)", opacity: "1" },
      },
      scaleOut: {
        from: { transform: "scale(1)", opacity: "1" },
        to: { transform: "scale(0.95)", opacity: "0" },
      },
    },
    animation: {
      fadeIn: "fadeIn var(--duration-normal) var(--ease-default) forwards",
      fadeOut: "fadeOut var(--duration-normal) var(--ease-default) forwards",
      slideUpIn:
        "slideUpIn var(--duration-normal) var(--ease-default) forwards",
      slideUpOut:
        "slideUpOut var(--duration-normal) var(--ease-default) forwards",
      slideDownIn:
        "slideDownIn var(--duration-normal) var(--ease-default) forwards",
      slideDownOut:
        "slideDownOut var(--duration-normal) var(--ease-default) forwards",
      scaleIn: "scaleIn var(--duration-normal) var(--ease-bouncy) forwards",
      scaleOut: "scaleOut var(--duration-normal) var(--ease-bouncy) forwards",
    },
  },
};

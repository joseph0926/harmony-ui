export const motionTransitions = {
  base: {
    ease: [0.6, 0.01, -0.05, 0.9],
    duration: 0.6,
  },
  smooth: {
    ease: [0.43, 0.13, 0.23, 0.96],
    duration: 0.8,
  },
  bouncy: {
    ease: [0.175, 0.885, 0.32, 1.275],
    duration: 0.7,
  },
  swift: {
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.4,
  },
} as const;

export const motionVariants = {
  scale: {
    initial: { scale: 0.96, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    exit: { scale: 0.96, opacity: 0 },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  },
  rotateIn: {
    initial: { rotate: -10, opacity: 0 },
    enter: { rotate: 0, opacity: 1 },
    exit: { rotate: 10, opacity: 0 },
  },
} as const;

export const colorTokens = {
  primary: {
    50: "hsl(240, 100%, 98%)",
    100: "hsl(240, 95%, 94%)",
    200: "hsl(240, 90%, 88%)",
    300: "hsl(240, 85%, 80%)",
    400: "hsl(240, 80%, 70%)",
    500: "hsl(240, 75%, 60%)",
    600: "hsl(240, 70%, 50%)",
    700: "hsl(240, 65%, 40%)",
    800: "hsl(240, 60%, 30%)",
    900: "hsl(240, 55%, 20%)",
  },
  accent: {
    50: "hsl(280, 100%, 98%)",
    100: "hsl(280, 95%, 94%)",
    200: "hsl(280, 90%, 88%)",
    300: "hsl(280, 85%, 80%)",
    400: "hsl(280, 80%, 70%)",
    500: "hsl(280, 75%, 60%)",
    600: "hsl(280, 70%, 50%)",
    700: "hsl(280, 65%, 40%)",
    800: "hsl(280, 60%, 30%)",
    900: "hsl(280, 55%, 20%)",
  },
} as const;

export const sizeTokens = {
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  borderRadius: {
    xs: "0.25rem",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
} as const;

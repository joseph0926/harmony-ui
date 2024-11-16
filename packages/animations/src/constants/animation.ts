export const DURATIONS = {
  fastest: 0.15,
  fast: 0.25,
  normal: 0.35,
  slow: 0.5,
  slowest: 0.7,
} as const;

export const EASINGS = {
  easeOut: [0.16, 1, 0.3, 1],
  spring: [0.37, 0, 0.63, 1],
  bounce: [0.68, -0.6, 0.32, 1.6],
} as const;

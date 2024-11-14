export const animationDurations = {
  fastest: 0.15,
  short: 0.2,
  medium: 0.3,
  long: 0.5,
  longest: 0.7,
} as const;

export const animationEasings = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  emphasized: [0.2, 0, 0, 1],
  natural: [0.16, 1, 0.3, 1],
  bounce: [0.175, 0.885, 0.32, 1.275],
} as const;

export const motionDurations = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.7,
  slowest: 1,
} as const;

export const motionEasing = {
  default: [0.25, 0.1, 0.25, 1],

  easeOut: [0, 0, 0.2, 1],

  easeIn: [0.4, 0, 1, 1],

  bouncy: [0.175, 0.885, 0.32, 1.275],

  natural: [0.6, 0.01, -0.05, 0.9],
} as const;

export const motionPresets = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: motionDurations.normal,
      ease: motionEasing.default,
    },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: {
      duration: motionDurations.normal,
      ease: motionEasing.default,
    },
  },
  slideDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: {
      duration: motionDurations.normal,
      ease: motionEasing.default,
    },
  },
  scale: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
    transition: {
      duration: motionDurations.normal,
      ease: motionEasing.bouncy,
    },
  },

  pageTransition: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
    transition: {
      duration: motionDurations.slow,
      ease: motionEasing.natural,
    },
  },
} as const;

export const gesturePresets = {
  tap: {
    scale: 0.95,
    transition: {
      duration: motionDurations.instant,
      ease: motionEasing.easeOut,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: motionDurations.fast,
      ease: motionEasing.bouncy,
    },
  },
} as const;

export const springPresets = {
  soft: {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
  },
  bouncy: {
    type: "spring",
    stiffness: 200,
    damping: 15,
    mass: 1,
  },
  stiff: {
    type: "spring",
    stiffness: 300,
    damping: 25,
    mass: 1,
  },
} as const;

export const componentPresets = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },

  modal: {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 10,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    },
  },

  drawer: {
    left: {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "-100%", opacity: 0 },
    },
    right: {
      initial: { x: "100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "100%", opacity: 0 },
    },
    top: {
      initial: { y: "-100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: "-100%", opacity: 0 },
    },
    bottom: {
      initial: { y: "100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: "100%", opacity: 0 },
    },
    transition: {
      duration: 0.3,
      ease: [0.32, 0.72, 0, 1],
    },
  },

  dropdown: {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: -4,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -4,
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 1, 1],
      },
    },
  },

  tooltip: {
    initial: {
      opacity: 0,
      scale: 0.96,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.1,
        ease: [0.4, 0, 1, 1],
      },
    },
  },

  accordion: {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3,
          ease: [0.32, 0.72, 0, 1],
        },
        opacity: {
          duration: 0.25,
          ease: [0.4, 0, 0.2, 1],
        },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3,
          ease: [0.32, 0.72, 0, 1],
        },
        opacity: {
          duration: 0.2,
          ease: [0.4, 0, 1, 1],
        },
      },
    },
  },

  collapsible: {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  },

  toast: {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      y: 20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1],
      },
    },
  },

  alert: {
    initial: {
      opacity: 0,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    },
  },

  hoverCard: {
    initial: {
      opacity: 0,
      y: 4,
      scale: 0.97,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 4,
      scale: 0.97,
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 1, 1],
      },
    },
  },

  staggerItems: {
    initial: { opacity: 0, y: 10 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    },
  },
} as const;

export const createStaggerVariants = (
  staggerChildren = 0.05,
  delayStart = 0
) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: delayStart,
      staggerChildren,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: staggerChildren / 2,
      staggerDirection: -1,
    },
  },
});

export type MotionDuration = keyof typeof motionDurations;
export type MotionEasing = keyof typeof motionEasing;
export type MotionPreset = keyof typeof motionPresets;
export type GesturePreset = keyof typeof gesturePresets;
export type SpringPreset = keyof typeof springPresets;

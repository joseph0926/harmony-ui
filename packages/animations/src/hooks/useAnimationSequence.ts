import { useState, useCallback } from "react";
import { useAnimation, TargetAndTransition } from "framer-motion";
import { DURATIONS } from "../constants/animation";

type AnimationStep = {
  target: TargetAndTransition;
  duration?: keyof typeof DURATIONS;
  delay?: number;
};

export const useAnimationSequence = () => {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  const play = useCallback(
    (steps: AnimationStep[]) => {
      setIsAnimating(true);

      const runAnimations = async () => {
        try {
          for (const { target, duration = "normal", delay = 0 } of steps) {
            await controls.start({
              ...target,
              transition: {
                duration: DURATIONS[duration],
                delay,
              },
            });
          }
        } finally {
          setIsAnimating(false);
        }
      };

      runAnimations();
    },
    [controls]
  );

  return {
    controls,
    isAnimating,
    play,
  };
};

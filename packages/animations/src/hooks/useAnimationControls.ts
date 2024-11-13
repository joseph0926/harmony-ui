import { useAnimation, type AnimationControls } from "framer-motion";
import { useCallback } from "react";

interface UseAnimationControlsReturn {
  controls: AnimationControls;
  start: (variant: string) => Promise<void>;
  stop: () => void;
}

export const useAnimationControls = (): UseAnimationControlsReturn => {
  const controls = useAnimation();

  const start = useCallback(
    async (variant: string) => {
      await controls.start(variant);
    },
    [controls],
  );

  const stop = useCallback(() => {
    controls.stop();
  }, [controls]);

  return { controls, start, stop };
};

import { useState, useCallback } from "react";

import { AnimationPreset, TransitionPreset, createPreset } from "../presets";

export const useAnimationPreset = (
  defaultPreset: AnimationPreset = "fadeIn",
  defaultTransition: TransitionPreset = "base",
) => {
  const [preset, setPreset] = useState(defaultPreset);
  const [transition, setTransition] = useState(defaultTransition);

  const getMotionProps = useCallback(
    () => createPreset(preset, transition),
    [preset, transition],
  );

  return {
    preset,
    transition,
    setPreset,
    setTransition,
    getMotionProps,
  };
};

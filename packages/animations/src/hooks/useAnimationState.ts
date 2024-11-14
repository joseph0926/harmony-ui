import { usePresence } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export const useAnimationState = () => {
  const [isPresent, safeToRemove] = usePresence();
  const prefersReducedMotion = useReducedMotion();

  return {
    isPresent,
    safeToRemove,
    prefersReducedMotion,
  };
};

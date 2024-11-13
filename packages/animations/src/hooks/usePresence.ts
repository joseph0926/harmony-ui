import { usePresence as useFramerPresence } from "framer-motion";

export const usePresence = () => {
  const [isPresent, safeToRemove] = useFramerPresence();

  return {
    isPresent,
    safeToRemove,
  };
};

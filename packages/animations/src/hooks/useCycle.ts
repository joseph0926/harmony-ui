import { useCycle, type Variants } from "framer-motion";

export const useCycleAnimation = (variants: Variants) => {
  const [current, cycle] = useCycle(...Object.keys(variants));

  return { current, cycle };
};

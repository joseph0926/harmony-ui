import { type Variants, type Transition } from "framer-motion";
import { merge } from "lodash";

interface CreateVariantsOptions {
  transition?: Transition;
  exitTransition?: Transition;
}

export const createVariants = (
  variants: Omit<Variants, "transition">,
  options?: CreateVariantsOptions
): Variants => {
  const { transition, exitTransition } = options ?? {};

  return Object.entries(variants).reduce((acc, [key, value]) => {
    const variantTransition = key === "exit" ? exitTransition : transition;
    acc[key] = merge({}, value, { transition: variantTransition });
    return acc;
  }, {} as Variants);
};

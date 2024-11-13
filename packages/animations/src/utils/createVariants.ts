import { type Variants, type Transition } from "framer-motion";

interface CreateVariantsOptions {
  transition?: Transition;
  exitTransition?: Transition;
}

export const createVariants = (
  variants: Omit<Variants, "transition">,
  options?: CreateVariantsOptions,
): Variants => {
  const { transition, exitTransition } = options ?? {};

  return Object.entries(variants).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        ...value,
        transition: key === "exit" ? exitTransition : transition,
      },
    }),
    {},
  );
};

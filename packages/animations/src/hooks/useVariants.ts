import { type Variants } from "framer-motion";
import { useMemo } from "react";
import { merge } from "lodash";

export const useVariants = (
  baseVariants: Variants,
  customVariants?: Partial<Variants>
): Variants => {
  return useMemo(() => {
    if (!customVariants) return baseVariants;

    return merge({}, baseVariants, customVariants);
  }, [baseVariants, customVariants]);
};

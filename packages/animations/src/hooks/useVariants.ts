import { type Variants, type Variant } from "framer-motion";
import { useMemo } from "react";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export const useVariants = (
  baseVariants: Variants,
  customVariants?: DeepPartial<Variants>,
): Variants => {
  return useMemo(() => {
    if (!customVariants) return baseVariants;

    const merged = { ...baseVariants };

    Object.entries(customVariants).forEach(([key, value]) => {
      if (value && typeof value === "object") {
        merged[key] = {
          ...(merged[key] as Variant),
          ...value,
        } as Variant;
      }
    });

    return merged;
  }, [baseVariants, customVariants]);
};

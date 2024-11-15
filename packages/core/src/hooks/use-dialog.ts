import { useCallback } from "react";
import {
  dialogOverlayVariants,
  dialogContentVariants,
  dialogChildVariants,
} from "../components/dialog/dialog.variant";
import { fadeVariants, useAnimationContext } from "@harmony-ui/animations";

export const useDialogAnimation = () => {
  const { prefersReducedMotion } = useAnimationContext();

  const getOverlayVariants = useCallback(() => {
    return prefersReducedMotion ? fadeVariants : dialogOverlayVariants;
  }, [prefersReducedMotion]);

  const getContentVariants = useCallback(() => {
    return prefersReducedMotion ? fadeVariants : dialogContentVariants;
  }, [prefersReducedMotion]);

  const getChildVariants = useCallback(() => {
    return prefersReducedMotion ? undefined : dialogChildVariants;
  }, [prefersReducedMotion]);

  return {
    getOverlayVariants,
    getContentVariants,
    getChildVariants,
  };
};

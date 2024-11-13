import { useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import type { RefObject } from "react";

type MarginValue = `${number}${"px" | "%"}`;
type MarginType =
  | MarginValue
  | `${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

interface UseInViewAnimationOptions {
  root?: RefObject<Element>;
  margin?: MarginType;
  amount?: "some" | "all" | number;
  once?: boolean;
  delay?: number;
}

export const useInViewAnimation = (
  ref: RefObject<Element>,
  options: UseInViewAnimationOptions = {},
) => {
  const { root, margin, amount = "some", once = true, delay = 0 } = options;

  const controls = useAnimation();
  const isInView = useInView(ref, {
    root,
    margin,
    amount,
    once,
  });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        controls.start("animate");
      }, delay);
    }
  }, [isInView, controls, delay]);

  return {
    controls,
    isInView,
  };
};

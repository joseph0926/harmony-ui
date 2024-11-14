import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface UseInViewAnimationOptions {
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
  delay?: number;
}

export const useInViewAnimation = (options: UseInViewAnimationOptions = {}) => {
  const {
    rootMargin = "0px",
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
  } = options;

  const controls = useAnimation();
  const [ref, inView] = useInView({
    rootMargin,
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [inView, controls]);

  return {
    ref,
    controls,
    inView,
    delay,
  };
};

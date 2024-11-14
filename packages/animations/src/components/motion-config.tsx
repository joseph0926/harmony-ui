import { MotionConfig as FramerMotionConfig } from "framer-motion";
import React from "react";
import { useAnimationContext } from "../providers/animation.provider";

interface MotionConfigProps {
  children: React.ReactNode;
}

export const MotionConfig = ({ children }: MotionConfigProps) => {
  const { prefersReducedMotion } = useAnimationContext();

  return (
    <FramerMotionConfig
      reducedMotion={prefersReducedMotion ? "always" : "never"}
    >
      {children}
    </FramerMotionConfig>
  );
};

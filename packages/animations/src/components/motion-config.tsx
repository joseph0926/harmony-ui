import { MotionConfig as FramerMotionConfig } from "framer-motion";
import React from "react";

interface MotionConfigProps {
  children: React.ReactNode;
  reducedMotion?: "never" | "always" | "user";
}

export const MotionConfig = ({
  children,
  reducedMotion = "user",
}: MotionConfigProps) => {
  return (
    <FramerMotionConfig reducedMotion={reducedMotion}>
      {children}
    </FramerMotionConfig>
  );
};

"use client";

import React, { createContext, useContext } from "react";
import { useReducedMotion } from "framer-motion";

interface AnimationContextProps {
  prefersReducedMotion: boolean | null;
  defaultTransition: {
    duration: number;
    ease: number[];
  };
  animationEnabled: boolean;
}

const AnimationContext = createContext<AnimationContextProps | undefined>(
  undefined
);

export const AnimationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const prefersReducedMotion = useReducedMotion();

  const contextValue = {
    prefersReducedMotion,
    defaultTransition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
    animationEnabled: !prefersReducedMotion,
  };

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error(
      "useAnimationContext must be used within an AnimationProvider"
    );
  }
  return context;
};

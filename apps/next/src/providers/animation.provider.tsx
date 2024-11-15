"use client";

import React from "react";
import { AnimationProvider } from "@harmony-ui/animations";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return <AnimationProvider>{children}</AnimationProvider>;
};

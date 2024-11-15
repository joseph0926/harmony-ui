"use client";

import React from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { cn } from "../../utils";
import { fadeVariants, createSlideVariants } from "@harmony-ui/animations";
import { useAnimationContext } from "@harmony-ui/animations";

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
}

export const DropdownMenu = ({
  trigger,
  children,
  side = "bottom",
  align = "start",
  className,
}: DropdownMenuProps) => {
  const { prefersReducedMotion } = useAnimationContext();

  const getVariants = () => {
    if (prefersReducedMotion) {
      return fadeVariants;
    }
    switch (side) {
      case "top":
        return createSlideVariants("down", 10);
      case "bottom":
        return createSlideVariants("up", 10);
      case "left":
        return createSlideVariants("right", 10);
      case "right":
        return createSlideVariants("left", 10);
      default:
        return fadeVariants;
    }
  };

  const variants = getVariants();

  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>{trigger}</RadixDropdownMenu.Trigger>
      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          side={side}
          align={align}
          sideOffset={8}
          asChild
          forceMount
        >
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(
              "min-w-[200px] bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden",
              className
            )}
          >
            {children}
          </motion.div>
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};

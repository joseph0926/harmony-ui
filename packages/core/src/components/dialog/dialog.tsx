"use client";

import React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { cn } from "../../utils";
import { fadeVariants, scaleVariants } from "@harmony-ui/animations";
import { useAnimationContext } from "@harmony-ui/animations";

interface DialogProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export const Dialog = ({
  children,
  trigger,
  open,
  onOpenChange,
  className,
}: DialogProps) => {
  const { prefersReducedMotion } = useAnimationContext();

  const variants = prefersReducedMotion ? fadeVariants : scaleVariants;

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay asChild forceMount>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </RadixDialog.Overlay>

        <RadixDialog.Content asChild forceMount>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className={cn(
              "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
              "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6",
              className
            )}
          >
            {children}
          </motion.div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

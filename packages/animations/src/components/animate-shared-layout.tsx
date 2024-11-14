import { motion, LayoutGroup, type Variants } from "framer-motion";
import React from "react";

interface AnimateSharedLayoutProps {
  children: React.ReactNode;
  layoutId: string;
  isPresent: boolean;
  variants?: Variants;
  className?: string;
}

export const AnimateSharedLayout = ({
  children,
  layoutId,
  isPresent,
  variants,
  className,
}: AnimateSharedLayoutProps) => {
  return (
    <LayoutGroup>
      {isPresent && (
        <motion.div
          layoutId={layoutId}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </LayoutGroup>
  );
};

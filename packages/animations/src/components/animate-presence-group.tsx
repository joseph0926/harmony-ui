import {
  AnimatePresence,
  type Variants,
  motion,
  HTMLMotionProps,
} from "framer-motion";
import React, { forwardRef } from "react";

import { useStaggerAnimation } from "../hooks/useStaggerAnimation";

interface AnimatePresenceGroupProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode[];
  itemClassName?: string;
  customVariants?: Variants;
  staggerChildren?: number;
  delayChildren?: number;
}

export const AnimatePresenceGroup = forwardRef<
  HTMLDivElement,
  AnimatePresenceGroupProps
>(
  (
    {
      children,
      className,
      itemClassName,
      customVariants,
      staggerChildren,
      delayChildren,
      ...props
    },
    ref
  ) => {
    const { getContainerVariants, getItemVariants } = useStaggerAnimation({
      staggerChildren,
      delayChildren,
    });

    const motionProps = {
      ref,
      className,
      variants: customVariants ?? getContainerVariants(),
      initial: "initial",
      animate: "animate",
      exit: "exit",
      ...props,
    };

    return (
      <AnimatePresence>
        <motion.div {...motionProps}>
          {children.map((child, index) => (
            <motion.div
              key={index}
              className={itemClassName}
              variants={getItemVariants()}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    );
  }
);

AnimatePresenceGroup.displayName = "AnimatePresenceGroup";

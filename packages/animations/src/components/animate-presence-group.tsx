import {
  AnimatePresence,
  type Variants,
  motion,
  HTMLMotionProps,
} from "framer-motion";
import React, { forwardRef } from "react";

import { useStaggerAnimation } from "../hooks/useStaggerAnimation";

export interface AnimatePresenceGroupProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode[] | React.ReactNode;
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
    ref,
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

    const renderChildren = () => {
      if (!children) {
        return null;
      }

      if (Array.isArray(children)) {
        return children.map((child, index) => (
          <motion.div
            key={index}
            className={itemClassName}
            variants={getItemVariants()}
          >
            {child}
          </motion.div>
        ));
      }

      return (
        <motion.div className={itemClassName} variants={getItemVariants()}>
          {children}
        </motion.div>
      );
    };

    return (
      <AnimatePresence>
        <motion.div {...motionProps}>{renderChildren()}</motion.div>
      </AnimatePresence>
    );
  },
);

AnimatePresenceGroup.displayName = "AnimatePresenceGroup";

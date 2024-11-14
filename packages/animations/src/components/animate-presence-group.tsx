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
  children: React.ReactNode;
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

    const childArray = React.Children.toArray(children);

    const renderChildren = () => {
      if (!childArray.length) {
        return null;
      }

      return childArray.map((child) =>
        child ? (
          <motion.div
            key={(child as React.ReactElement).key}
            className={itemClassName}
            variants={getItemVariants()}
          >
            {child}
          </motion.div>
        ) : null
      );
    };

    return (
      <AnimatePresence>
        <motion.div {...motionProps}>{renderChildren()}</motion.div>
      </AnimatePresence>
    );
  }
);

AnimatePresenceGroup.displayName = "AnimatePresenceGroup";

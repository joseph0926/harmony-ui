import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export function withAnimation<P>(
  WrappedComponent: React.ComponentType<P>,
  defaultVariants: any,
  motionProps?: Partial<HTMLMotionProps<"div">>
) {
  const ComponentWithAnimation = React.forwardRef<
    HTMLElement,
    P & { variants?: any }
  >(({ variants, ...props }, ref) => {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants || defaultVariants}
        {...motionProps}
      >
        <WrappedComponent ref={ref} {...(props as P)} />
      </motion.div>
    );
  });

  ComponentWithAnimation.displayName = `withAnimation(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return ComponentWithAnimation;
}

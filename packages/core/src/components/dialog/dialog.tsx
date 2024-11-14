import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import {
  AnimatePresenceGroup,
  AnimateMount,
  useStaggerAnimation,
  useReducedMotion,
} from "@harmony-ui/animations";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50",
        "bg-black/40 backdrop-blur-sm dark:bg-black/60",
        "duration-normal ease-natural",
        className
      )}
      {...props}
      asChild
    >
      <AnimateMount
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" },
          },
          exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
        }}
        initial={prefersReducedMotion ? false : "initial"}
      >
        <div />
      </AnimateMount>
    </DialogPrimitive.Overlay>
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    size?: "sm" | "md" | "lg" | "xl" | "full";
    position?: "center" | "bottom";
  }
>(
  (
    { className, children, size = "md", position = "center", ...props },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    const sizeClasses = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      full: "max-w-full mx-4",
    };

    const positionClasses = {
      center: "top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
      bottom: "bottom-0 left-0 right-0 translate-y-0 sm:bottom-4",
    };

    const getContentVariants = () => ({
      initial: {
        opacity: 0,
        scale: 0.95,
        y: position === "bottom" ? 20 : 0,
      },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        },
      },
      exit: {
        opacity: 0,
        scale: 0.95,
        y: position === "bottom" ? 20 : 0,
        transition: {
          duration: 0.2,
          ease: [0.32, 0, 0.67, 0],
        },
      },
    });

    return (
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed z-50 w-full",
            sizeClasses[size],
            positionClasses[position],
            "border p-6 shadow-lg",
            "bg-surface text-content",
            "dark:bg-surface dark:text-content",
            "border-neutral-200 dark:border-neutral-800",
            position === "bottom" ? "rounded-t-lg sm:rounded-lg" : "rounded-lg",
            "duration-normal ease-natural",
            className
          )}
          {...props}
          asChild
        >
          <AnimateMount
            variants={getContentVariants()}
            initial={prefersReducedMotion ? false : "initial"}
          >
            <div className="relative">
              {children}
              <DialogClose />
            </div>
          </AnimateMount>
        </DialogPrimitive.Content>
      </DialogPortal>
    );
  }
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(
      "absolute right-4 top-4",
      "rounded-sm opacity-70",
      "hover:opacity-100",
      "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
      "disabled:pointer-events-none",
      "text-neutral-500 hover:text-neutral-700",
      "dark:text-neutral-400 dark:hover:text-neutral-200",
      className
    )}
    {...props}
  >
    <AnimateMount
      variants={{
        initial: { opacity: 0, scale: 0.8 },
        animate: {
          opacity: 1,
          scale: 1,
          transition: { delay: 0.1, duration: 0.2 },
        },
        exit: { opacity: 0, scale: 0.8 },
      }}
    >
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </AnimateMount>
  </DialogPrimitive.Close>
));
DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogHeader = React.forwardRef<
  HTMLMotionProps<"div">,
  React.HTMLAttributes<HTMLMotionProps<"div">>
>(({ className, children, ...props }, ref) => {
  const { getContainerVariants, getItemVariants } = useStaggerAnimation({
    staggerChildren: 0.1,
    delayChildren: 0.2,
  });

  // React.Children.toArray를 사용하여 children을 배열로 변환
  const childrenArray = React.Children.toArray(children);

  return (
    <AnimatePresenceGroup
      ref={ref}
      {...props}
      className={cn("flex flex-col gap-1.5 text-start", className)}
      customVariants={getContainerVariants()}
    >
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={getItemVariants()}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {child}
        </motion.div>
      ))}
    </AnimatePresenceGroup>
  );
});
DialogHeader.displayName = "DialogHeader";

const DialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { getContainerVariants, getItemVariants } = useStaggerAnimation({
    staggerChildren: 0.05,
    delayChildren: 0.3,
  });

  const childrenArray = React.Children.toArray(children);

  return (
    <AnimatePresenceGroup
      ref={ref}
      {...props}
      className={cn(
        "flex flex-col-reverse gap-2",
        "sm:flex-row sm:justify-end sm:gap-2",
        className
      )}
      customVariants={getContainerVariants()}
    >
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={getItemVariants()}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full sm:w-auto"
        >
          {child}
        </motion.div>
      ))}
    </AnimatePresenceGroup>
  );
});
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      "text-content dark:text-content",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "text-sm",
      "text-content-subtle dark:text-content-subtle",
      className
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

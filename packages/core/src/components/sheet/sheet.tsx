"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../utils";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import {
  AnimateMount,
  AnimateList,
  useAnimationContext,
} from "@harmony-ui/animations";
import {
  createSheetVariants,
  sheetOverlayVariants,
  sheetChildVariants,
} from "./sheet.variant";

interface SheetContextValue {
  open: boolean;
  direction: "left" | "right" | "top" | "bottom";
}

const SheetContext = React.createContext<SheetContextValue>({
  open: false,
  direction: "right",
});

const useSheet = () => {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("useSheet must be used within a SheetProvider");
  }
  return context;
};

interface SheetProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Sheet = ({
  children,
  direction = "right",
  open: controlledOpen,
  onOpenChange,
}: SheetProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const open = controlledOpen ?? uncontrolledOpen;

  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      setUncontrolledOpen(newOpen);
      onOpenChange?.(newOpen);
    },
    [onOpenChange]
  );

  return (
    <SheetContext.Provider value={{ open, direction }}>
      <SheetPrimitive.Root open={open} onOpenChange={handleOpenChange}>
        {children}
      </SheetPrimitive.Root>
    </SheetContext.Provider>
  );
};

interface SheetTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const SheetTrigger = ({ children, asChild }: SheetTriggerProps) => {
  return (
    <SheetPrimitive.Trigger asChild={asChild}>
      {children}
    </SheetPrimitive.Trigger>
  );
};

interface SheetContentProps {
  children: React.ReactNode;
  className?: string;
}

const SheetContent = ({ children, className }: SheetContentProps) => {
  const { open, direction } = useSheet();
  const { prefersReducedMotion } = useAnimationContext();
  const variants = React.useMemo(
    () => createSheetVariants(direction),
    [direction]
  );

  const getPositionClasses = () => {
    switch (direction) {
      case "left":
        return "left-0 top-0 h-full";
      case "right":
        return "right-0 top-0 h-full";
      case "top":
        return "top-0 w-full !max-w-full";
      case "bottom":
        return "bottom-0 w-full !max-w-full";
      default:
        return "right-0 top-0 h-full";
    }
  };

  const transformTemplate = ({
    x = 0,
    y = 0,
    rotateX = 0,
    rotateY = 0,
    scaleX = 1,
    scaleY = 1,
    perspective = 2000,
  }: any) => {
    const transforms = [];

    if (perspective !== 2000) {
      transforms.push(`perspective(${perspective}px)`);
    }

    transforms.push(
      `translate3d(${typeof x === "string" ? x : `${x}px`}, ${
        typeof y === "string" ? y : `${y}px`
      }, 0px)`
    );

    if (rotateX || rotateY) {
      transforms.push(
        `rotate3d(${rotateX ? 1 : 0}, ${rotateY ? 1 : 0}, 0, ${Math.max(Math.abs(rotateX), Math.abs(rotateY))}deg)`
      );
    }

    if (scaleX !== 1 || scaleY !== 1) {
      transforms.push(`scale3d(${scaleX}, ${scaleY}, 1)`);
    }

    return transforms.length ? transforms.join(" ") : "none";
  };

  return (
    <AnimatePresence>
      {open && (
        <SheetPrimitive.Portal forceMount>
          <SheetPrimitive.Overlay asChild>
            <motion.div
              className={cn(
                "fixed inset-0 z-50",
                "bg-black/50 backdrop-blur-[8px]",
                "will-change-[opacity,backdrop-filter]"
              )}
              variants={sheetOverlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              data-state={open ? "open" : "closed"}
            />
          </SheetPrimitive.Overlay>

          <SheetPrimitive.Content asChild>
            <motion.div
              variants={prefersReducedMotion ? undefined : variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transformTemplate={transformTemplate}
              className={cn(
                "fixed z-50",
                "w-3/4 max-w-md",
                "bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl",
                "border-l dark:border-gray-700",
                "p-6 shadow-lg",
                "will-change-transform",
                "transform-gpu",
                "contain-paint",
                "motion-reduce:transform-none",
                getPositionClasses(),
                className
              )}
              data-state={open ? "open" : "closed"}
              style={{
                perspective: 1000,
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                WebkitBackfaceVisibility: "hidden",
                WebkitPerspective: 1000,
                WebkitTransformStyle: "preserve-3d",
              }}
            >
              <div className="relative w-full h-full overflow-auto overscroll-contain">
                <AnimateList
                  staggerChildren={0.05}
                  delayChildren={0.1}
                  className="space-y-4"
                >
                  {children}
                </AnimateList>

                <AnimateMount>
                  <SheetPrimitive.Close
                    className={cn(
                      "absolute right-4 top-4 rounded-full p-2",
                      "opacity-70 ring-offset-white",
                      "transition-all duration-200",
                      "hover:opacity-100 hover:rotate-90",
                      "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                      "disabled:pointer-events-none",
                      "transform-gpu",
                      "motion-reduce:transform-none"
                    )}
                    data-state={open ? "open" : "closed"}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </SheetPrimitive.Close>
                </AnimateMount>
              </div>
            </motion.div>
          </SheetPrimitive.Content>
        </SheetPrimitive.Portal>
      )}
    </AnimatePresence>
  );
};

const SheetHeader = ({ className, ...props }: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      variants={sheetChildVariants}
      className={cn(
        "flex flex-col space-y-2 text-left",
        "will-change-transform",
        "transform-gpu",
        className
      )}
      {...props}
    />
  );
};

const SheetFooter = ({ className, ...props }: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      variants={sheetChildVariants}
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        "will-change-transform",
        "transform-gpu",
        className
      )}
      {...props}
    />
  );
};

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof SheetPrimitive.Title> & { className?: string }
>(({ className, children, ...props }, ref) => (
  <SheetPrimitive.Title asChild {...props}>
    <motion.h2
      ref={ref}
      variants={sheetChildVariants}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        "will-change-transform",
        "transform-gpu",
        className
      )}
    >
      {children}
    </motion.h2>
  </SheetPrimitive.Title>
));

SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof SheetPrimitive.Description> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <SheetPrimitive.Description asChild {...props}>
    <motion.p
      ref={ref}
      variants={sheetChildVariants}
      className={cn(
        "text-sm text-muted-foreground",
        "will-change-transform",
        "transform-gpu",
        className
      )}
    >
      {children}
    </motion.p>
  </SheetPrimitive.Description>
));

SheetDescription.displayName = "SheetDescription";

Sheet.Trigger = SheetTrigger;
Sheet.Content = SheetContent;
Sheet.Header = SheetHeader;
Sheet.Footer = SheetFooter;
Sheet.Title = SheetTitle;
Sheet.Description = SheetDescription;

export { Sheet };

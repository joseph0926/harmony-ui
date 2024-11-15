"use client";

import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../utils";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { useDialogAnimation } from "../../hooks/use-dialog";
import {
  AnimateMount,
  AnimateList,
  useAnimationContext,
} from "@harmony-ui/animations";

interface DialogContextValue {
  open: boolean;
}

const DialogContext = React.createContext<DialogContextValue>({ open: false });

const useDialog = () => {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Dialog = ({
  children,
  open: controlledOpen,
  onOpenChange,
}: DialogProps) => {
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
    <DialogContext.Provider value={{ open }}>
      <RadixDialog.Root open={open} onOpenChange={handleOpenChange}>
        {children}
      </RadixDialog.Root>
    </DialogContext.Provider>
  );
};

interface DialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const DialogTrigger = ({ children, asChild }: DialogTriggerProps) => {
  return (
    <RadixDialog.Trigger asChild={asChild}>{children}</RadixDialog.Trigger>
  );
};

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

const DialogContent = ({ children, className }: DialogContentProps) => {
  const { open } = useDialog();
  const { prefersReducedMotion } = useAnimationContext();
  const { getOverlayVariants, getContentVariants } = useDialogAnimation();

  const transformTemplate = ({
    x = 0,
    y = 0,
    scale = 1,
    rotateX = 0,
    perspective = 1000,
  }: any) => {
    const transforms = [];

    if (perspective !== 1000) {
      transforms.push(`perspective(${perspective}px)`);
    }

    transforms.push(
      `translate3d(${typeof x === "string" ? x : `${x}px`}, ${
        typeof y === "string" ? y : `${y}px`
      }, 0px)`
    );

    if (scale !== 1) transforms.push(`scale3d(${scale}, ${scale}, 1)`);
    if (rotateX) transforms.push(`rotateX(${rotateX}deg)`);

    return transforms.length ? transforms.join(" ") : "none";
  };

  return (
    <AnimatePresence>
      {open && (
        <RadixDialog.Portal forceMount>
          <RadixDialog.Overlay asChild>
            <motion.div
              className={cn(
                "fixed inset-0 z-50",
                "bg-black/50 backdrop-blur-[8px]",
                "will-change-[opacity,backdrop-filter]"
              )}
              variants={getOverlayVariants()}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </RadixDialog.Overlay>

          <RadixDialog.Content asChild>
            <motion.div
              variants={prefersReducedMotion ? undefined : getContentVariants()}
              initial="initial"
              animate="animate"
              exit="exit"
              transformTemplate={transformTemplate}
              className={cn(
                "fixed left-[50%] top-[50%] z-50 w-full max-w-lg",
                "translate-x-[-50%] translate-y-[-50%]",
                "bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl",
                "rounded-lg shadow-lg p-6",
                "will-change-transform",
                "transform-gpu",
                "contain-paint",
                "motion-reduce:transform-none",
                className
              )}
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
                  <RadixDialog.Close
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
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </RadixDialog.Close>
                </AnimateMount>
              </div>
            </motion.div>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      )}
    </AnimatePresence>
  );
};

const DialogHeader = ({ className, ...props }: HTMLMotionProps<"div">) => {
  const { getChildVariants } = useDialogAnimation();

  return (
    <motion.div
      variants={getChildVariants()}
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        "will-change-transform",
        "transform-gpu",
        className
      )}
      {...props}
    />
  );
};

const DialogFooter = ({ className, ...props }: HTMLMotionProps<"div">) => {
  const { getChildVariants } = useDialogAnimation();

  return (
    <motion.div
      variants={getChildVariants()}
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

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof RadixDialog.Title> & { className?: string }
>(({ className, children, ...props }, ref) => {
  const { getChildVariants } = useDialogAnimation();

  return (
    <RadixDialog.Title asChild {...props}>
      <motion.h2
        ref={ref}
        variants={getChildVariants()}
        className={cn(
          "text-lg font-semibold leading-none tracking-tight",
          "will-change-transform",
          "transform-gpu",
          className
        )}
      >
        {children}
      </motion.h2>
    </RadixDialog.Title>
  );
});

DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof RadixDialog.Description> & { className?: string }
>(({ className, children, ...props }, ref) => {
  const { getChildVariants } = useDialogAnimation();

  return (
    <RadixDialog.Description asChild {...props}>
      <motion.p
        ref={ref}
        variants={getChildVariants()}
        className={cn(
          "text-sm text-muted-foreground",
          "will-change-transform",
          "transform-gpu",
          className
        )}
      >
        {children}
      </motion.p>
    </RadixDialog.Description>
  );
});

DialogDescription.displayName = "DialogDescription";

Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;
Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;

export { Dialog };

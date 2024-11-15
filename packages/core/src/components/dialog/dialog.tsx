"use client";

import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../utils";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { useDialogAnimation } from "../../hooks/use-dialog";
import { AnimateMount, AnimateList } from "@harmony-ui/animations";

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
  const { getOverlayVariants, getContentVariants } = useDialogAnimation();

  return (
    <AnimatePresence>
      {open && (
        <RadixDialog.Portal forceMount>
          <RadixDialog.Overlay asChild>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50"
              variants={getOverlayVariants()}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </RadixDialog.Overlay>

          <RadixDialog.Content asChild>
            <motion.div
              variants={getContentVariants()}
              initial="initial"
              animate="animate"
              exit="exit"
              className={cn(
                "fixed left-[50%] top-[50%] z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
                "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6",
                "origin-[50%_50%]",
                className
              )}
            >
              <AnimateList staggerChildren={0.05} delayChildren={0.1}>
                {children}
              </AnimateList>

              <AnimateMount>
                <RadixDialog.Close
                  className={cn(
                    "absolute right-4 top-4 rounded-sm opacity-70",
                    "transition-all duration-200",
                    "hover:opacity-100 hover:rotate-90",
                    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    "disabled:pointer-events-none"
                  )}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </RadixDialog.Close>
              </AnimateMount>
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
        className
      )}
      {...props}
    />
  );
};

type DialogTitleProps = React.ComponentProps<typeof RadixDialog.Title> & {
  className?: string;
};

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, children, ...props }, ref) => {
    const { getChildVariants } = useDialogAnimation();

    return (
      <RadixDialog.Title asChild {...props}>
        <motion.h2
          ref={ref}
          variants={getChildVariants()}
          className={cn(
            "text-lg font-semibold leading-none tracking-tight",
            className
          )}
        >
          {children}
        </motion.h2>
      </RadixDialog.Title>
    );
  }
);

DialogTitle.displayName = "DialogTitle";

type DialogDescriptionProps = React.ComponentProps<
  typeof RadixDialog.Description
> & {
  className?: string;
};

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(({ className, children, ...props }, ref) => {
  const { getChildVariants } = useDialogAnimation();

  return (
    <RadixDialog.Description asChild {...props}>
      <motion.p
        ref={ref}
        variants={getChildVariants()}
        className={cn("text-sm text-muted-foreground", className)}
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

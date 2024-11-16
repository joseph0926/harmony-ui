"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import {
  AnimateMount,
  useAnimationSequence,
  DURATIONS,
  EASINGS,
  combinationVariants,
} from "@harmony-ui/animations";
import { cn } from "../lib/utils";
import { X } from "lucide-react";

interface DialogContextValue {
  isOpen: boolean;
  onClose: () => void;
}

const DialogContext = createContext<DialogContextValue | null>(null);

const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog components must be used within a Dialog");
  }
  return context;
};

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOutsideClick?: boolean;
  closeOnEsc?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  closeOnOutsideClick = true,
  closeOnEsc = true,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!closeOnEsc) return;

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [closeOnEsc, isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      dialogRef.current?.focus();
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOutsideClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const content = (
    <DialogContext.Provider value={{ isOpen, onClose }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div onClick={handleOverlayClick} className="fixed inset-0">
              <DialogOverlay />
            </div>
            <div ref={dialogRef} tabIndex={-1} className="relative z-60">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </DialogContext.Provider>
  );

  if (typeof document === "undefined") return null;

  return createPortal(content, document.body);
};

interface DialogOverlayProps {
  className?: string;
}

export const DialogOverlay: React.FC<DialogOverlayProps> = ({ className }) => {
  const { onClose } = useDialog();

  return (
    <AnimateMount
      type="fade"
      duration="fast"
      className={cn("fixed inset-0 bg-black/50 dark:bg-black/70", className)}
      onClick={onClose}
    />
  );
};

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  className,
}) => {
  const { isOpen } = useDialog();
  const { controls, play } = useAnimationSequence();

  useEffect(() => {
    if (isOpen) {
      play([
        {
          target: {
            scale: [0.95, 1.02, 0.98, 1],
            opacity: 1,
            transition: {
              duration: DURATIONS.normal,
              ease: EASINGS.spring,
            },
          },
          duration: "normal",
        },
        {
          target: {
            y: [20, 0],
            transition: {
              duration: DURATIONS.fast,
            },
          },
          duration: "fast",
          delay: 0.1,
        },
      ]);
    }
  }, [isOpen, play]);

  return (
    <AnimateMount
      type="scale"
      duration="normal"
      easing="spring"
      customVariant={combinationVariants.elasticScale}
      className={cn(
        "relative z-50 w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg bg-white dark:bg-gray-800 p-6 shadow-xl",
        className
      )}
      animate={controls}
    >
      {children}
    </AnimateMount>
  );
};

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  className,
}) => {
  return (
    <AnimateMount
      type="slide"
      direction="down"
      duration="normal"
      easing="spring"
      className={cn(
        "text-lg font-semibold text-gray-900 dark:text-gray-100",
        className
      )}
    >
      <h2 id="dialog-title">{children}</h2>
    </AnimateMount>
  );
};

interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogDescription: React.FC<DialogDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <AnimateMount
      type="slide"
      direction="down"
      duration="normal"
      easing="easeOut"
      config={{
        distance: 10,
        opacity: 1,
      }}
      className={cn("mt-2 text-gray-600 dark:text-gray-300", className)}
    >
      <p id="dialog-description">{children}</p>
    </AnimateMount>
  );
};

interface DialogCloseProps {
  className?: string;
}

export const DialogClose: React.FC<DialogCloseProps> = ({ className }) => {
  const { onClose } = useDialog();

  return (
    <AnimateMount
      type="scale"
      duration="fast"
      easing="spring"
      customVariant={{
        initial: { rotate: -180, scale: 0.5, opacity: 0 },
        animate: {
          rotate: 0,
          scale: 1,
          opacity: 1,
          transition: {
            duration: DURATIONS.normal,
            ease: EASINGS.spring,
          },
        },
        exit: {
          rotate: 180,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: DURATIONS.fast,
            ease: EASINGS.easeOut,
          },
        },
      }}
      className={cn(
        "absolute right-4 top-4 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200",
        className
      )}
    >
      <button onClick={onClose} aria-label="Close dialog">
        <X size={18} />
      </button>
    </AnimateMount>
  );
};

export const DialogRoot = Object.assign(Dialog, {
  Overlay: DialogOverlay,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
});

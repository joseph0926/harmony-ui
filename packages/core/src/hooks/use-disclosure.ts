import { useCallback } from "react";

import { useControlled } from "./use-controlled";

interface UseDisclosureProps {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onOpen?(): void;
  onClose?(): void;
}

export function useDisclosure(props: UseDisclosureProps = {}) {
  const {
    isOpen: isOpenProp,
    defaultIsOpen = false,
    onOpen: onOpenProp,
    onClose: onCloseProp,
  } = props;

  const [isOpen, setIsOpen] = useControlled({
    controlled: isOpenProp,
    default: defaultIsOpen,
    name: "useDisclosure",
    state: "isOpen",
  });

  const onClose = useCallback(() => {
    setIsOpen(false);
    onCloseProp?.();
  }, [onCloseProp, setIsOpen]);

  const onOpen = useCallback(() => {
    setIsOpen(true);
    onOpenProp?.();
  }, [onOpenProp, setIsOpen]);

  const onToggle = useCallback(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen, onClose, onOpen]);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}

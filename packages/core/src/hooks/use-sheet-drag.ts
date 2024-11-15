import { useCallback } from "react";
import { PanInfo } from "framer-motion";
import { slideDirections } from "../components/sheet/sheet.variant";

export const useSheetDrag = (
  direction: keyof typeof slideDirections,
  onClose: () => void
) => {
  const getDragProps = useCallback(() => {
    const isHorizontal = direction === "left" || direction === "right";
    const dragDirection = isHorizontal ? "x" : "y";
    const dragMultiplier = direction === "left" || direction === "top" ? 1 : -1;

    return {
      drag: dragDirection,
      dragElastic: 0.1,
      dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
      dragTransition: { bounceStiffness: 300, bounceDamping: 30 },
      onDragEnd: (_e: any, info: PanInfo) => {
        const offset = isHorizontal ? info.offset.x : info.offset.y;
        const velocity = isHorizontal ? info.velocity.x : info.velocity.y;

        if (Math.abs(offset) > 100 || Math.abs(velocity) > 500) {
          if (offset * dragMultiplier > 0) {
            onClose();
          }
        }
      },
    };
  }, [direction, onClose]);

  return { getDragProps };
};

import { type PanInfo } from "framer-motion";
import { useCallback } from "react";

interface UseDragAnimationOptions {
  threshold?: number;
  axis?: "x" | "y";
  onDragEnd?: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => void;
}

export const useDragAnimation = (options: UseDragAnimationOptions = {}) => {
  const { threshold = 50, axis = "x", onDragEnd } = options;

  const dragProps = {
    drag: axis,
    dragElastic: 0.5,
    dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
    onDragEnd: useCallback(
      (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const offset = axis === "x" ? info.offset.x : info.offset.y;
        if (Math.abs(offset) >= threshold && onDragEnd) {
          onDragEnd(event, info);
        }
      },
      [axis, threshold, onDragEnd],
    ),
  };

  return dragProps;
};

import { useCallback } from "react";
import { type PanInfo, DragHandlers } from "framer-motion";

interface UseDragAnimationOptions {
  threshold?: number;
  axis?: "x" | "y";
  onDragEnd?: DragHandlers["onDragEnd"];
}

export const useDragAnimation = (options: UseDragAnimationOptions = {}) => {
  const { threshold = 50, axis = "x", onDragEnd } = options;

  const handleDragEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const offset = axis === "x" ? info.offset.x : info.offset.y;
      if (Math.abs(offset) >= threshold && onDragEnd) {
        onDragEnd(event, info);
      }
    },
    [axis, threshold, onDragEnd]
  );

  return {
    drag: axis,
    dragElastic: 0.5,
    onDragEnd: handleDragEnd,
  };
};

import React, { useState, useCallback } from "react";

interface UseControlledProps<T> {
  controlled: T | undefined;
  default: T;
  name: string;
  state?: string;
}

export function useControlled<T>({
  controlled,
  default: defaultProp,
  name,
  state = "value",
}: UseControlledProps<T>) {
  const { current: isControlled } = React.useRef(controlled !== undefined);
  const [valueState, setValue] = useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      if (isControlled !== (controlled !== undefined)) {
        console.error(
          `[@harmony-ui/core] ${name} component is changing from ${
            isControlled ? "controlled" : "uncontrolled"
          } to ${isControlled ? "uncontrolled" : "controlled"} for "${state}" prop.`,
        );
      }
    }
  }, [state, name, controlled, isControlled]);

  const setValueIfUncontrolled = useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    [isControlled],
  );

  return [value, setValueIfUncontrolled] as const;
}

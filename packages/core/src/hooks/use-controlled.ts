import { useState, useCallback, useEffect, useRef } from "react";

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
  const isControlled = controlled !== undefined;
  const { current: wasControlled } = useRef(isControlled);
  const [valueState, setValue] = useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      if (isControlled !== wasControlled) {
        console.warn(
          `[@harmony-ui/core] The component '${name}' is changing from ${
            wasControlled ? "controlled" : "uncontrolled"
          } to ${isControlled ? "controlled" : "uncontrolled"}. ` +
            `Decide between using a controlled or uncontrolled '${state}' for the lifetime of the component.`
        );
      }
    }
  }, [name, state, isControlled, wasControlled]);

  const setValueIfUncontrolled = useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    [isControlled]
  );

  return [value, setValueIfUncontrolled] as const;
}

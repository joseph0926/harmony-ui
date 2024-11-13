import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type WithClassName = {
  className?: string;
};

export type WithChildren<T> = T & {
  children?: React.ReactNode;
};

export type WithAsChild<T> = T & {
  asChild?: boolean;
};

export type ComponentProps<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
> = React.ComponentProps<T>;

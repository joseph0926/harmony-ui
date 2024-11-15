import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type WithClassName = {
  className?: string;
};

export type WithChildren<T = unknown> = React.PropsWithChildren<T>;

export type WithAsChild<T = unknown> = T & {
  asChild?: boolean;
};

export type ComponentProps<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = React.ComponentProps<T>;

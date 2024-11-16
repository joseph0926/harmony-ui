import { Variants } from "framer-motion";
import { DURATIONS, EASINGS } from "../constants/animation";

/**
 * Configuration for spring animations
 * @property {number} [stiffness] - The spring stiffness
 * @property {number} [damping] - The spring damping
 * @property {number} [mass] - The moving mass of the spring
 * @property {number} [restSpeed] - The speed at which the animation is considered complete
 * @property {number} [restDelta] - The distance from the target at which the animation is considered complete
 */
type SpringTransition = {
  stiffness?: number;
  damping?: number;
  mass?: number;
  restSpeed?: number;
  restDelta?: number;
};

/**
 * Configuration for inertia animations
 * @property {number} [power] - Power of the decay animation
 * @property {number} [timeConstant] - Time constant of the decay animation
 * @property {(v: number) => number} [modifyTarget] - Function to modify the target value during animation
 */
type InertiaTransition = {
  power?: number;
  timeConstant?: number;
  modifyTarget?: (v: number) => number;
};

/**
 * Configuration for tween animations
 * @property {number} [delay] - Delay before the animation starts (in seconds)
 * @property {number} [repeatDelay] - Delay before each repeat (in seconds)
 * @property {"loop" | "reverse" | "mirror"} [repeatType] - How the animation should repeat
 * @property {number} [repeat] - Number of times to repeat the animation
 */
type TweenTransition = {
  delay?: number;
  repeatDelay?: number;
  repeatType?: "loop" | "reverse" | "mirror";
  repeat?: number;
};

/**
 * Mapping of animation types to their respective configurations
 * @property {SpringTransition} spring - Spring animation configuration
 * @property {InertiaTransition} inertia - Inertia animation configuration
 * @property {TweenTransition} tween - Tween animation configuration
 */
type TransitionByType = {
  spring: SpringTransition;
  inertia: InertiaTransition;
  tween: TweenTransition;
};

/**
 * Configuration options for creating variants
 * @template T - The type of animation ('spring' | 'inertia' | 'tween')
 * @property {keyof typeof DURATIONS} [duration='normal'] - Duration of the animation
 * @property {keyof typeof EASINGS} [easing='spring'] - Easing function to use
 * @property {T} [type] - Type of animation
 * @property {TransitionByType[T]} [custom] - Custom configuration for the specific animation type
 */
type CreateVariantConfig<T extends keyof TransitionByType> = {
  duration?: keyof typeof DURATIONS;
  easing?: keyof typeof EASINGS;
  type?: T;
  custom?: TransitionByType[T];
};

/**
 * Creates a Framer Motion variant with preconfigured transitions
 *
 * @template T - The type of animation ('spring' | 'inertia' | 'tween')
 * @param {Variants} variants - The base variants object
 * @param {CreateVariantConfig<T>} [config={}] - Configuration options for the variants
 * @returns {Variants} A new variants object with applied transitions
 *
 * @example
 * // Create a spring animation variant
 * const springVariant = createVariant(
 *   {
 *     initial: { scale: 0 },
 *     animate: { scale: 1 }
 *   },
 *   {
 *     type: 'spring',
 *     custom: {
 *       stiffness: 100,
 *       damping: 10
 *     }
 *   }
 * );
 *
 * @example
 * // Create a tween animation variant
 * const tweenVariant = createVariant(
 *   {
 *     initial: { opacity: 0 },
 *     animate: { opacity: 1 }
 *   },
 *   {
 *     type: 'tween',
 *     duration: 'slow',
 *     custom: {
 *       delay: 0.2,
 *       repeat: 2
 *     }
 *   }
 * );
 */
export const createVariant = <T extends keyof TransitionByType>(
  variants: Variants,
  config: CreateVariantConfig<T> = {} as CreateVariantConfig<T>
): Variants => {
  const { duration = "normal", easing = "spring", custom = {} } = config;
  const result: Variants = {};

  const transition = {
    duration: DURATIONS[duration],
    ease: EASINGS[easing],
    ...custom,
  };

  for (const key in variants) {
    result[key] = {
      transition,
      ...variants[key],
    };
  }

  return result;
};

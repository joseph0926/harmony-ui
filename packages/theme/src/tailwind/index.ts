import { type Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

import { colorTokens, sizeTokens, motionTransitions } from "../constants/theme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colorTokens.primary,
        accent: colorTokens.accent,
        surface: {
          DEFAULT: "hsl(var(--surface))",
          hover: "hsl(var(--surface-hover))",
          active: "hsl(var(--surface-active))",
        },
        content: {
          DEFAULT: "hsl(var(--content))",
          subtle: "hsl(var(--content-subtle))",
          muted: "hsl(var(--content-muted))",
        },
      },
      spacing: sizeTokens.spacing,
      borderRadius: sizeTokens.borderRadius,
      transitionTimingFunction: {
        base: `cubic-bezier(${motionTransitions.base.ease.join(",")})`,
        smooth: `cubic-bezier(${motionTransitions.smooth.ease.join(",")})`,
        bouncy: `cubic-bezier(${motionTransitions.bouncy.ease.join(",")})`,
        swift: `cubic-bezier(${motionTransitions.swift.ease.join(",")})`,
      },
      transitionDuration: {
        base: `${motionTransitions.base.duration * 1000}ms`,
        smooth: `${motionTransitions.smooth.duration * 1000}ms`,
        bouncy: `${motionTransitions.bouncy.duration * 1000}ms`,
        swift: `${motionTransitions.swift.duration * 1000}ms`,
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-up": "scaleUp 0.5s ease-out",
        "rotate-in": "rotateIn 0.5s ease-out",
        "bounce-in": "bounceIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-10deg)", opacity: "0" },
          "100%": { transform: "rotate(0)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    animatePlugin,
    //@ts-expect-error no type
    function ({ addUtilities }) {
      addUtilities({
        ".motion-safe": {
          "@media (prefers-reduced-motion: no-preference)": {
            "transition-property": "all",
          },
        },
        ".motion-reduce": {
          "@media (prefers-reduced-motion: reduce)": {
            "transition-property": "none",
          },
        },
        ".animate-base": {
          "transition-timing-function": `cubic-bezier(${motionTransitions.base.ease.join(",")})`,
          "transition-duration": `${motionTransitions.base.duration * 1000}ms`,
        },
        ".animate-smooth": {
          "transition-timing-function": `cubic-bezier(${motionTransitions.smooth.ease.join(",")})`,
          "transition-duration": `${motionTransitions.smooth.duration * 1000}ms`,
        },
        ".animate-bouncy": {
          "transition-timing-function": `cubic-bezier(${motionTransitions.bouncy.ease.join(",")})`,
          "transition-duration": `${motionTransitions.bouncy.duration * 1000}ms`,
        },
        ".animate-swift": {
          "transition-timing-function": `cubic-bezier(${motionTransitions.swift.ease.join(",")})`,
          "transition-duration": `${motionTransitions.swift.duration * 1000}ms`,
        },
      });
    },
  ],
} satisfies Config;

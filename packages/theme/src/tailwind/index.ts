import { type Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

import {
  colorTokens,
  lightThemeColors,
  darkThemeColors,
} from "../constants/colors";
import { spacing } from "../constants/spacing";
import { typography } from "../constants/typography";

import { animationConfig } from "./animation";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    spacing,
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        ...colorTokens,
        ...lightThemeColors,
      },
      fontFamily: typography.fonts,
      fontSize: typography.fontSizes,
      fontWeight: typography.fontWeights,
      lineHeight: typography.lineHeights,
      letterSpacing: typography.letterSpacings,
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      ...animationConfig,
    },
  },

  plugins: [
    animatePlugin,
    //@ts-expect-error no type
    function ({ addBase }) {
      addBase({
        ":root": {
          "--radius": "0.5rem",
          ...Object.entries(lightThemeColors).reduce(
            (acc, [key, value]) => ({
              ...acc,
              [`--${key}`]: value,
            }),
            {},
          ),
        },
        ".dark": {
          ...Object.entries(darkThemeColors).reduce(
            (acc, [key, value]) => ({
              ...acc,
              [`--${key}`]: value,
            }),
            {},
          ),
        },
      });
    },
  ],
} satisfies Config;

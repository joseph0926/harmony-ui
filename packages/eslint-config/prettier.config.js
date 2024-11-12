module.exports = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es5",
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./packages/theme/src/tailwind/config.ts",
  tailwindFunctions: ["cn", "cva"],
};

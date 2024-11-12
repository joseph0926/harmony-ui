import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["tailwindcss"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
  loader: {
    ".css": "copy",
  },
});

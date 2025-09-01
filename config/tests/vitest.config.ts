import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    includeSource: ["src/**/*.test.ts"],
    // replace with next line if you wright in-source tests
    // includeSource: ["src/**/*.{ts,test.ts}"],
  },
})

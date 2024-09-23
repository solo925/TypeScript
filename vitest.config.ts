// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // This allows the use of `describe`, `it`, etc.
    environment: 'node',
  },
});

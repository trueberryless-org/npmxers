import { defineVitestProject } from '@nuxt/test-utils/config'
import { defaultExclude, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      include: ['server/utils/**/*.ts', 'shared/**/*.ts', 'app/composables/**/*.ts'],
      provider: 'v8',
      reporter: ['text', 'json-summary', 'lcov'],
      thresholds: { branches: 90, functions: 90, lines: 90, statements: 90 },
    },
    projects: [
      {
        test: {
          exclude: [...defaultExclude, 'test/e2e/**', 'test/nuxt/**'],
          include: ['test/unit/**/*.test.ts'],
          name: 'unit',
        },
      },
      await defineVitestProject({
        test: {
          environment: 'nuxt',
          environmentOptions: { nuxt: { overrides: { ogImage: { enabled: false } } } },
          include: ['test/nuxt/**/*.test.ts'],
          name: 'nuxt',
          setupFiles: ['./test/nuxt/color-mode.js'],
        },
      }),
    ],
  },
})

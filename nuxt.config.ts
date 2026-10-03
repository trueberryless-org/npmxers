import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@vueuse/nuxt', 'nuxt-og-image', '@nuxt/image', '@nuxt/test-utils/module', '@netlify/nuxt'],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    },
    pageTransition: false,
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://npmxers.netlify.app',
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: '2025-07-31',

  vite: {
    optimizeDeps: {
      include: ['vue-confetti-explosion'],
    },
  },

  typescript: {
    tsConfig: {
      include: ['../test'],
    },
    nodeTsConfig: {
      include: ['../vitest.config.ts', '../playwright.config.ts'],
    },
  },

  image: {
    provider: 'netlify',
    domains: ['github.com'],
  },

  netlify: {
    images: {
      remoteURLPatterns: ['https://github.com/.*'],
    },
  },

  ogImage: {
    runtimeCacheStorage: {
      driver: 'netlify-blobs',
      name: 'npmxers-og-image-cache',
    },
  },
})

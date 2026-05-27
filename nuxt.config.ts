import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@netlify/nuxt',
  ],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    },
    pageTransition: false,
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://npmxers.trueberryless.org',
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: '2025-07-31',

  nitro: {
    storage: {
      cache: {
        driver: 'http',
        base: process.env.CACHE_API_URL,
        headers: {
          Authorization: `Bearer ${process.env.CACHE_API_TOKEN}`,
        },
      },
    },
  },

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
      include: ['../vitest.config.ts'],
    },
  },

  eslint: {
    config: {
      stylistic: true,
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

<script setup lang="ts">
useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'bg-neutral-950',
  },
})

useSeoMeta({
  ogSiteName: 'npmxers',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UApp>
    <AppHeader />
    <UContainer class="overflow-hidden">
      <NuxtPage keepalive />
    </UContainer>
    <AppFooter />
  </UApp>
</template>

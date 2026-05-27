<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', href: '/icon.png' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'bg-neutral-950',
  },
})

useSeoMeta({
  ogSiteName: 'npmxers',
  ogImage: '/social_image.jpg',
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

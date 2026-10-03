<script setup>
definePageMeta({
  colorMode: 'dark',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://npmxers.netlify.app/' }],
})

useSeoMeta({
  title: 'Are you an npmxer?',
  ogTitle: 'Are you an npmxer?',
  description: 'Discover your contributions across the npmx-dev GitHub organization.',
  ogDescription: 'Discover your contributions across the npmx-dev GitHub organization.',
  ogImage: 'https://npmxers.netlify.app/og-image.png',
  ogImageAlt: 'npmxers: Discover your contributions to npmx.',
  twitterImage: 'https://npmxers.netlify.app/og-image.png',
  ogUrl: 'https://npmxers.netlify.app/',
})
</script>

<template>
  <div class="flex flex-col gap-y-24 pt-4 pb-20 text-indigo-400">
    <HomeHero />
    <HomeContributors />
    <HomeJoin />
  </div>
</template>

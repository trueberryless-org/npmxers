<script setup>
definePageMeta({
  colorMode: 'dark',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://npmx.dev' }],
})

useSeoMeta({
  title: 'Are you an npmxer?',
  ogTitle: 'Are you an npmxer?',
  description:
    'Discover your contributions across the npmx-dev GitHub organization.',
  ogDescription:
    'Discover your contributions across the npmx-dev GitHub organization.',
  ogImage: 'https://npmx.dev/social-card.jpg',
  ogImageAlt: 'npmxers',
  twitterImage: 'https://npmx.dev/social-card.jpg',
  ogUrl: 'https://npmx.dev',
})
</script>

<template>
  <div class="text-indigo-400 flex flex-col gap-y-24 pt-4 pb-20">
    <HomeHero />
    <HomeContributors />
    <HomeJoin />
  </div>
</template>

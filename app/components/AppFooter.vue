<script setup lang="ts">
const socialLinks = [
  {
    to: 'https://bsky.app/profile/npmx.dev',
    alt: 'npmx Bluesky Account',
    icon: 'i-simple-icons-bluesky',
  },
  {
    to: 'https://github.com/npmx-dev/npmx.dev',
    alt: 'npmx.dev GitHub Repository',
    icon: 'i-simple-icons-github',
  },
  {
    to: 'https://build.npmx.dev',
    alt: 'npmx Discord Channel',
    icon: 'i-simple-icons-discord',
  },
] as Array<{ to: string, alt: string, icon: string }>
</script>

<template>
  <div class="border-t border-neutral-800">
    <UContainer class="flex justify-between gap-x-4 items-center h-20 sm:h-16">
      <span class="text-neutral-300 text-sm">
        Made with love by the npmx community 💜 (<NuxtLink
          to="https://github.com/trueberryless-org/npmxers"
          target="_blank"
          class="underline hover:text-white"
        >source code</NuxtLink>).
      </span>
      <ul class="flex items-center justify-center gap-x-2">
        <li
          v-for="social in socialLinks"
          :key="social.to"
        >
          <UButton
            variant="link"
            color="neutral"
            :to="social.to"
            :alt="social.alt"
            :icon="social.icon"
            target="_blank"
            :aria-label="social.alt"
          />
        </li>
      </ul>
    </UContainer>
  </div>
</template>

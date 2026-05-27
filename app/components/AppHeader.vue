<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const links: DropdownMenuItem[] = [
  {
    label: 'npmx.dev',
    description: 'Project website',
    to: 'https://npmx.dev',
    icon: 'i-simple-icons-github',
  },
  {
    label: 'npmx.dev repo',
    description: 'Main repository',
    to: 'https://github.com/npmx-dev/npmx.dev',
    icon: 'i-simple-icons-github',
  },
]
</script>

<template>
  <div
    class="h-20 w-full sticky top-0 bg-neutral-950/70 backdrop-blur-md z-50 flex flex-col justify-center"
  >
    <UContainer class="flex justify-between items-center w-full">
      <div class="flex items-center">
        <NuxtLink
          to="/"
          aria-label="go to home page"
          class="flex items-center"
        >
          <TheLogo class="h-6" />
        </NuxtLink>
        <UDropdownMenu
          :items="links"
          size="xl"
        >
          <UButton
            variant="ghost"
            color="neutral"
            icon="i-ph-caret-down-fill"
            square
            class="ml-1 opacity-50 hover:opacity-100"
            aria-label="dropdown button"
          />
        </UDropdownMenu>
      </div>
      <div class="flex items-center sm:gap-x-4 text-white font-medium">
        <UButton
          class="flex items-center sm:-mr-2"
          to="https://build.npmx.dev"
          target="_blank"
          variant="link"
          color="neutral"
          size="xl"
          aria-label="join us"
        >
          <UIcon
            name="i-simple-icons-discord"
            class="h-5 w-5"
          />
          <span class="hidden sm:block">Join us</span>
        </UButton>
        <div class="hidden sm:block h-8 w-px bg-neutral-700 -mr-2 sm:-mr-6" />
        <UButton
          to="https://github.com/npmx-dev/npmx.dev"
          class="flex gap-x-2 items-center"
          variant="link"
          color="neutral"
          size="xl"
          target="_blank"
          aria-label="star us"
        >
          <UIcon
            name="i-simple-icons-github"
            class="h-5 w-5 sm:ml-4"
          />
          <span class="hidden sm:block">Star us</span>
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

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
  <div class="sticky top-0 z-50 flex h-20 w-full flex-col justify-center bg-neutral-950">
    <UContainer class="flex w-full items-center justify-between">
      <div class="flex items-center">
        <NuxtLink to="/" aria-label="go to home page" class="flex items-center">
          <TheLogo class="h-6" />
        </NuxtLink>
        <UDropdownMenu :items="links" size="xl">
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
      <div class="flex items-center font-medium text-white sm:gap-x-4">
        <UButton
          class="flex items-center sm:-mr-2"
          to="https://build.npmx.dev"
          target="_blank"
          variant="link"
          color="neutral"
          size="xl"
          aria-label="join us"
        >
          <UIcon name="i-simple-icons-discord" class="h-5 w-5" />
          <span class="hidden sm:block">Join us</span>
        </UButton>
        <div class="-mr-2 hidden h-8 w-px bg-neutral-700 sm:-mr-6 sm:block" />
        <UButton
          to="https://github.com/npmx-dev/npmx.dev"
          class="flex items-center gap-x-2"
          variant="link"
          color="neutral"
          size="xl"
          target="_blank"
          aria-label="star us"
        >
          <UIcon name="i-simple-icons-github" class="h-5 w-5 sm:ml-4" />
          <span class="hidden sm:block">Star us</span>
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

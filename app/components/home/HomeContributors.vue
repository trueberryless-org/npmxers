<script setup lang="ts">
import type { Contributor } from '~~/shared/types'

const url = useRequestURL().origin
const { data: allContributors, status } = useLazyFetch<Contributor[]>('/contributors.json', {
  baseURL: url,
  server: false,
  default: () => [],
})
const limit = useState('contributors-limit', () => 100)

const showMore = () => {
  limit.value += 100
}

const contributors = computed(() => {
  return allContributors.value.slice(0, limit.value)
})
</script>

<template>
  <div id="contributors" class="scroll-mt-20 text-white">
    <h2 class="mb-12 text-3xl font-bold lg:text-4xl">They are already <span class="text-indigo-400">npmxers</span></h2>

    <div class="grid grid-cols-4 gap-4 sm:grid-cols-5 sm:gap-5 md:grid-cols-10 lg:gap-8">
      <template v-if="status !== 'success'">
        <div v-for="i in 100" :key="i" class="relative pt-[100%]">
          <div class="absolute inset-0 animate-pulse rounded-xl bg-neutral-900" />
        </div>
      </template>
      <div v-for="(contributor, index) in contributors" :key="index" class="relative pt-[100%]">
        <NuxtLink
          v-if="contributor.username"
          :key="contributor.username"
          :to="`/${contributor.username}`"
          class="absolute inset-0 flex transition-all"
          :style="{
            'transition-delay': `${((index % 8) + Math.floor(index / 8)) * 20}ms`,
          }"
        >
          <UTooltip class="w-full" :text="contributor.username">
            <NuxtImg
              :src="`https://github.com/${contributor.username}.png`"
              densities="x1 x2"
              height="80px"
              width="80px"
              :alt="contributor.username"
              loading="lazy"
              class="h-full w-full rounded-xl transition lg:hover:scale-110"
              :style="{ 'view-transition-name': `npmxer-${contributor.username}` }"
            />
          </UTooltip>
          <span class="absolute right-0 -bottom-2 inline-block rounded-t bg-neutral-950 px-1 text-sm font-medium"
            ><span class="text-xs font-light text-neutral-400">#</span>{{ index + 1 }}</span
          >
        </NuxtLink>
      </div>
    </div>
    <div>
      <div class="flex justify-center pt-8">
        <UButton
          variant="outline"
          color="neutral"
          class="rounded-full"
          size="xl"
          icon="i-ph-plus-bold"
          @click="showMore"
        >
          Show more
        </UButton>
      </div>
    </div>
  </div>
</template>

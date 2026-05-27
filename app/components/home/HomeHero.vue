<script setup lang="ts">
const unlockList = [
  '1 pull request merged',
  '1 helpful issue (completed, 3+ reactions or 5+ comments)',
  '1 helpful comment (3+ reactions)',
]
</script>

<template>
  <div
    class="text-white w-full min-h-[calc(100dvh-80px)] flex flex-col justify-center py-8 md:py-0"
  >
    <h1 class="text-4xl lg:text-6xl font-bold mb-6 text-center md:text-left">
      Are you an <span class="text-indigo-400">npmxer</span>?
    </h1>
    <div
      class="flex flex-col gap-y-10 md:flex-row md:justify-between items-center md:items-start gap-x-12 lg:gap-x-30"
    >
      <div class="flex flex-col gap-y-4 text-neutral-300 w-full md:w-1/2">
        <p class="text-base lg:text-lg lg:leading-8">
          Discover contributions across the
          <ULink
            to="https://github.com/npmx-dev"
            target="_blank"
          >
            npmx-dev
          </ULink>
          repositories, browse the community, and share any npmxer profile.
        </p>
        <div>
          <div class="mb-2">
            Become an
            <UBadge
              size="xl"
              color="primary"
              variant="subtle"
            >
              npmxer
            </UBadge>
            by having either:
          </div>
          <ul class="flex flex-col gap-y-1 pt-1 text-base">
            <li
              v-for="item in unlockList"
              :key="item"
              class="flex gap-x-2"
            >
              <UIcon
                name="i-heroicons-check-circle-20-solid"
                class="h-5 w-5 text-indigo-400"
              />
              <span>
                {{ item }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="w-full sm:max-w-md md:w-auto flex-1 flex justify-center md:justify-end"
      >
        <HomeCard class="w-full" />
      </div>
    </div>
  </div>
</template>

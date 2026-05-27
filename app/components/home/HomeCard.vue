<script setup lang="ts">
const username = ref('')
const normalizedUsername = computed(() => username.value.trim())
const canSubmit = computed(() => normalizedUsername.value.length > 0)

const goToProfile = async () => {
  if (!canSubmit.value) return
  await navigateTo(`/${normalizedUsername.value}`)
}
</script>

<template>
  <div
    class="relative w-full md:max-w-80 lg:max-w-120 min-h-75 md:min-h-87.5 lg:min-h-55.5"
  >
    <UPageCard
      class="md:max-w-100 lg:max-w-150 min-h-75 md:min-h-87.5 lg:min-h-55.5"
    >
      <div class="flex flex-col gap-y-6 items-center justify-center h-full">
        <p class="text-xl text-neutral-50 text-center">
          Look up any npmxer profile.
        </p>
        <form
          class="w-full max-w-sm flex flex-col gap-y-3"
          @submit.prevent="goToProfile"
        >
          <UInput
            v-model="username"
            size="lg"
            icon="i-simple-icons-github"
            placeholder="GitHub username"
            aria-label="GitHub username"
          />
          <UButton
            type="submit"
            label="View profile"
            color="neutral"
            variant="outline"
            class="w-full justify-center"
            :disabled="!canSubmit"
          />
        </form>
        <UButton
          to="#contributors"
          variant="link"
          color="neutral"
          icon="i-ph-arrow-down"
          label="Browse contributors"
          aria-label="Browse contributors list"
        />
      </div>
    </UPageCard>
  </div>
</template>

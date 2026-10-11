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
  <div class="relative min-h-75 w-full md:min-h-87.5 md:max-w-80 lg:min-h-55.5 lg:max-w-120">
    <UPageCard class="min-h-75 md:min-h-87.5 md:max-w-100 lg:min-h-55.5 lg:max-w-150">
      <div class="flex h-full flex-col items-center justify-center gap-y-6">
        <p class="text-center text-xl text-neutral-50">Look up any npmxer profile.</p>
        <form class="flex w-full max-w-sm flex-col gap-y-3" @submit.prevent="goToProfile">
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

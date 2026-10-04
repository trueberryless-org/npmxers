<script setup lang="ts">
import { getScoreRows } from '#shared/score'
import type { Contributor } from '#shared/types'

const props = defineProps<{
  contributor: Contributor
}>()

const format = useNumberFormatter()

const rows = computed(() => getScoreRows(props.contributor))

const sortedRows = computed(() => [...rows.value].sort((a, b) => b.total - a.total))
const maxTotal = computed(() => sortedRows.value[0]?.total ?? 0)

const animated = ref(false)
function onOpenModal() {
  animated.value = false
  nextTick(() => {
    requestAnimationFrame(() => {
      animated.value = true
    })
  })
}
</script>

<template>
  <UModal title="How is the score calculated?" :ui="{ body: 'p-0 sm:p-0' }" @update:open="$event && onOpenModal()">
    <UButton
      variant="ghost"
      icon="i-ph-info"
      color="neutral"
      size="xs"
      class="ml-1"
      aria-label="show score breakdown"
    />
    <template #body>
      <div class="p-5 sm:p-6">
        <div class="bg-border flex flex-col items-center gap-1 rounded py-4">
          <span class="text-4xl font-bold tabular-nums">{{ format(contributor.score) }}</span>
          <span class="text-muted text-sm">total points</span>
        </div>

        <div class="flex flex-col gap-3 pt-5">
          <div v-for="row in sortedRows" :key="row.label" class="flex flex-col gap-1.5">
            <div class="flex items-center justify-between text-sm">
              <span>{{ row.emoji }} {{ row.label }}</span>
              <span class="text-muted tabular-nums">
                {{ format(row.amount) }} × {{ row.multiplier }} =
                <span class="text-default font-medium">{{ format(row.total) }}</span>
              </span>
            </div>
            <div class="bg-elevated h-1.5 overflow-hidden rounded-full">
              <div
                class="bg-primary h-full rounded-full transition-all duration-500 ease-out"
                :style="{
                  width: animated && maxTotal ? `${(row.total / maxTotal) * 100}%` : '0%',
                  transitionDelay: `${sortedRows.indexOf(row) * 75}ms`,
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>

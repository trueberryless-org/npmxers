import type { Contributor, MergedPullRequests } from '#shared/types'

function normalizeMergedPRs(value: number | MergedPullRequests): MergedPullRequests {
  if (typeof value === 'number') {
    return { docs: 0, chore: 0, feat: 0, fix: 0, all: value }
  }
  return value
}

export const fetchContributors = cachedFunction<Contributor[]>(async (event) => {
  const origin = process.env.NUXT_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || getRequestURL(event).origin

  const raw = await $fetch<Contributor[]>(`${origin}/contributors.json`)
  return raw.map(c => ({
    ...c,
    merged_pull_requests: normalizeMergedPRs(c.merged_pull_requests),
  }))
}, {
  getKey: () => 'contributors',
  maxAge: 60 * 60, // 1 hour
})

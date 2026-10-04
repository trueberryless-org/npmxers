import type { Contributor, MergedPullRequests } from '../../shared/types'
import contributorsData from '../../public/contributors.json'

type RawContributor = Omit<Contributor, 'merged_pull_requests' | 'rank'> & {
  merged_pull_requests: number | MergedPullRequests
}

export function normalizeMergedPullRequests(value: number | MergedPullRequests): MergedPullRequests {
  if (typeof value === 'number') {
    return { docs: 0, chore: 0, feat: 0, fix: 0, all: value }
  }

  return value
}

export function normalizeContributors(raw: RawContributor[]) {
  return raw.map((contributor, index) => ({
    ...contributor,
    merged_pull_requests: normalizeMergedPullRequests(contributor.merged_pull_requests),
    rank: index + 1,
  }))
}

export function findContributor<T extends { username: string }>(contributors: T[], username: string) {
  const lowerCaseUsername = username.toLowerCase()

  return contributors.find((contributor) => contributor.username.toLowerCase() === lowerCaseUsername)
}

export const contributors = normalizeContributors(contributorsData as RawContributor[])

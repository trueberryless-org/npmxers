import { describe, expect, test } from 'vitest'

import {
  contributors,
  findContributor,
  normalizeContributors,
  normalizeMergedPullRequests,
} from '../../server/utils/contributors'

const base = { comments: 0, githubId: '1', helpful_comments: 0, helpful_issues: 0, issues: 0, reactions: 0, score: 0 }

describe('normalizeMergedPullRequests', () => {
  test('turns a plain count into a breakdown', () => {
    expect(normalizeMergedPullRequests(5)).toEqual({ all: 5, chore: 0, docs: 0, feat: 0, fix: 0 })
  })

  test('keeps an existing breakdown', () => {
    const breakdown = { all: 3, chore: 1, docs: 0, feat: 1, fix: 1 }

    expect(normalizeMergedPullRequests(breakdown)).toBe(breakdown)
  })
})

describe('normalizeContributors', () => {
  test('ranks by position and normalizes merged pull requests', () => {
    expect(
      normalizeContributors([
        { ...base, merged_pull_requests: 2, username: 'a' },
        { ...base, merged_pull_requests: { all: 1, chore: 0, docs: 0, feat: 1, fix: 0 }, username: 'b' },
      ]).map(({ merged_pull_requests, rank, username }) => [username, rank, merged_pull_requests.all]),
    ).toEqual([
      ['a', 1, 2],
      ['b', 2, 1],
    ])
  })
})

describe('findContributor', () => {
  const list = [{ username: 'DanielRoe' }, { username: 'other' }]

  test('ignores the case of the username', () => {
    expect(findContributor(list, 'danielroe')).toBe(list[0])
    expect(findContributor(list, 'OTHER')).toBe(list[1])
  })

  test('returns nothing for unknown users', () => {
    expect(findContributor(list, 'nobody')).toBeUndefined()
  })
})

describe('contributors.json', () => {
  test('is sorted by score, so the rank is the position', () => {
    const scores = contributors.map(({ score }) => score)

    expect(scores).toEqual(scores.toSorted((a, b) => b - a))
    expect(contributors[0]?.rank).toBe(1)
  })

  test('has unique usernames', () => {
    const names = contributors.map(({ username }) => username.toLowerCase())

    expect(new Set(names).size).toBe(names.length)
  })

  test('never contains bots', () => {
    expect(contributors.filter(({ username }) => username.includes('[bot]') || username.endsWith('-bot'))).toEqual([])
  })
})

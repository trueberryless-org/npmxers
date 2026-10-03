import { describe, expect, test } from 'vitest'

import contributors from '../../public/contributors.json'
import { computeScore, getScoreRows } from '../../shared/score'
import type { Contributor } from '../../shared/types'

const stats: Pick<
  Contributor,
  'comments' | 'helpful_comments' | 'helpful_issues' | 'issues' | 'merged_pull_requests' | 'reactions'
> = {
  comments: 10,
  helpful_comments: 2,
  helpful_issues: 3,
  issues: 4,
  merged_pull_requests: { all: 10, chore: 1, docs: 2, feat: 3, fix: 4 },
  reactions: 20,
}

describe('getScoreRows', () => {
  test('weighs every contribution type', () => {
    const rows = getScoreRows(stats)

    expect(rows.map(({ label, multiplier }) => [label, multiplier])).toEqual([
      ['Feature PRs', 7],
      ['Fix PRs', 5],
      ['Docs PRs', 4],
      ['Chore PRs', 3],
      ['Helpful issues', 3],
      ['Helpful comments', 2],
      ['Issues', 1],
      ['Comments', 0.5],
      ['Reactions', 0.1],
    ])
    expect(rows.map(({ amount }) => amount)).toEqual([3, 4, 2, 1, 3, 2, 4, 10, 20])
  })

  test('multiplies the amount with the weight', () => {
    expect(getScoreRows(stats).map(({ total }) => total)).toEqual([21, 20, 8, 3, 9, 4, 4, 5, 2])
  })
})

describe('computeScore', () => {
  test('sums and rounds the weighted contributions', () => {
    expect(computeScore(stats)).toBe(76)
    expect(computeScore({ ...stats, reactions: 4 })).toBe(74)
  })

  test('is zero without contributions', () => {
    expect(
      computeScore({
        comments: 0,
        helpful_comments: 0,
        helpful_issues: 0,
        issues: 0,
        merged_pull_requests: { all: 0, chore: 0, docs: 0, feat: 0, fix: 0 },
        reactions: 0,
      }),
    ).toBe(0)
  })

  test('matches the scores stored in contributors.json', () => {
    const outdated = contributors.filter((contributor) => {
      const merged =
        typeof contributor.merged_pull_requests === 'number'
          ? { all: contributor.merged_pull_requests, chore: 0, docs: 0, feat: 0, fix: 0 }
          : contributor.merged_pull_requests

      return computeScore({ ...contributor, merged_pull_requests: merged }) !== contributor.score
    })

    expect(outdated.map(({ username }) => username)).toEqual([])
  })
})

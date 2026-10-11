import type { Contributor } from './types'

type ScoredStats = Pick<
  Contributor,
  'comments' | 'helpful_comments' | 'helpful_issues' | 'issues' | 'merged_pull_requests' | 'reactions'
>

export interface ScoreRow {
  amount: number
  emoji: string
  label: string
  multiplier: number
  total: number
}

const SCORE_RULES = [
  {
    emoji: '🚀',
    label: 'Feature PRs',
    multiplier: 7,
    getAmount: (stats: ScoredStats) => stats.merged_pull_requests.feat,
  },
  { emoji: '🔧', label: 'Fix PRs', multiplier: 5, getAmount: (stats: ScoredStats) => stats.merged_pull_requests.fix },
  { emoji: '📝', label: 'Docs PRs', multiplier: 4, getAmount: (stats: ScoredStats) => stats.merged_pull_requests.docs },
  {
    emoji: '🧹',
    label: 'Chore PRs',
    multiplier: 3,
    getAmount: (stats: ScoredStats) => stats.merged_pull_requests.chore,
  },
  { emoji: '💡', label: 'Helpful issues', multiplier: 3, getAmount: (stats: ScoredStats) => stats.helpful_issues },
  { emoji: '💬', label: 'Helpful comments', multiplier: 2, getAmount: (stats: ScoredStats) => stats.helpful_comments },
  { emoji: '🐛', label: 'Issues', multiplier: 1, getAmount: (stats: ScoredStats) => stats.issues },
  { emoji: '🗨️', label: 'Comments', multiplier: 0.5, getAmount: (stats: ScoredStats) => stats.comments },
  { emoji: '⭐', label: 'Reactions', multiplier: 0.1, getAmount: (stats: ScoredStats) => stats.reactions },
]

export function getScoreRows(stats: ScoredStats): ScoreRow[] {
  return SCORE_RULES.map(({ emoji, getAmount, label, multiplier }) => {
    const amount = getAmount(stats)

    return { amount, emoji, label, multiplier, total: amount * multiplier }
  })
}

export function computeScore(stats: ScoredStats) {
  return Math.round(getScoreRows(stats).reduce((sum, { total }) => sum + total, 0))
}

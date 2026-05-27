export interface MergedPullRequests {
  docs: number
  chore: number
  feat: number
  fix: number
  all: number
}

export interface Contributor {
  username: string
  githubId: string
  issues: number
  merged_pull_requests: MergedPullRequests
  helpful_issues: number
  comments: number
  helpful_comments: number
  reactions: number
  score: number
  rank: number
}

export interface Score {
  type: string
  multiplier: number | ''
  amount: string
  total: string
}

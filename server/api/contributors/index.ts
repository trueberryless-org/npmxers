export default defineEventHandler(() => contributors.map(({ rank: _rank, ...contributor }) => contributor))

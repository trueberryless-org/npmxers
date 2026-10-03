export default defineEventHandler((event) => {
  const username = getRouterParam(event, 'username')

  if (!username) {
    throw createError({ statusCode: 400, statusMessage: 'Username missing' })
  }

  const contributor = findContributor(contributors, username)

  if (!contributor) {
    throw createError({ statusCode: 404, statusMessage: 'Contributor not found' })
  }

  return contributor
})

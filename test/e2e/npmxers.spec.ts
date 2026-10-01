import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

import contributors from '../../public/contributors.json' with { type: 'json' }

const [first] = contributors

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, (route) => route.abort())
    await page.goto('/')
  })

  test('asks whether you are an npmxer', async ({ page }) => {
    await expect(page).toHaveTitle('Are you an npmxer?')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Are you an npmxer?')
  })

  test('lists the contributors and links to their profile', async ({ page }) => {
    await expect(page.locator(`a[href="/${first?.username}"]`).first()).toBeVisible()
    expect(await page.locator('#contributors a').count()).toBeGreaterThanOrEqual(100)
  })

  test('has the canonical url, favicon and the standard Open Graph image', async ({ page }) => {
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://npmxers.netlify.app/')
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/favicon.svg')
    await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute(
      'content',
      'https://npmxers.netlify.app/og-image.png',
    )
  })

  test('does not scroll horizontally', async ({ page }) => {
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    )

    expect(overflow).toBeLessThanOrEqual(0)
  })

  test('has no accessibility violations', async ({ page }) => {
    await expect(page.locator('#contributors a').first()).toBeVisible()

    const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()

    expect(
      violations.map(({ id, nodes }) => `${id}: ${nodes.map(({ target }) => target.join(' ')).join(', ')}`),
    ).toEqual([])
  })
})

test.describe('profile page', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, (route) => route.abort())
  })

  test('shows the contributor and the score', async ({ page }) => {
    await page.goto(`/${first?.username}`)

    await expect(page).toHaveTitle(`${first?.username} is an npmxer`)
    await expect(page.getByText(String(first?.score)).first()).toBeVisible()
  })

  test('finds contributors regardless of the case', async ({ page }) => {
    const response = await page.goto(`/${first?.username.toUpperCase()}`)

    expect(response?.status()).toBe(200)
  })

  test('shows a 404 for unknown users', async ({ page }) => {
    const response = await page.goto('/this-user-does-not-exist-npmxers')

    expect(response?.status()).toBe(404)
  })

  test('has no accessibility violations', async ({ page }) => {
    await page.goto(`/${first?.username}`)

    const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()

    expect(
      violations.map(({ id, nodes }) => `${id}: ${nodes.map(({ target }) => target.join(' ')).join(', ')}`),
    ).toEqual([])
  })
})

test.describe('API', () => {
  test('lists all contributors ordered by score', async ({ request }) => {
    const response = await request.get('/api/contributors')
    const body = (await response.json()) as { score: number }[]

    expect(response.status()).toBe(200)
    expect(body).toHaveLength(contributors.length)
    expect(body.map(({ score }) => score)).toEqual(contributors.map(({ score }) => score))
  })

  test('returns a contributor with the rank', async ({ request }) => {
    const response = await request.get(`/api/contributors/${first?.username}`)

    expect(await response.json()).toMatchObject({ rank: 1, score: first?.score, username: first?.username })
  })

  test('returns 404 for unknown contributors', async ({ request }) => {
    expect((await request.get('/api/contributors/nobody-at-all')).status()).toBe(404)
  })

  test('redirects card images to the generated Open Graph image', async ({ request }) => {
    const response = await request.get(`/card/${first?.username}/og.png`, { maxRedirects: 0 })

    expect(response.status()).toBe(302)
    expect(response.headers()['location']).toBe(`/_og/r/${first?.username}.png`)
  })
})

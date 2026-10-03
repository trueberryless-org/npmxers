import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import HomeHero from '../../app/components/home/HomeHero.vue'

describe('HomeHero', () => {
  it('asks whether you are an npmxer and lists how to become one', async () => {
    const wrapper = await mountSuspended(HomeHero)

    expect(wrapper.find('h1').text()).toBe('Are you an npmxer?')
    expect(wrapper.findAll('li')).toHaveLength(3)
  })
})

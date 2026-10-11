import { describe, expect, it } from 'vitest'

describe('useNumberFormatter', () => {
  it('formats numbers the British way', () => {
    const format = useNumberFormatter()

    expect(format(1234567)).toBe('1,234,567')
    expect(format(0.5)).toBe('0.5')
  })
})

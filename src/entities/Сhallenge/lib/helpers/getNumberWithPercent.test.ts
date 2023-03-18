import getNumberWithPercent from './getNumberWithPercent'

describe('get number with percent test', () => {
  test('valid value', () => {
    expect(getNumberWithPercent(50)).toBe('50%')
  })

  test('boundary values', () => {
    expect(getNumberWithPercent(100)).toBe('100%')
    expect(getNumberWithPercent(0)).toBe('0%')
  })

  test('less than zero', () => {
    expect(getNumberWithPercent(-1)).toBe('0%')
  })

  test('more than a hundred', () => {
    expect(getNumberWithPercent(101)).toBe('100%')
  })
})

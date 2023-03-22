import getNextStage from './getNextStage'

describe('Test get next stage function', () => {
  test('Get stages in order', () => {
    expect(getNextStage('info')).toBe('current')
    expect(getNextStage('current')).toBe('wish')
    expect(getNextStage('wish')).toBe('result')
  })

  test('Get stage after last stage', () => {
    expect(getNextStage('result')).toBe('result')
  })
})

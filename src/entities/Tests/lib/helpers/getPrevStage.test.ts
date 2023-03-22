import getPrevStage from './getPrevStage'

describe('Test get prev stage function', () => {
  test('Get stages in order', () => {
    expect(getPrevStage('result')).toBe('wish')
    expect(getPrevStage('wish')).toBe('current')
    expect(getPrevStage('current')).toBe('info')
  })

  test('Get stage before first stage', () => {
    expect(getPrevStage('info')).toBe('info')
  })
})

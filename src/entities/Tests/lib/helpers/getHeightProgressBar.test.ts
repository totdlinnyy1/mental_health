import getHeightProgressBar from './getHeightProgressBar'

describe('Test get height the progress bar function', () => {
  test('Get height progress bar', () => {
    expect(getHeightProgressBar(50, 100)).toBe('50px')
  })
})

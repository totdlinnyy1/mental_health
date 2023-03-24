import getNextStage from './getNextStage'
import {EnterTestStages} from '../../consts/consts'

describe('Test get next stage function', () => {
  test('Get stages in order', () => {
    expect(getNextStage('info', EnterTestStages)).toBe('current')
    expect(getNextStage('current', EnterTestStages)).toBe('wish')
    expect(getNextStage('wish', EnterTestStages)).toBe('result')
  })

  test('Get stage after last stage', () => {
    expect(getNextStage('result', EnterTestStages)).toBe('result')
  })
})

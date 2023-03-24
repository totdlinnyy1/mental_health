import getPrevStage from './getPrevStage'
import {EnterTestStages} from '../../consts/consts'

describe('Test get prev stage function', () => {
  test('Get stages in order', () => {
    expect(getPrevStage('result', EnterTestStages)).toBe('wish')
    expect(getPrevStage('wish', EnterTestStages)).toBe('current')
    expect(getPrevStage('current', EnterTestStages)).toBe('info')
  })

  test('Get stage before first stage', () => {
    expect(getPrevStage('info', EnterTestStages)).toBe('info')
  })
})

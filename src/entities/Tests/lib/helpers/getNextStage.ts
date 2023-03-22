import {Stages} from '../../consts/consts'
import {Stage} from '../../types/types'

const getNextStage = (stage: Stage): Stage => {
  const curStage = Stages.indexOf(stage)

  if (curStage + 1 < Stages.length) {
    return Stages[curStage + 1]
  }

  return Stages[Stages.length - 1]
}

export default getNextStage

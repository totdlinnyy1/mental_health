import {Stages} from '../../consts/consts'
import {Stage} from '../../types/types'

const getNextStage = (stage: Stage): Stage => {
  const curStage = Stages.indexOf(stage)

  if (curStage - 1 >= 0) {
    return Stages[curStage - 1]
  }

  return Stages[0]
}

export default getNextStage

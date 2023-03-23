import {Box} from '@chakra-ui/react'
import {ComponentType, ReactNode} from 'react'

import {EnterTestStage} from '../../../../entities/Tests'
import useEnterTestStore from '../../lib/hooks/useEnterTestStore'

import CurrentStage from './CurrentStage/CurrentStage'
import InfoStage from './InfoStage/InfoStage'
import ResultStage from './ResultStage/ResultStage'
import WishStage from './WishStage/WishStage'

const Stages: ComponentType = () => {
  const {stage} = useEnterTestStore()

  const showStage = (curStage: EnterTestStage): ReactNode => {
    if (curStage === 'info') {
      return <InfoStage />
    }
    if (curStage === 'current') {
      return <CurrentStage />
    }
    if (curStage === 'wish') {
      return <WishStage />
    }
    if (curStage === 'result') {
      return <ResultStage />
    }
  }
  return <Box py={10}>{showStage(stage)}</Box>
}

export default Stages

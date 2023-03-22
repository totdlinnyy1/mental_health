import {Box, Button} from '@chakra-ui/react'
import {ComponentType} from 'react'

import useEnterTestStore from '../../../lib/hooks/useEnterTestStore'

const CurrentStage: ComponentType = () => {
  const {onNextStage} = useEnterTestStore()
  return (
    <Box>
      <Button colorScheme='blue' onClick={onNextStage}>
        Ответить
      </Button>
    </Box>
  )
}

export default CurrentStage

import {Box, Button} from '@chakra-ui/react'
import {ComponentType} from 'react'

import useEnterTestStore from '@widgets/EnterTest/lib/hooks/useEnterTestStore'

const InfoStage: ComponentType = () => {
  const {onNextStage} = useEnterTestStore()
  return (
    <Box>
      <Button colorScheme='blue' onClick={onNextStage}>
        Начать тестирование
      </Button>
    </Box>
  )
}

export default InfoStage

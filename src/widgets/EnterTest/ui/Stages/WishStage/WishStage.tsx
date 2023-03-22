import {Box, Button, ButtonGroup} from '@chakra-ui/react'
import {ComponentType} from 'react'

import useEnterTestStore from '../../../lib/hooks/useEnterTestStore'

const WishStage: ComponentType = () => {
  const {onNextStage, onPrevStage, onSaveResults} = useEnterTestStore()

  const onClick = (): void => {
    onSaveResults()
    onNextStage()
  }
  return (
    <Box>
      <ButtonGroup>
        <Button colorScheme='blue' onClick={onClick}>
          Ответить
        </Button>
        <Button variant='outline' colorScheme='blue' onClick={onPrevStage}>
          Назад
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default WishStage

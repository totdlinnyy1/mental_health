import {Box, Button, ButtonGroup} from '@chakra-ui/react'
import {ComponentType} from 'react'

import useEnterTestStore from '../../../lib/hooks/useEnterTestStore'
import WishSliders from '../../WishSliders/WishSliders'

const WishStage: ComponentType = () => {
  const store = useEnterTestStore()

  const onClick = (): void => {
    store.onSaveResults()
    store.onNextStage()
  }
  return (
    <Box>
      <WishSliders
        health={store.health.current}
        relationship={store.relationship.current}
        work={store.work.current}
        creativity={store.creativity.current}
      />
      <ButtonGroup mt={8}>
        <Button colorScheme='blue' onClick={onClick}>
          Ответить
        </Button>
        <Button
          variant='outline'
          colorScheme='blue'
          onClick={store.onPrevStage}
        >
          Назад
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default WishStage

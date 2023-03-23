import {Box, Button, ButtonGroup} from '@chakra-ui/react'
import {ComponentType, useState} from 'react'

import {IProgressCategories} from '../../../../../entities/Tests'
import useEnterTestStore from '../../../lib/hooks/useEnterTestStore'
import WishSliders from '../../WishSliders/WishSliders'

const WishStage: ComponentType = () => {
  const store = useEnterTestStore()
  const [result, setResult] = useState<IProgressCategories>({
    health: store.health,
    work: store.work,
    relationship: store.relationship,
    creativity: store.creativity
  })

  const handleClick = (): void => {
    store.onSaveResults(result)
    store.onCompleted()
    store.onNextStage()
  }

  return (
    <Box>
      <WishSliders onChange={setResult} data={result} />
      <ButtonGroup mt={8}>
        <Button colorScheme='blue' onClick={handleClick}>
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

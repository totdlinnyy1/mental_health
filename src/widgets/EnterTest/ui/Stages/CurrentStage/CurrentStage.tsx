import {Box, Button} from '@chakra-ui/react'
import {ComponentType, useState} from 'react'

import {ProgressCategories} from '../../../../../entities/Tests'
import useEnterTestStore from '../../../lib/hooks/useEnterTestStore'
import CurrentSliders from '../../CurrentSliders/CurrentSliders'

const CurrentStage: ComponentType = () => {
  const store = useEnterTestStore()
  const [result, setResult] = useState<ProgressCategories>({
    health: store.health,
    work: store.work,
    relationship: store.relationship,
    creativity: store.creativity
  })

  const handleClick = (): void => {
    store.onSaveResults(result)
    store.onNextStage()
  }

  return (
    <Box>
      <CurrentSliders onChange={setResult} data={result} />
      <Button colorScheme='blue' onClick={handleClick} mt={8}>
        Ответить
      </Button>
    </Box>
  )
}

export default CurrentStage

import {FormControl, FormLabel, Button, Flex} from '@chakra-ui/react'
import {ComponentType} from 'react'

import Interests from '../Stages/Interests/Interests'

const Survey: ComponentType = () => {
  return (
    <FormControl as='fieldset'>
      <Flex as='div' direction='column'>
        <FormLabel as='form' w='100%' marginBottom='1.5rem'>
          <Interests />
        </FormLabel>
        <Button alignSelf='flex-end' colorScheme='blue'>
          Далее
        </Button>
      </Flex>
    </FormControl>
  )
}

export default Survey

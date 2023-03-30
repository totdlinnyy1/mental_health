import {FormControl, FormLabel, Button, Flex, Box} from '@chakra-ui/react'
import {ComponentType} from 'react'

import Interests from '../Stages/Interests/Interests'

const Survey: ComponentType = () => {
  return (
    <FormControl as='fieldset'>
      <Box as='div'>
        <FormLabel as='form' w='100%' marginBottom='1.5rem'>
          <Interests />
        </FormLabel>
        <Flex direction='column'>
          <Button alignSelf='flex-end' colorScheme='blue'>
            Далее
          </Button>
        </Flex>
      </Box>
    </FormControl>
  )
}

export default Survey

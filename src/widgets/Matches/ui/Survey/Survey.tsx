import {
  Box,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader
} from '@chakra-ui/react'
import {ComponentType} from 'react'

import Hobby from '@widgets/Matches/ui/Stages/Hobby/Hobby'

const Survey: ComponentType = () => {
  return (
    <Box>
      <ModalHeader>Тест</ModalHeader>
      <ModalBody>
        <Hobby />
      </ModalBody>
      <ModalFooter>
        <Button colorScheme='blue'>Завершить</Button>
      </ModalFooter>
    </Box>
  )
}

export default Survey

import {Box, ModalBody, ModalHeader} from '@chakra-ui/react'
import {ComponentType} from 'react'

import Hobby from '@widgets/Matches/ui/Stages/Hobby/Hobby'

const Survey: ComponentType = () => {

  return (
    <Box>
      <ModalHeader>Тест</ModalHeader>
      <ModalBody>
        <Hobby  />
      </ModalBody>
    </Box>
  )
}

export default Survey

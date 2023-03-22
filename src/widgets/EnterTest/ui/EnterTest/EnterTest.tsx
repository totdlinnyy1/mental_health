import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import {ComponentType} from 'react'

import useEnterTestStore from '../../lib/hooks/useEnterTestStore'
import StartTestButton from '../StartTest/StartTest'

const EnterTest: ComponentType = () => {
  const {isModalOpen, onClose} = useEnterTestStore()
  return (
    <Box>
      <Modal isOpen={isModalOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Входное тестирование</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
      <StartTestButton />
    </Box>
  )
}

export default EnterTest

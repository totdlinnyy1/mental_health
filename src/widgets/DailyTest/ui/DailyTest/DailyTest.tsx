import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import {ComponentType} from 'react'

import useDailyTestStore from '../../lib/hooks/useDailyTestStore'

const DailyTest: ComponentType = () => {
  const {isModalOpen, onClose} = useDailyTestStore()
  return (
    <Box>
      <Modal isOpen={isModalOpen} onClose={onClose} isCentered size='xl'>
        <ModalOverlay />
        <ModalContent bgColor='#F4F9FE'>
          <ModalHeader>Ежедневное тестирование</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default DailyTest

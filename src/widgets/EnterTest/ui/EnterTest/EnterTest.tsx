import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import {ComponentType} from 'react'

import useEnterTestStore from '../../lib/hooks/useEnterTestStore'
import Stages from '../Stages'
import StartTestButton from '../StartTest/StartTest'

const EnterTest: ComponentType = () => {
  const {isModalOpen, onClose, isCompleted} = useEnterTestStore()

  const getDescriptionText = (testCompleted: boolean): string => {
    return testCompleted
      ? 'Готово! Ниже представлена твоя диаграмма ментального здоровья'
      : 'Чтобы построить диаграмму ментального здоровья, нужно пройти небольшой тест'
  }

  return (
    <Box>
      <Modal isOpen={isModalOpen} onClose={onClose} isCentered size='xl'>
        <ModalOverlay />
        <ModalContent w='670px'>
          <ModalHeader>Входное тестирование</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{getDescriptionText(isCompleted)}</Text>
            <Stages />
          </ModalBody>
        </ModalContent>
      </Modal>
      <StartTestButton />
    </Box>
  )
}

export default EnterTest

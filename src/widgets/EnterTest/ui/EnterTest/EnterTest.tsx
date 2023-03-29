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

import {EnterTestStages} from '@entities/Tests'
import Stepper from '@entities/Tests/ui/Stepper/Stepper'
import {enterTestResultText, enterTestWaitingResultText} from '@widgets/EnterTest/consts/index'
import useEnterTestStore from '@widgets/EnterTest/lib/hooks/useEnterTestStore'

import Stages from '../Stages'
import StartTestButton from '../StartTest/StartTest'

const EnterTest: ComponentType = () => {
  const {isModalOpen, onClose, isCompleted, stage} = useEnterTestStore()

  const getDescriptionText = (testCompleted: boolean): string => testCompleted ? enterTestResultText : enterTestWaitingResultText

  return (
    <Box>
      <Modal isOpen={isModalOpen} onClose={onClose} isCentered size='xl'>
        <ModalOverlay />
        <ModalContent bgColor='#F4F9FE'>
          <ModalHeader>Входное тестирование</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{getDescriptionText(isCompleted)}</Text>

            {stage !== 'info' && (
              <Box py={6}>
                <Stepper
                  activeStep={
                    isCompleted
                      ? EnterTestStages.length - 1
                      : EnterTestStages.indexOf(stage) - 1
                  }
                  stepCount={EnterTestStages.length - 1}
                />
              </Box>
            )}
            <Stages />
          </ModalBody>
        </ModalContent>
      </Modal>
      <StartTestButton />
    </Box>
  )
}

export default EnterTest

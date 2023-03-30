import {Modal, ModalContent, ModalOverlay} from '@chakra-ui/react'
import {ComponentType, ReactNode} from 'react'

import useMatchesStore from '@widgets/Matches/lib/hooks/useMatchesStore'
import {MatchModalContent} from '@widgets/Matches/types/types'
import Result from '@widgets/Matches/ui/Result/Result'
import Survey from '@widgets/Matches/ui/Survey/Survey'

const MatchModal: ComponentType = () => {
  const {isModalOpen, onClose, modalContent} = useMatchesStore()

  const showContent = (content: MatchModalContent): ReactNode => {
    if (content === 'test') {
      return <Survey />
    }
    if (content === 'result') {
      return <Result />
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}
      size='3xl'
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>{showContent(modalContent)}</ModalContent>
    </Modal>
  )
}

export default MatchModal

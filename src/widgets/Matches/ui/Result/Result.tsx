import {
  Box,
  Button,
  HStack,
  ModalBody,
  ModalFooter,
  ModalHeader,
  VStack
} from '@chakra-ui/react'
import {ComponentType} from 'react'

import {realUser} from '@src/share'
import useMatchesStore from '@widgets/Matches/lib/hooks/useMatchesStore'

import PercentCompatibility from '../PercentCompatibility/PercentCompatibility'
import PersonIcon from '../PersonIcon/PersonIcon'
import Recommendations from '../Recommendations/Recommendations'
import UnRecommendations from '../UnRecommendations/UnRecommendations'

const Result: ComponentType = () => {
  const {matchResult, onClose, changeModalContent} = useMatchesStore()

  // @ts-ignore
  const {matchedUserData} = matchResult
  const fakeUser = matchedUserData

  const onClick = (): void => {
    changeModalContent('test')
    onClose()
  }

  return (
    <Box>
      <ModalHeader>Результат</ModalHeader>
      <ModalBody>
        <VStack
          justifyContent='space-between'
          spacing={10}
          align='stretch'
          borderRadius='base'
          padding='4'
        >
          {matchResult && (
            <>
              <HStack justifyContent='space-between'>
                {realUser && (
                  <PersonIcon name={realUser.name} avatar={realUser.avatar} />
                )}
                <PercentCompatibility
                  match={matchResult.match}
                  resume={matchResult.resume}
                />
                {fakeUser && (
                  <PersonIcon name={fakeUser.name} avatar={fakeUser.avatar} />
                )}
              </HStack>

              <VStack spacing={8} align='stretch'>
                <Recommendations
                  recommendations={matchResult.recommendations}
                />
                <UnRecommendations
                  unrecommendation={matchResult.unrecommendation}
                />
              </VStack>
            </>
          )}
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme='blue' onClick={onClick}>
          Закрыть
        </Button>
      </ModalFooter>
    </Box>
  )
}

export default Result

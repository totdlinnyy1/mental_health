import {HStack, VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

import PercentCompatibility from '../PercentCompatibility/PercentCompatibility'
import PersonIcon from '../PersonIcon/PersonIcon'
import Recommendations from '../Recommendations/Recommendations'
import UnRecommendations from '../UnRecommendations/UnRecommendations'

const Result: ComponentType = () => {
  return (
    <VStack
      justifyContent='space-between'
      spacing={10}
      align='stretch'
      bg='#EDF2F7'
      borderRadius='base'
      padding='4'
    >
      <HStack justifyContent='space-between'>
        <PersonIcon />
        <PercentCompatibility />
        <PersonIcon />
      </HStack>

      <VStack spacing={8} align='stretch'>
        <Recommendations />
        <UnRecommendations />
      </VStack>
    </VStack>
  )
}

export default Result

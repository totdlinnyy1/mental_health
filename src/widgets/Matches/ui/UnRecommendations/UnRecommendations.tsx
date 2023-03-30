import {Box, Text, VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

interface IProps {
  unrecommendation: string
}

const UnRecommendations: ComponentType<IProps> = ({unrecommendation}) => {
  return (
    <VStack spacing='8px' align='stretch'>
      <Box
        borderRadius='base'
        boxShadow='0 0 0 1px rgba(0, 0, 0, 0.05)'
        padding='2'
        h='35px'
        bg='white'
      >
        <Text fontSize='sm' color='red'>
          Что делать не стоит:
        </Text>
      </Box>
      <Box
        borderRadius='base'
        boxShadow='0 0 0 1px rgba(0, 0, 0, 0.05)'
        padding='2'
        h='35px'
        bg='white'
      >
        <Text fontSize='sm'>{unrecommendation}</Text>
      </Box>
    </VStack>
  )
}

export default UnRecommendations

import {Box, Text, VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

const UnRecommendations: ComponentType = () => {
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
        <Text fontSize='sm'>
          1. Это ужас какой-то, я устал копировать и вставлять!
        </Text>
      </Box>
    </VStack>
  )
}

export default UnRecommendations

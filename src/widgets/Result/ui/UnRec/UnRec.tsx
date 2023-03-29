import {VStack, Box, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'

const UnRec: ComponentType = () => {
  return (
    <VStack spacing='8px'>
      <Box padding='9px 16px' h='35px' w='100%' bg='white'>
        <Text fontSize='14px' color='#FF0000'>
          Что делать не стоит:
        </Text>
      </Box>
      <Box padding='9px 16px' h='35px' w='100%' bg='white'>
        <Text fontSize='14px'>
          1. Это ужас какой-то, я устал копировать и вставлять!
        </Text>
      </Box>
    </VStack>
  )
}

export default UnRec

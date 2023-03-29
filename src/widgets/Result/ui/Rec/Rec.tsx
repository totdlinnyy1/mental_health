import {VStack, Box, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'

const Rec: ComponentType = () => {
  return (
    <VStack spacing='8px'>
      <Box padding='9px 16px' h='35px' w='100%' bg='white'>
        <Text fontSize='14px'>Рекомендации</Text>
      </Box>
      <Box padding='9px 16px' h='35px' w='100%' bg='white'>
        <Text fontSize='14px'>1. Сделать что-то одно</Text>
      </Box>
      <Box padding='9px 16px' h='35px' w='100%' bg='white'>
        <Text fontSize='14px'>2. Сделать что-то другое</Text>
      </Box>
      <Box padding='9px 16px' h='35px' w='100%' bg='white'>
        <Text fontSize='14px'>3. Так лень это писать, если честно</Text>
      </Box>
    </VStack>
  )
}

export default Rec

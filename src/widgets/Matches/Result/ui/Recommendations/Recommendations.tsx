import {VStack, Box, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'

const Recommendations: ComponentType = () => {
  return (
    <VStack spacing='8px' align='stretch'>
      <Box
        borderRadius='base'
        boxShadow='0 0 0 1px rgba(0, 0, 0, 0.05)'
        borderColor='rgba(0, 0, 0, 0.05)'
        padding='2'
        h='35px'
        bg='white'
      >
        <Text fontSize='sm'>Рекомендации</Text>
      </Box>
      <Box
        borderRadius='base'
        boxShadow='0 0 0 1px rgba(0, 0, 0, 0.05)'
        padding='2'
        h='35px'
        bg='white'
      >
        <Text fontSize='sm'>1. Сделать что-то одно</Text>
      </Box>
      <Box
        borderRadius='base'
        boxShadow='0 0 0 1px rgba(0, 0, 0, 0.05)'
        padding='2'
        h='35px'
        bg='white'
      >
        <Text fontSize='sm'>2. Сделать что-то другое</Text>
      </Box>
      <Box
        borderRadius='base'
        boxShadow='0 0 0 1px rgba(0, 0, 0, 0.05)'
        padding='2'
        h='35px'
        bg='white'
      >
        <Text fontSize='sm'>3. Так лень это писать, если честно</Text>
      </Box>
    </VStack>
  )
}

export default Recommendations

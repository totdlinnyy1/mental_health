import {Box, Text, VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

interface IProps {
  recommendations: string[]
}

const Recommendations: ComponentType<IProps> = ({recommendations}) => {
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

      {recommendations.map((rec, key) => (
        <Box
          borderRadius='base'
          boxShadow='0 0 0 1px rgba(0, 0, 0, 0.05)'
          padding='2'
          h='35px'
          bg='white'
          key={key}
        >
          <Text fontSize='sm'>
            {key + 1}. {rec}
          </Text>
        </Box>
      ))}
    </VStack>
  )
}

export default Recommendations

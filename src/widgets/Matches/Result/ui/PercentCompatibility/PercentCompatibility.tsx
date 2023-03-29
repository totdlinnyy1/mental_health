import {VStack, Heading, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'

const PercentCompatibility: ComponentType = () => {
  return (
    <VStack justifyContent='center'>
      <Heading>87%</Heading>
      <Text fontSize='sm' textAlign='center'>
        Не все потеряно, вы скорее могли бы быть товарищами нежели чем друзьями
      </Text>
    </VStack>
  )
}

export default PercentCompatibility

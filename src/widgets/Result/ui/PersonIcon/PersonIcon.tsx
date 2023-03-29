import {Icon, VStack, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {BsPersonCircle} from 'react-icons/bs'

const PersonIcon: ComponentType = () => {
  return (
    <VStack>
      <Icon as={BsPersonCircle} w='64px' h='64px' />
      <Text fontSize='14px' fontWeight='500'>
        Инокентий 2
      </Text>
    </VStack>
  )
}

export default PersonIcon

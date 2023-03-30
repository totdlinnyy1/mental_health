import {Text, VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

import {UserAvatar} from '@src/entities/User'

const PersonIcon: ComponentType = () => {
  return (
    <VStack>
      <UserAvatar size='xl' />
      <Text fontSize='sm' fontWeight='500'>
        Инокентий
      </Text>
    </VStack>
  )
}

export default PersonIcon

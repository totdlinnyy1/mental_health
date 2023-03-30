import {Text, VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

import {UserAvatar} from '@src/entities/User'

interface IProps {
  name: string
  avatar: string
}

const PersonIcon: ComponentType<IProps> = ({name, avatar}) => {
  return (
    <VStack>
      <UserAvatar size='xl' name={name} avatar={avatar} />
      <Text fontSize='sm'>{name}</Text>
    </VStack>
  )
}

export default PersonIcon

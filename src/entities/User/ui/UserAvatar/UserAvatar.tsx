import {Avatar} from '@chakra-ui/react'
import {ComponentType} from 'react'

interface IProps {
  name: string
  avatar?: string
  size?: 'sm' | 'md' | 'xl' | '2xl'
}
const UserAvatar: ComponentType<IProps> = props => {
  const {size, avatar, name} = props

  return <Avatar size={size} name={name} src={avatar} />
}

export default UserAvatar

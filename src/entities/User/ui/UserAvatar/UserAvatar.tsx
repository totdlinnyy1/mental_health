import {Avatar} from '@chakra-ui/react'
import {ComponentType} from 'react'

interface IProps {
  size?: 'sm' | 'md' | 'xl' | '2xl'
}
const UserAvatar: ComponentType<IProps> = ({size}) => {
  const user = {
    name: 'Dan Abrahmov',
    src: 'https://bit.ly/sage-adebayo'
  }
  return <Avatar size={size} name={user.name} src={user.src} />
}

export default UserAvatar

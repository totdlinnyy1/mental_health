import {Button} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {Link} from 'react-router-dom'

import IPath from '../../interfaces/button_path/IPath'

const StartTestButton: ComponentType<IPath> = ({path}) => {
  return (
    <Link to={path}>
      <Button colorScheme='blue'>Начать тестирование</Button>
    </Link>
  )
}
export default StartTestButton

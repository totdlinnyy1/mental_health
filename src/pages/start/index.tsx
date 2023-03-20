import {Box} from '@chakra-ui/react'
import {ComponentType} from 'react'

import StartTestButton from '../../share/buttons/start_testing/start_test_button'
import HeadText from '../../share/head_text/head_text'
import IPath from '../../share/interfaces/button_path/IPath'

const Start: ComponentType<IPath> = props => {
  return (
    <Box>
      <HeadText />
      <p>
        Чтобы построить диаграмму ментального здоровья, нужно пройти небольшой
        тест
      </p>
      <StartTestButton path={props.path} />
    </Box>
  )
}

export default Start

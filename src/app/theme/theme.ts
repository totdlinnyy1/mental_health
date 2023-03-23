import {extendTheme} from '@chakra-ui/react'
import {StepsTheme as Steps} from 'chakra-ui-steps'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  components: {
    Steps
  }
})

export default theme

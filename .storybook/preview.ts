import type {Preview} from '@storybook/react'
import {ChakraProviderDecorator} from '@chakra-ui/storybook-addon/dist/feature/decorator/ChakraProviderDecorator'
import theme from '../src/app/theme/theme'

const preview: Preview = {
  parameters: {
    chakra: {
      theme
    },
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [ChakraProviderDecorator]
}

export default preview

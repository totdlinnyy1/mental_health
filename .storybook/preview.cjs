import theme from '../src/app/theme'
import { ChakraProviderDecorator } from "@chakra-ui/storybook-addon/dist/feature/decorator/ChakraProviderDecorator";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  chakra: {
    theme
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  ChakraProviderDecorator,
];

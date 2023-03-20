import {ChakraProvider} from '@chakra-ui/react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'

import theme from './app/theme/theme'
import router from './pages'

createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
)

import {ChakraProvider} from '@chakra-ui/react'
import {createRoot} from 'react-dom/client'
import {QueryClient, QueryClientProvider} from 'react-query'
import {RouterProvider} from 'react-router-dom'

import theme from './app/theme/theme'
import router from './pages'

const queryClient = new QueryClient()

createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </QueryClientProvider>
)

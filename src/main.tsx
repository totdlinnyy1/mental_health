import {ChakraProvider} from '@chakra-ui/react'
import {createRoot} from 'react-dom/client'
import {QueryClient, QueryClientProvider} from 'react-query'

import theme from './app/theme/theme'
import Router from './pages'

const queryClient = new QueryClient()

createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  </QueryClientProvider>
)

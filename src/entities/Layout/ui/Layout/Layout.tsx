import {Box} from '@chakra-ui/react'
import {ComponentType, ReactNode} from 'react'

import Header from '@widgets/Header/ui/Header/Header'

interface IProps {
  children: ReactNode
}

const Layout: ComponentType<IProps> = ({children}) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}

export default Layout

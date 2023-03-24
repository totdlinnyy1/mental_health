import {Box, HStack} from '@chakra-ui/react'
import {ComponentType, ReactNode} from 'react'

interface IProps {
  children: ReactNode
}

const Layout: ComponentType<IProps> = ({children}) => {
  return (
    <Box h='16' w='full' bgColor='#F4F9FE'>
      <HStack h='16' w='full' justifyContent='space-between' px={6}>
        {children}
      </HStack>
    </Box>
  )
}

export default Layout

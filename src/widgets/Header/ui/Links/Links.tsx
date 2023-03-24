import {HStack} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {useLocation} from 'react-router-dom'

import Link from '../Link/Link'

const Links: ComponentType = () => {
  const {pathname} = useLocation()
  return (
    <HStack spacing={6}>
      <Link name='Главная' route='/' currentRoute={pathname} />
      <Link name='Челленджи' route='/challenges' currentRoute={pathname} />
      <Link name='Мои мэтчи' route='/matches' currentRoute={pathname} />
      <Link
        name='Библиотека заданий'
        route='/library'
        currentRoute={pathname}
      />
    </HStack>
  )
}

export default Links

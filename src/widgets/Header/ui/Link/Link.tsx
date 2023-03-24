import {Link as CLink} from '@chakra-ui/react'
import {ComponentType, useEffect, useState} from 'react'
import {Link as RLink} from 'react-router-dom'

import isLinkActive from '../../lib/helpers/isLinkActive'
import {ICurrentAndLinkRoute} from '../../types/types'

interface IProps extends ICurrentAndLinkRoute {
  name: string
}

const Link: ComponentType<IProps> = ({currentRoute, route, name}) => {
  const [fontWeight, setFontWeight] = useState<string>(
    isLinkActive({currentRoute, route})
  )

  useEffect(() => {
    setFontWeight(isLinkActive({currentRoute, route}))
  }, [currentRoute, route])
  return (
    <CLink as={RLink} to={route} color='black' fontWeight={fontWeight}>
      {name}
    </CLink>
  )
}

export default Link

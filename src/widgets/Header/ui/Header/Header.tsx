import {ComponentType} from 'react'

import {UserAvatar} from '../../../../entities/User'
import Layout from '../Layout/Layout'
import Links from '../Links/Links'
import Logo from '../Logo/Logo'

const Header: ComponentType = () => {
  return (
    <Layout>
      <Logo />
      <Links />
      <UserAvatar size='sm' />
    </Layout>
  )
}

export default Header

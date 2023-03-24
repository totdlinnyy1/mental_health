import {ComponentType} from 'react'
import {Outlet} from 'react-router-dom'

import {UserAvatar} from '../../../../entities/User'
import Layout from '../Layout/Layout'
import Links from '../Links/Links'
import Logo from '../Logo/Logo'

const Header: ComponentType = () => {
  return (
    <>
      <Layout>
        <Logo />
        <Links />
        <UserAvatar size='sm' />
      </Layout>
      <Outlet />
    </>
  )
}

export default Header

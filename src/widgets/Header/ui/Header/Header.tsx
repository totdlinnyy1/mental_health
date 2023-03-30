import {ComponentType} from 'react'

import {UserAvatar} from '@entities/User'
import getFullName from '@share/lib/helpers/getFullName'
import {realUser} from '@src/share'

import Layout from '../Layout/Layout'
import Links from '../Links/Links'
import Logo from '../Logo/Logo'

const Header: ComponentType = () => {
  const {avatar, name, lastName} = realUser
  return (
    <Layout>
      <Logo />
      <Links />
      <UserAvatar
        size='sm'
        name={getFullName(name, lastName)}
        avatar={avatar}
      />
    </Layout>
  )
}

export default Header

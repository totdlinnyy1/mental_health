import {Container} from '@chakra-ui/react'
import {ComponentType} from 'react'

import EnterTest from '../../widgets/EnterTest/ui/EnterTest/EnterTest'
import Header from '../../widgets/Header/ui/Header/Header'

const StartPage: ComponentType = () => {
  return (
    <>
      <Header />
      <Container maxW='container.lg'>
        <EnterTest />
      </Container>
    </>
  )
}

export default StartPage

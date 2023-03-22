import {Container} from '@chakra-ui/react'
import {ComponentType} from 'react'

import {StartEnterTestButton} from '../../widgets/EnterTest'
import Header from '../../widgets/Header/ui/Header/Header'

const StartPage: ComponentType = () => {
  return (
    <>
      <Header />
      <Container maxW='container.lg'>
        <StartEnterTestButton />
      </Container>
    </>
  )
}

export default StartPage

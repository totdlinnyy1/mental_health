import {Container} from '@chakra-ui/react'
import {ComponentType} from 'react'

import EnterTest from '../../widgets/EnterTest/ui/EnterTest/EnterTest'

const StartPage: ComponentType = () => {
  return (
    <>
      <Container maxW='container.lg'>
        <EnterTest />
      </Container>
    </>
  )
}

export default StartPage

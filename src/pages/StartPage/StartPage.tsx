import {Container} from '@chakra-ui/react'
import {ComponentType} from 'react'

import {Layout} from '../../entities/Layout'
import EnterTest from '../../widgets/EnterTest/ui/EnterTest/EnterTest'

const StartPage: ComponentType = () => {
  return (
    <Layout>
      <Container maxW='container.lg'>
        <EnterTest />
      </Container>
    </Layout>
  )
}

export default StartPage

import {Container} from '@chakra-ui/react'
import {ComponentType} from 'react'

import {Layout} from '@entities/Layout'
import {MatchesWidget} from '@widgets/Matches'

const Matches: ComponentType = () => {
  return (
    <Layout>
      <Container maxW='container.lg'>
        <MatchesWidget />
      </Container>
    </Layout>
  )
}

export default Matches

import {Heading} from '@chakra-ui/react'
import {ComponentType} from 'react'

import Hobby from './Hobby/Hobby'

const Interests: ComponentType = () => {
  return (
    <>
      <Heading as='h2' marginBottom='1.5rem' fontSize='22px'>
        Интересы:
      </Heading>
      <Hobby />
    </>
  )
}
export default Interests

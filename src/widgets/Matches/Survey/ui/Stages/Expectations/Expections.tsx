import {Heading} from '@chakra-ui/react'
import {ComponentType} from 'react'

import Values from './Values/Values'

const Interests: ComponentType = () => {
  return (
    <>
      <Heading as='h2' marginBottom='1.5rem' fontSize='22px'>
        Ожидания:
      </Heading>
      <Values />
    </>
  )
}
export default Interests

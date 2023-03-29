import {VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

import CheckMatch from '@widgets/Matches/ui/CheckMatch/CheckMatch'
import OpenTest from '@widgets/Matches/ui/OpenTest/OpenTest'

const Matches: ComponentType = () => {
  return (
    <VStack py='10' align='stretch' spacing='10'>
      <CheckMatch />
      <OpenTest />
    </VStack>
  )
}

export default Matches

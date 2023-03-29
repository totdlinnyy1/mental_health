import {Flex} from '@chakra-ui/react'
import {ComponentType} from 'react'

import PercentСompatibility from '../PercentСompatibility/PercentСompatibility'
import PersonIcon from '../PersonIcon/PersonIcon'
import Rec from '../Rec/Rec'
import UnRec from '../UnRec/UnRec'

// interface IProps {}

const Result: ComponentType = () => {
  return (
    <Flex
      direction='column'
      justifyContent='space-between'
      w='926px'
      h='433px'
      bg='#EDF2F7'
      padding='14px'
    >
      <Flex justifyContent='space-between'>
        <PersonIcon />
        <PercentСompatibility />
        <PersonIcon />
      </Flex>

      <Rec />
      <UnRec />
    </Flex>
  )
}

export default Result

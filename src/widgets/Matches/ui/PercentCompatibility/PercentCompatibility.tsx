import {Heading, Text, VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

import {getNumberWithPercent} from '@src/share'

interface IProps {
  match: number
  resume: string
}

const PercentCompatibility: ComponentType<IProps> = ({match, resume}) => {
  return (
    <VStack justifyContent='center'>
      <Heading>{getNumberWithPercent(match)}</Heading>
      <Text fontSize='sm' textAlign='center'>
        {resume}
      </Text>
    </VStack>
  )
}

export default PercentCompatibility

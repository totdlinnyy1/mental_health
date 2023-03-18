import {Circle, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'

import getNumberWithPercent from '../../lib/helpers/getNumberWithPercent'

interface IProps {
  percent: number
}

const CircleWithPercent: ComponentType<IProps> = ({percent}) => {
  return (
    <Circle size='100px' bgColor='blue.200'>
      <Text fontSize='2xl'>{getNumberWithPercent(percent)}</Text>
    </Circle>
  )
}

export default CircleWithPercent

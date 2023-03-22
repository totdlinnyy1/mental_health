import {Flex, Center} from '@chakra-ui/react'
import {ComponentType, useState} from 'react'
import {BsEmojiKiss} from 'react-icons/bs'
import {FaBasketballBall} from 'react-icons/fa'
import {FcLike, FcBriefcase} from 'react-icons/fc'

import ProgressBarElem from '../ProgressBarElem/ProgressBarElem'
import {IProgressBarElem} from '../types/types'

interface IProps {
  data?: {
    work: IProgressBarElem
    relationship: IProgressBarElem
    health: IProgressBarElem
    creativity: IProgressBarElem
  }
}

const ProgressBar: ComponentType<IProps> = props => {
  const [data, setData] = useState(props.data)

  if (!data) {
    setData({
      work: {wish: 90, current: 15, icon: FcBriefcase},
      relationship: {wish: 80, current: 57, icon: BsEmojiKiss},
      health: {wish: 70, current: 65, icon: FcLike},
      creativity: {wish: 60, current: 35, icon: FaBasketballBall}
    })
    return <h2>Возникли какие-то неполадки :(</h2>
  }

  return (
    <Center
      w='275px'
      h='220px'
      bgColor='#1A8DE620'
      border='1px solid #1A8DE640'
    >
      <Flex w='100%' h='141px' justify='center' gap='30px'>
        <ProgressBarElem {...data?.work} />
        <ProgressBarElem {...data?.creativity} />
        <ProgressBarElem {...data?.relationship} />
        <ProgressBarElem {...data?.health} />
      </Flex>
    </Center>
  )
}

export default ProgressBar

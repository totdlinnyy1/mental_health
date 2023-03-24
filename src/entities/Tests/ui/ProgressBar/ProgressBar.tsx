import {Flex, Center} from '@chakra-ui/react'
import {ComponentType, useEffect, useState} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {IoMdBriefcase, IoMdColorPalette} from 'react-icons/io'
import {MdGroup} from 'react-icons/md'

import {ProgressCategories} from '../../types/types'
import ProgressBarElem from '../ProgressBarElem/ProgressBarElem'

interface IProps {
  data?: ProgressCategories
}

const ProgressBar: ComponentType<IProps> = ({data}) => {
  const [progressData, setProgressData] = useState<ProgressCategories>({
    work: {wish: 90, current: 15},
    relationship: {wish: 80, current: 57},
    health: {wish: 70, current: 65},
    creativity: {wish: 60, current: 35}
  })

  useEffect(() => {
    if (data) {
      setProgressData(data)
    }
  }, [data])

  return (
    <Center
      w='275px'
      h='220px'
      bgColor='#1A8DE620'
      border='1px solid #1A8DE640'
    >
      <Flex w='100%' h='141px' justify='center' gap='30px'>
        <ProgressBarElem {...progressData.health} icon={AiFillHeart} />
        <ProgressBarElem {...progressData.relationship} icon={MdGroup} />
        <ProgressBarElem {...progressData.work} icon={IoMdBriefcase} />
        <ProgressBarElem {...progressData.creativity} icon={IoMdColorPalette} />
      </Flex>
    </Center>
  )
}

export default ProgressBar

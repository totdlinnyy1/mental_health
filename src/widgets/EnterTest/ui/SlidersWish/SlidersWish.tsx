import {Box} from '@chakra-ui/react'
import {ComponentType, useEffect, useState} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {IoMdBriefcase, IoMdColorPalette} from 'react-icons/io'
import {MdGroup} from 'react-icons/md'

import {IProgressCategories} from '../../../../entities/Tests/types/types'
import SliderElem from '../SliderElem/SliderElem'

interface IProps {
  data?: IProgressCategories
}

const SlidersWish: ComponentType<IProps> = ({data}) => {
  const [currentData, setCurrentData] = useState({
    work: {current: 90},
    relationship: {current: 80},
    health: {current: 70},
    creativity: {current: 60}
  })

  useEffect(() => {
    if (data) {
      setCurrentData(data)
    }
  }, [data])

  return (
    <Box h='356px'>
      <Box fontWeight='bold' mb='24px'>
        Отметь свое текущее состояние на шкалах
      </Box>
      <SliderElem {...currentData.health} icon={AiFillHeart} title='Здоровье' />
      <SliderElem
        {...currentData.relationship}
        icon={MdGroup}
        title='Отношения'
      />
      <SliderElem {...currentData.work} icon={IoMdBriefcase} title='Работа' />
      <SliderElem
        {...currentData.creativity}
        icon={IoMdColorPalette}
        title='Творчество'
      />
      <Box padding='8px 0 0 14px'></Box>
    </Box>
  )
}

export default SlidersWish

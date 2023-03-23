import {Box, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {IoMdBriefcase, IoMdColorPalette} from 'react-icons/io'
import {MdGroup} from 'react-icons/md'

import CurrentSliderElem from '../CurrentSliderElem/CurrentSliderElem'

const SlidersCurrent: ComponentType = () => {
  return (
    <Box>
      <Text fontWeight='bold' mb='24px'>
        Отметь свое текущее состояние на шкалах
      </Text>
      <CurrentSliderElem icon={AiFillHeart} title='Здоровье' />
      <CurrentSliderElem icon={MdGroup} title='Отношения' />
      <CurrentSliderElem icon={IoMdBriefcase} title='Работа' />
      <CurrentSliderElem icon={IoMdColorPalette} title='Творчество' />
    </Box>
  )
}

export default SlidersCurrent

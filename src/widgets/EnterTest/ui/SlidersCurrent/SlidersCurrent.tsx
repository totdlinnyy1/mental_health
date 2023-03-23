import {Box} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {IoMdBriefcase, IoMdColorPalette} from 'react-icons/io'
import {MdGroup} from 'react-icons/md'

import {IProgressCategories} from '../../../../entities/Tests/types/types'
import SliderElem from '../SliderElem/SliderElem'

interface IProps {
  data?: IProgressCategories
}

const SlidersCurrent: ComponentType<IProps> = () => {
  return (
    <Box h='356px'>
      <Box fontWeight='bold' mb='24px'>
        Отметь свое текущее состояние на шкалах
      </Box>
      <SliderElem icon={AiFillHeart} title='Здоровье' />
      <SliderElem icon={MdGroup} title='Отношения' />
      <SliderElem icon={IoMdBriefcase} title='Работа' />
      <SliderElem icon={IoMdColorPalette} title='Творчество' />
      <Box padding='8px 0 0 14px'></Box>
    </Box>
  )
}

export default SlidersCurrent

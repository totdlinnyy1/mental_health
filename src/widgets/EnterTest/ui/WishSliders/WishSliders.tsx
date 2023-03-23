import {Box} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {IoMdBriefcase, IoMdColorPalette} from 'react-icons/io'
import {MdGroup} from 'react-icons/md'

import WishSliderElem from '../WishSliderElem/WishSliderElem'

interface IProps {
  health: number
  relationship: number
  work: number
  creativity: number
}

const WishSliders: ComponentType<IProps> = ({
  health,
  work,
  relationship,
  creativity
}) => {
  return (
    <Box>
      <Box fontWeight='bold' mb='24px'>
        Отметь на шкалах свой желаемый уровень по каждой сфере
      </Box>
      <WishSliderElem current={health} icon={AiFillHeart} title='Здоровье' />
      <WishSliderElem current={relationship} icon={MdGroup} title='Отношения' />
      <WishSliderElem current={work} icon={IoMdBriefcase} title='Работа' />
      <WishSliderElem
        current={creativity}
        icon={IoMdColorPalette}
        title='Творчество'
      />
    </Box>
  )
}

export default WishSliders

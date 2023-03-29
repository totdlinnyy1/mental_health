import {Box, Text} from '@chakra-ui/react'
import {ComponentType, Dispatch, SetStateAction} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {IoMdBriefcase, IoMdColorPalette} from 'react-icons/io'
import {MdGroup} from 'react-icons/md'

import {ProgressCategories} from '@entities/Tests'
import useSliderResult from '@widgets/EnterTest/lib/hooks/useSlidersResult'

import CurrentSliderElem from '../CurrentSliderElem/CurrentSliderElem'

interface IProps {
  onChange: Dispatch<SetStateAction<ProgressCategories>>
  data: ProgressCategories
}

const CurrentSliders: ComponentType<IProps> = ({onChange, data}) => {
  const {
    onChangeHealth,
    onChangeRelationship,
    onChangeCreativity,
    onChangeWork
  } = useSliderResult({
    onChange,
    data,
    isHaveCurrent: false
  })

  return (
    <Box>
      <Text fontWeight='bold' mb='6'>
        Отметь свое текущее состояние на шкалах
      </Text>

      <CurrentSliderElem
        icon={AiFillHeart}
        title='Здоровье'
        onChange={onChangeHealth}
        defaultValue={data.health.current}
      />

      <CurrentSliderElem
        icon={MdGroup}
        title='Отношения'
        onChange={onChangeRelationship}
        defaultValue={data.relationship.current}
      />

      <CurrentSliderElem
        icon={IoMdBriefcase}
        title='Работа'
        onChange={onChangeWork}
        defaultValue={data.work.current}
      />

      <CurrentSliderElem
        icon={IoMdColorPalette}
        title='Творчество'
        onChange={onChangeCreativity}
        defaultValue={data.creativity.current}
      />
    </Box>
  )
}

export default CurrentSliders

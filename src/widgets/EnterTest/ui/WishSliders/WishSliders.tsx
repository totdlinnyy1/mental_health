import {Box, Text} from '@chakra-ui/react'
import {ComponentType, Dispatch, SetStateAction} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {IoMdBriefcase, IoMdColorPalette} from 'react-icons/io'
import {MdGroup} from 'react-icons/md'

import {ProgressCategories} from '@entities/Tests'
import useSliderResult from '@widgets/EnterTest/lib/hooks/useSlidersResult'

import WishSliderElem from '../WishSliderElem/WishSliderElem'

interface IProps {
  onChange: Dispatch<SetStateAction<ProgressCategories>>
  data: ProgressCategories
}

const WishSliders: ComponentType<IProps> = ({onChange, data}) => {
  const {
    onChangeHealth,
    onChangeRelationship,
    onChangeCreativity,
    onChangeWork
  } = useSliderResult({
    onChange,
    data,
    isHaveCurrent: true
  })

  return (
    <Box>
      <Text fontWeight='bold' mb='6'>
        Отметь на шкалах свой желаемый уровень по каждой сфере
      </Text>
      <WishSliderElem
        current={data.health.current}
        icon={AiFillHeart}
        title='Здоровье'
        onChange={onChangeHealth}
      />
      <WishSliderElem
        current={data.relationship.current}
        icon={MdGroup}
        title='Отношения'
        onChange={onChangeRelationship}
      />
      <WishSliderElem
        current={data.work.current}
        icon={IoMdBriefcase}
        title='Работа'
        onChange={onChangeWork}
      />
      <WishSliderElem
        current={data.creativity.current}
        icon={IoMdColorPalette}
        title='Творчество'
        onChange={onChangeCreativity}
      />
    </Box>
  )
}

export default WishSliders

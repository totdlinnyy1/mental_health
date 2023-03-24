import {Box, Text} from '@chakra-ui/react'
import {ComponentType, Dispatch, SetStateAction} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {IoMdBriefcase, IoMdColorPalette} from 'react-icons/io'
import {MdGroup} from 'react-icons/md'

import {IProgressCategories} from '../../../../entities/Tests'
import CurrentSliderElem from '../CurrentSliderElem/CurrentSliderElem'

interface IProps {
  onChange: Dispatch<SetStateAction<IProgressCategories>>
  data: IProgressCategories
}

const CurrentSliders: ComponentType<IProps> = ({onChange, data}) => {
  const onChangeHealth = (value: number): void => {
    onChange(prevState => ({
      ...prevState,
      health: {current: value, wish: value}
    }))
  }

  const onChangeRelationship = (value: number): void => {
    onChange(prevState => ({
      ...prevState,
      relationship: {current: value, wish: value}
    }))
  }

  const onChangeWork = (value: number): void => {
    onChange(prevState => ({...prevState, work: {current: value, wish: value}}))
  }

  const onChangeCreativity = (value: number): void => {
    onChange(prevState => ({
      ...prevState,
      creativity: {current: value, wish: value}
    }))
  }

  return (
    <Box>
      <Text fontWeight='bold' mb='24px'>
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

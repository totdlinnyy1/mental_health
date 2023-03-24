import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Icon,
  HStack
} from '@chakra-ui/react'
import {ComponentType, useState} from 'react'
import {IconType} from 'react-icons'

import {getNumberWithPercent} from '../../../../share'

interface IProps {
  title: string
  icon: IconType
  onChange: (value: number) => void
  defaultValue: number
}

const CurrentSliderElem: ComponentType<IProps> = ({
  icon,
  title,
  onChange,
  defaultValue
}) => {
  const [sliderValue, setSliderValue] = useState<number>(defaultValue)

  const handleChange = (value: number): void => {
    setSliderValue(value)
    onChange(value)
  }

  return (
    <HStack py={6} spacing={10}>
      <HStack spacing={2.5} w='180px'>
        <Icon w='20px' as={icon} />
        <Box>{title}</Box>
      </HStack>
      <Slider
        defaultValue={defaultValue}
        onChange={handleChange}
        focusThumbOnChange={false}
      >
        <SliderMark value={0} mt={5}>
          0%
        </SliderMark>
        <SliderMark value={100} mt={5} ml={-10}>
          100%
        </SliderMark>
        <SliderMark value={sliderValue} fontWeight='bold' mt={-9} ml={-5}>
          {sliderValue !== 0 && getNumberWithPercent(sliderValue)}
        </SliderMark>
        <SliderTrack h='8px' borderRadius='base'>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb bgColor='blue.500' />
      </Slider>
    </HStack>
  )
}

export default CurrentSliderElem

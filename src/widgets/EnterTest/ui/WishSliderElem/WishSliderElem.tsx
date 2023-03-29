import {
  HStack,
  Icon,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text
} from '@chakra-ui/react'
import {ComponentType, useState} from 'react'
import {IconType} from 'react-icons'

import {getNumberWithPercent} from '@share/index'
import getWidthForSlider from '@widgets/EnterTest/lib/helpers/getWidhtSlider'

interface IProps {
  title: string
  icon: IconType
  current: number
  onChange: (value: number) => void
}

const WishSliderElem: ComponentType<IProps> = ({
  icon,
  title,
  current,
  onChange
}) => {
  const [sliderValue, setSliderValue] = useState<number>(current)

  const handleChange = (value: number): void => {
    setSliderValue(value)
    onChange(value)
  }

  return (
    <HStack py='6' spacing='10'>
      <HStack spacing='2.5' w='180px'>
        <Icon boxSize='5' as={icon} />
        <Text>{title}</Text>
      </HStack>
      <HStack
        justifyContent='end'
        w='100%'
        h='2'
        bgColor='blue.500'
        borderRadius='base'
      >
        <Slider
          onChange={handleChange}
          focusThumbOnChange={false}
          width={getWidthForSlider(current)}
          min={current}
          colorScheme='cyan'
          defaultValue={current}
        >
          <SliderMark value={0} mt='5' ml='-1'>
            0%
          </SliderMark>
          <SliderMark value={100} mt='5' ml='-10'>
            100%
          </SliderMark>
          <SliderMark value={sliderValue} fontWeight='bold' mt='-9' ml='-3'>
            {getNumberWithPercent(sliderValue)}
          </SliderMark>
          <SliderTrack h='2'>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb bgColor='blue.500' />
        </Slider>
      </HStack>
    </HStack>
  )
}

export default WishSliderElem

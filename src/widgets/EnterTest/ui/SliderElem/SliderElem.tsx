import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Flex,
  Box,
  Icon,
  Center
} from '@chakra-ui/react'
import {ComponentType, useState} from 'react'
import {IconType} from 'react-icons'

import getNumberWithPercent from '../../../../share/lib/helpers/getNumberWithPercent'
import getWidthForSlider from '../../lib/helpers/getWidhtSlider'

interface IProps {
  current?: number
  title: string
  icon: IconType
}

const SliderElem: ComponentType<IProps> = ({icon, title, current}) => {
  const [sliderValue, setSliderValue] = useState(current ? current : 0)

  const labelStyles = {
    mt: '5',
    fontSize: 'sm'
  }

  if (current) {
    return (
      <Flex w='600px' h='66px' justifyContent='space-between'>
        <Flex alignItems='center' gap='10px' h='min-content'>
          <Icon w='20px' as={icon} />
          <Box>{title}</Box>
        </Flex>
        <Flex>
          <Center
            position='relative'
            w={getWidthForSlider(current, 'current')}
            h='25px'
          >
            <Box
              position='absolute'
              borderRadius='8px'
              w='calc(100% + 8px)'
              zIndex='1'
              h='8px'
              bg='#3182CE'
            ></Box>
          </Center>
          <Slider
            borderLeftRadius='none'
            min={current}
            max={100}
            aria-label='slider-ex-1'
            defaultValue={current}
            w={getWidthForSlider(current, 'wish')}
            h='25px'
            onChange={(val): void => setSliderValue(val)}
          >
            <SliderMark value={-1} {...labelStyles}>
              0%
            </SliderMark>
            <SliderMark value={92} {...labelStyles}>
              100%
            </SliderMark>
            <SliderMark
              value={sliderValue}
              textAlign='center'
              color='black'
              fontWeight='bold'
              mt='-7'
              ml='-5'
              w='12'
            >
              {getNumberWithPercent(sliderValue)}
            </SliderMark>
            <SliderTrack h='8px'>
              <SliderFilledTrack bg='#63B3ED' />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex w='600px' h='66px' justifyContent='space-between'>
      <Flex alignItems='center' gap='10px' h='min-content'>
        <Icon w='20px' as={icon} />
        <Box>{title}</Box>
      </Flex>
      <Slider
        p='0'
        aria-label='slider-ex-1'
        defaultValue={0}
        w='420px'
        h='25px'
        onChange={(val): void => setSliderValue(val)}
      >
        <SliderMark value={-1} {...labelStyles}>
          0%
        </SliderMark>
        <SliderMark value={92} {...labelStyles}>
          100%
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          color='black'
          fontWeight='bold'
          mt='-7'
          ml='-5'
          w='12'
        >
          {sliderValue !== 0 && getNumberWithPercent(sliderValue)}
        </SliderMark>
        <SliderTrack h='8px'>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  )
}

export default SliderElem

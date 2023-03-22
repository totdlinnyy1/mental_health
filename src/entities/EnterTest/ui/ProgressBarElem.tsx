import {ComponentType} from 'react'
import {Box, Flex, Center} from '@chakra-ui/react'
import {IProgressBarElem} from '../types/types'

const ProgressBarElem: ComponentType<IProgressBarElem> = ({
  wish,
  real,
  image
}) => {
  return (
    <Flex direction='column' justify='space-between' gap='10px'>
      <Flex pos='relative' w='18px' h='113px' bgColor='#1A8DE640'>
        <Box
          pos='absolute'
          w='100%'
          h={`${wish < real ? real : wish}%`}
          bgColor='#1A8DE680'
          bottom='0'
        />
        <Box
          pos='absolute'
          w='100%'
          h={`${real}%`}
          bgColor='#1A8DE6BF'
          bottom='0'
        />
      </Flex>
      <Center w='18px' h='18px'>
        {image}
      </Center>
    </Flex>
  )
}

export default ProgressBarElem

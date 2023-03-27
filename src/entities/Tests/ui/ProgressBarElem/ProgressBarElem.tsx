import {Box, Flex, Center, Icon} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {IconType} from 'react-icons'

import getNumberWithPercent from '@share/lib/helpers/getNumberWithPercent'

import {IProgress} from '../../types/types'

interface IProps extends IProgress {
  icon: IconType
}

const ProgressBarElem: ComponentType<IProps> = ({wish, current, icon}) => {
  return (
    <Flex direction='column' justify='space-between' gap='10px'>
      <Flex pos='relative' w='18px' h='113px' bgColor='#1A8DE640'>
        <Box
          pos='absolute'
          w='100%'
          h={
            wish > current
              ? getNumberWithPercent(wish)
              : getNumberWithPercent(current)
          }
          bgColor='#1A8DE680'
          bottom='0'
        />
        <Box
          pos='absolute'
          w='100%'
          h={getNumberWithPercent(current)}
          bgColor='#1A8DE6BF'
          bottom='0'
        />
      </Flex>
      <Center w='18px' h='18px'>
        <Icon as={icon} />
      </Center>
    </Flex>
  )
}

export default ProgressBarElem

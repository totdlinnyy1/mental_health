import {Box, Flex, Center, Icon} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {IconType} from 'react-icons'

import getHeightProgressBar from '@entities/Tests/lib/helpers/getHeightProgressBar'
import {IProgress} from '@entities/Tests/types/types'
import {getNumberWithPercent} from '@share/index'

interface IProps extends IProgress {
  icon: IconType
}

const ProgressBarElem: ComponentType<IProps> = props => {
  const {icon, wish, current} = props

  return (
    <Flex direction='column' justify='space-between' gap='10px'>
      <Flex
        w='18px'
        h='113px'
        bgColor='#1A8DE640'
        alignItems='flex-end'
      >
        <Flex
          alignItems='flex-end'
          w='100%'
          h={getHeightProgressBar(wish, current)}
          bgColor='#1A8DE680'
        >
          <Box
            w='100%'
            h={getNumberWithPercent(wish)}
            bgColor='#1A8DE6BF'
          />
        </Flex>
      </Flex>
      <Center w='18px' h='18px'>
        <Icon as={icon} />
      </Center>
    </Flex>
  )
}

export default ProgressBarElem

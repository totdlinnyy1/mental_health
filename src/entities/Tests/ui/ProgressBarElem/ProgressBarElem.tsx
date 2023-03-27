import {Box, Flex, Center, Icon} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {IconType} from 'react-icons'

import getHeightProgressBar from '../../lib/helpers/getHeightProgressBar'
import {IProgress} from '../../types/types'

interface IProps extends IProgress {
  icon: IconType
}

const heightProgressBar = 113

const ProgressBarElem: ComponentType<IProps> = ({wish, current, icon}) => {
  return (
    <Flex direction='column' justify='space-between' gap='10px'>
      <Flex
        w='18px'
        h={`${heightProgressBar}px`}
        bgColor='#1A8DE640'
        alignItems='flex-end'
      >
        <Flex
          alignItems='flex-end'
          w='100%'
          h={
            wish > current
              ? getHeightProgressBar(wish, heightProgressBar)
              : getHeightProgressBar(current, heightProgressBar)
          }
          bgColor='#1A8DE680'
        >
          <Box
            w='100%'
            h={getHeightProgressBar(current, heightProgressBar)}
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

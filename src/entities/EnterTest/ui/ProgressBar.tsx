import {Flex, Center} from '@chakra-ui/react'
import {ComponentType} from 'react'
import ProgressBarElem from './ProgressBarElem'
import {IProgressBarElem} from '../types/types'

const data: IProgressBarElem[] = [
  {wish: 70, real: 50, image: '💼'},
  {wish: 50, real: 20, image: '💋'},
  {wish: 80, real: 90, image: '❤️️'},
  {wish: 100, real: 100, image: '🧶'}
]

const ProgressBar: ComponentType<IProgressBarElem[]> = () => {
  return (
    <Center
      w='275px'
      h='220px'
      bgColor='#1A8DE620'
      border='1px solid #1A8DE640'
    >
      <Flex w='100%' h='141px' justify='center' gap='30px'>
        {data.map((el, i) => (
          <ProgressBarElem key={i} {...el} />
        ))}
      </Flex>
    </Center>
  )
}

export default ProgressBar

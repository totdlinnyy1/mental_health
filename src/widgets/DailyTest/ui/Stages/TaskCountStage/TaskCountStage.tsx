import {Box, HStack, Radio, RadioGroup, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'

const TaskCountStage: ComponentType = () => {
  return (
    <Box>
      <Text>Сколько ты хочешь выполнить заданий сегодня</Text>
      <RadioGroup>
        <HStack>
          <Radio value='1'>Одно</Radio>
          <Radio value='2'>Два</Radio>
          <Radio value='3'>Три</Radio>
          <Radio value='4'>Четыре</Radio>
        </HStack>
      </RadioGroup>
    </Box>
  )
}
export default TaskCountStage

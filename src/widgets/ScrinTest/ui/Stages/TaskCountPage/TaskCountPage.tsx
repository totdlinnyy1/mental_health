import {Button, Heading, HStack, Text,Radio, RadioGroup} from '@chakra-ui/react'
import {ComponentType, useState} from 'react'

import {Stepper} from '../../../../../entities/Tests'

interface IProps {
  activeStep: number
  stepCount: number
}

const TaskCountPage: ComponentType<IProps> = ({activeStep, stepCount}) => {
  const [value, setValue] = useState('1')

  const handleClick = (): void => {
    alert('Еще не понял как работать со стором')
  }
  return (
    <>
      <Heading as='h1'>Ежедневное тестирование</Heading>
      <Text as='p'>
        Чтобы получить ежедневные задания, нужно пройти небольшой тест
      </Text>
      <Stepper activeStep={activeStep} stepCount={stepCount} />
      <Text as='p'>Сколько ты хочешь выполнить заданий сегодня</Text>
      <RadioGroup onChange={setValue} value={value}>
        <HStack>
          <Radio value='1'>Одно</Radio>
          <Radio value='2'>Два</Radio>
          <Radio value='3'>Три</Radio>
          <Radio value='4'>Четыре</Radio>
        </HStack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={handleClick} mt={8}>
        Ответить
      </Button>
    </>
  )
}
export default TaskCountPage

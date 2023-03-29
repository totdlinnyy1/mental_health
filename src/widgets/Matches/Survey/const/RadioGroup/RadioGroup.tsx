import {Flex, Radio, RadioGroup, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'

interface IProps {
  question: string
}
const RadioGroupQuestion: ComponentType<IProps> = ({question}: IProps) => {
  return (
    <RadioGroup w='100%'>
      <Flex as='div'>
        <Text as='p' w='100%'>
          {question}
        </Text>
        <Radio value='1' marginInlineEnd='1.5rem'>
          Да
        </Radio>
        <Radio value='0'>Нет</Radio>
      </Flex>
    </RadioGroup>
  )
}
export default RadioGroupQuestion

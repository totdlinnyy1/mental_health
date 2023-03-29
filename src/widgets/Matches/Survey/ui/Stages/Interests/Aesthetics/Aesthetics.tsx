import {Flex, Heading} from '@chakra-ui/react'
import {ComponentType} from 'react'

import RadioGroupQuestion from '@src/widgets/Matches/Survey/const/RadioGroup/RadioGroup'

const Aesthetics: ComponentType = () => {
  const questions = [
    'Ходил ли ты в театр за последние полгода?',
    'Тебе интересна классическая музыка?',
    'Посещал ли ты художественные выставки за последние полгода?',
    'Тебе нравится посещать музеи?',
    'Ты получаешь удовольствие от изучения архитектуры?'
  ]
  return (
    <>
      <Heading as='h3' textAlign='center' marginBottom='4.5'>
        Эстетика
      </Heading>

      <Flex as='div' wrap='wrap'>
        {questions.map(question => {
          return <RadioGroupQuestion question={question} />
        })}
      </Flex>
    </>
  )
}

export default Aesthetics

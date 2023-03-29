import {Flex, Heading} from '@chakra-ui/react'
import {ComponentType} from 'react'

import RadioGroupQuestion from '@src/widgets/Matches/Survey/const/RadioGroup/RadioGroup'

const Hobby: ComponentType = () => {
  const questions = [
    'Любишь ли ты смотреть кино?',
    'Занимался ли ты рисованием?',
    'Ты считаешь себя физически активным человеком?',
    'Хорошо ли ты относишься к киберспорту?',
    'Ты когда-нибудь занимался танцами?',
    'Считаешь ли ты себя книголюбом?',
    'Ты сочинял песни/музыку?',
    'Ты получаешь удовольствие от приготовления еды?',
    'Увлекался ли ты изучением иностранных языков?',
    'Собирал ли ты коллекции чего-либо?'
  ]
  return (
    <>
      <Heading as='h3' marginBottom='4.5' fontSize='22px'>
        Хобби
      </Heading>

      <Flex as='div' wrap='wrap'>
        {questions.map(question => {
          return <RadioGroupQuestion question={question} />
        })}
      </Flex>
    </>
  )
}

export default Hobby

import {Heading, VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

import {HobbyQuestions} from '@src/widgets/Matches/Survey/consts/Questions/HobbyQuestions'
import RadioGroupQuestion from '@src/widgets/Matches/Survey/ui/RadioGroup/RadioGroup'

const Hobby: ComponentType = () => {
  const questions = HobbyQuestions
  return (
    <>
      <Heading as='h3' marginBottom='4.5' fontSize='22px'>
        Хобби
      </Heading>

      <VStack as='div' wrap='wrap'>
        {questions.map((question, key) => {
          return <RadioGroupQuestion key={key} question={question} />
        })}
      </VStack>
    </>
  )
}

export default Hobby

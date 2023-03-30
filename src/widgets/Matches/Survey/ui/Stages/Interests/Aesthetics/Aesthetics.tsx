import {Heading, VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

import {AestheticsQuestions} from '@widgets/Matches/Survey/consts/Questions/AestheticsQuestions'
import RadioGroupQuestion from '@widgets/Matches/Survey/ui/RadioGroup/RadioGroup'

const Aesthetics: ComponentType = () => {
  const questions = AestheticsQuestions
  return (
    <>
      <Heading as='h3' textAlign='center' mb='4.5'>
        Эстетика
      </Heading>

      <VStack wrap='wrap'>
        {questions.map((question, key) => {
          return <RadioGroupQuestion key={key} question={question} />
        })}
      </VStack>
    </>
  )
}

export default Aesthetics

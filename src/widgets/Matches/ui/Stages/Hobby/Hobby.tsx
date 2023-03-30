import {Box, Heading, VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'

import {HobbyQuestions} from '@widgets/Matches/consts/consts'
import RadioGroupQuestion from '@widgets/Matches/ui/RadioGroup/RadioGroup'

const Hobby: ComponentType = () => {
  return (
    <Box>
      <Heading as='h3' marginBottom='4.5' fontSize='22px'>
        Хобби
      </Heading>

      <VStack as='div' wrap='wrap'>
        {HobbyQuestions.map((question, key) => {
          return <RadioGroupQuestion key={key} question={question.value} />
        })}
      </VStack>
    </Box>
  )
}

export default Hobby

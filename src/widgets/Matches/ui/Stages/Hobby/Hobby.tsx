import {Box, Button, Heading, HStack, ModalFooter, Radio, RadioGroup, Text, VStack} from '@chakra-ui/react'
import {ComponentType, ReactElement} from 'react'
import {Controller, useForm} from 'react-hook-form'

import {HobbyQuestions} from '@widgets/Matches/consts/consts'
import useMatchesStore from '@widgets/Matches/lib/hooks/useMatchesStore'
import {HobbyAnswers} from '@widgets/Matches/types/types'


const Hobby: ComponentType = () => {
  const {onCompleted, onClose} = useMatchesStore()

  const {
    handleSubmit,
    control,
    formState: {errors}
  } = useForm<HobbyAnswers>()

  const questionColor = (question: string): string =>
    Object.hasOwn(errors, question) ? 'red.500' : ''

  const onSubmit = (data: HobbyAnswers): void => {
    onCompleted(data)
    onClose()
  }
  return (
    <Box>
      <Heading mb='4.5' size='lg'>
        Хобби
      </Heading>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          {HobbyQuestions.map((question, key) => (
            <HStack justifyContent='space-between' w='100%' key={key}>
              <Text color={questionColor(question.label)}>
                {question.value}
              </Text>
              <Controller
                name={question.label}
                rules={{
                  required: {
                    value: true,
                    message: 'Нужно дать ответы на все вопросы'
                  }
                }}
                control={control}
                render={({field: {onChange, value}}): ReactElement => (
                  <RadioGroup onChange={onChange} value={value}>
                    <Radio value='1' mr='6'>
                      Да
                    </Radio>
                    <Radio value='0'>Нет</Radio>
                  </RadioGroup>
                )}
              />
            </HStack>
          ))}
        </VStack>
        <ModalFooter>
          <Button colorScheme='blue' type='submit'>
            Завершить
          </Button>
        </ModalFooter>
      </form>
    </Box>
  )
}

export default Hobby

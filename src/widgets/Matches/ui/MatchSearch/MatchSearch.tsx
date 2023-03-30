import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  HStack,
  Input,
  Text,
  Tooltip
} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {useForm} from 'react-hook-form'
import {Form} from 'react-router-dom'

import {fakeUser} from '@src/share'
import getUserId from '@widgets/Matches/lib/helpers/getUserId'
import useMatchesStore from '@widgets/Matches/lib/hooks/useMatchesStore'
import {HobbyAnswers} from '@widgets/Matches/types/types'

interface IFormData {
  url: string
}

const MatchSearch: ComponentType = () => {
  const {isCompleted, onShowMatch} = useMatchesStore()

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<IFormData>()

  const onSubmit = (data: IFormData): void => {
    console.log(getUserId(data.url))
    onShowMatch(fakeUser.matchTest as HobbyAnswers)
  }

  return (
    <Box>
      <Heading mb='2'>Мэтчи</Heading>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Tooltip
          isDisabled={isCompleted}
          label='Сначала нужно пройти тест'
          hasArrow
        >
          <HStack>
            <FormControl>
              <Input
                placeholder='Cсылка вашего друга'
                minW='md'
                colorScheme='blue'
                isDisabled={!isCompleted}
                {...register('url', {required: 'Это обязательное поле'})}
              />
              <FormErrorMessage>
                {errors.url && errors.url.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              variant='outline'
              colorScheme='blue'
              isDisabled={!isCompleted}
              type='submit'
            >
              Проверить
            </Button>
          </HStack>
        </Tooltip>
      </Form>
      <Box py='4'>
        <Text fontSize='xl'>
          Для каждого мэтча вы получите рекомендации, что вам с другом нужно
          сделать, чтобы не потерять дружбу или стать еще ближе!
        </Text>
      </Box>
    </Box>
  )
}

export default MatchSearch

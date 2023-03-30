import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Text,
  Tooltip
} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {Form} from 'react-router-dom'

import useMatchesStore from '@widgets/Matches/lib/hooks/useMatchesStore'

const MatchSearch: ComponentType = () => {
  const {isCompleted} = useMatchesStore()

  return (
    <Box>
      <Heading mb='2'>Мэтчи</Heading>
      <Form>
        <Tooltip
          isDisabled={isCompleted}
          label='Для этого нужно сначала пройти тест'
          hasArrow
        >
          <HStack>
            <FormControl>
              <Input
                placeholder='Cсылка вашего друга'
                minW='md'
                colorScheme='blue'
                isDisabled={!isCompleted}
              />
            </FormControl>
            <Button
              variant='outline'
              colorScheme='blue'
              isDisabled={!isCompleted}
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

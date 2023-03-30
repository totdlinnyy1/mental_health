import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Text
} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {Form} from 'react-router-dom'

const MatchSearch: ComponentType = () => {
  return (
    <Box>
      <Heading mb='2'>Мэтчи</Heading>
      <Form>
        <HStack>
          <FormControl>
            <Input
              placeholder='Cсылка вашего друга'
              minW='md'
              colorScheme='blue'
            />
          </FormControl>
          <Button variant='outline' colorScheme='blue'>
            Проверить
          </Button>
        </HStack>
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

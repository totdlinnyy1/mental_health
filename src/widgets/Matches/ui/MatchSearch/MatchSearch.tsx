import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input
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
            <Input placeholder='Cсылка' minW='md' colorScheme='blue' />
          </FormControl>
          <Button variant='outline' colorScheme='blue'>
            Проверить
          </Button>
        </HStack>
      </Form>
    </Box>
  )
}

export default MatchSearch

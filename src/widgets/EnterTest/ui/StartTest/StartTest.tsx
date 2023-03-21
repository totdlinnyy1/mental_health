import {Box, Button, Heading, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'

const StartTestButton: ComponentType = () => {
  return (
    <Box>
      <Heading as='h2' margin='5'>
        Входное тестирование
      </Heading>
      <Text as='p' margin='5'>
        Чтобы построить диаграмму ментального здоровья, нужно пройти небольшой
        тест
      </Text>
      <Button colorScheme='blue' margin='5'>
        Начать тестирование
      </Button>
    </Box>
  )
}
export default StartTestButton

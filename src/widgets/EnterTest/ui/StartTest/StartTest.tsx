import {Box, Button, Heading, Text} from '@chakra-ui/react'
import {ComponentType} from 'react'

import useEnterTestStore from '@widgets/EnterTest/lib/hooks/useEnterTestStore'

const StartTestButton: ComponentType = () => {
  const {onOpen} = useEnterTestStore()
  return (
    <Box>
      <Heading as='h2' margin='5'>
        Входное тестирование
      </Heading>
      <Text as='p' margin='5'>
        Чтобы построить диаграмму ментального здоровья, нужно пройти небольшой
        тест
      </Text>
      <Button colorScheme='blue' margin='5' onClick={onOpen}>
        Начать тестирование
      </Button>
    </Box>
  )
}
export default StartTestButton

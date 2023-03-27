import {Box, Button, HStack, Text, VStack} from '@chakra-ui/react'
import {ComponentType} from 'react'
import {useNavigate} from 'react-router-dom'

import {ProgressBar} from '@entities/Tests'

import useEnterTestStore from '../../../lib/hooks/useEnterTestStore'

const ResultStage: ComponentType = () => {
  const store = useEnterTestStore()

  const navigate = useNavigate()

  const handleClick = (): void => navigate('/')

  return (
    <Box>
      <VStack bgColor='blue.100' py={4} borderRadius='base'>
        <Text>Диаграмма ментального здоровья</Text>
        <ProgressBar data={{...store}} />
        <HStack justifyContent='space-between' w='50%'>
          <Text>Здоровье</Text>
          <Text>{`${store.health.current} из ${store.health.wish}`}</Text>
        </HStack>
        <HStack justifyContent='space-between' w='50%'>
          <Text>Отношения</Text>
          <Text>{`${store.relationship.current} из ${store.relationship.wish}`}</Text>
        </HStack>
        <HStack justifyContent='space-between' w='50%'>
          <Text>Работа</Text>
          <Text>{`${store.work.current} из ${store.work.wish}`}</Text>
        </HStack>
        <HStack justifyContent='space-between' w='50%'>
          <Text>Творчество</Text>
          <Text>{`${store.creativity.current} из ${store.creativity.wish}`}</Text>
        </HStack>
      </VStack>
      <Button colorScheme='blue' mt={10} onClick={handleClick}>
        Сохранить результат
      </Button>
    </Box>
  )
}

export default ResultStage

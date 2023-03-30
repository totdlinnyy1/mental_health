import {
  Box,
  Card,
  CardBody,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import {ComponentType} from 'react'

const MatchHistory: ComponentType = () => {
  return (
    <Box>
      <Heading size='lg' mb={4}>
        История мэтчей
      </Heading>
      <Card variant='outline'>
        <CardBody>
          <TableContainer>
            <Table variant='simple'>
              <TableCaption>История мэтчей</TableCaption>
              <Thead>
                <Tr>
                  <Th>Имя</Th>
                  <Th>Результат</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Segun Adebayo</Td>
                  <Td>80%</Td>
                </Tr>
                <Tr>
                  <Td>Mark Chandler</Td>
                  <Td>34%</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </Box>
  )
}

export default MatchHistory

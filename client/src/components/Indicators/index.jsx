import {
  Text,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Flex,
  Spinner
} from '@chakra-ui/react'
import { priority } from '../../utils/utils'

const Indicators = ({ listTickets }) => {
  const stats = [{ crit: 'Urgent', color: 'red' },
  { crit: 'High', color: 'orange' }, { crit: 'Normal', color: 'yellow' }, { crit: 'Low', color: 'red' }]


  return (
    <Flex justify={'space-around'} mt='2'>
      <Card minW='48'>
        <CardHeader>
          <Heading size='sm'>Tickets</Heading>
        </CardHeader>
        <CardBody>
          <Text>{listTickets ? listTickets.length : <Spinner
            thickness='2px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='sm'
          />}</Text>
        </CardBody>
      </Card>
      {
        stats?.map((stat) => {
          return (<Card colorScheme={'red'} minW='48'>
            <CardHeader>
              <Heading size='sm'>{stat.crit}</Heading>
            </CardHeader>
            <CardBody>
              <Text>8</Text>
            </CardBody>
          </Card>)
        })
      }
    </Flex >

  )
}

export default Indicators
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
  const stats = [{ crit: 'Tickets', color: '' }, { crit: 'Urgent', color: 'red' },
  { crit: 'High', color: 'orange' }, { crit: 'Normal', color: 'yellow' }, { crit: 'Low', color: 'green' }]


  return (
    <Flex justify={'space-around'} mt='2'>
      {
        stats?.map((stat) => {
          return (<Card bg={"gray.700"} color={stat.color} minW='48'>
            <CardBody>
              <Heading size='sm' color={stat.color}>{stat.crit}</Heading>
              <Text fontSize={'7xl'} align={'center'}  >{listTickets ? listTickets.length : <Spinner
                thickness='2px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='sm'
              />}</Text>
            </CardBody>
          </Card>)
        })
      }
    </Flex >

  )
}

export default Indicators
import {
    Stat,
    StatLabel,
    StatNumber,
    StatGroup,
    Spinner,
    Badge
  } from '@chakra-ui/react'
import { priority } from '../../utils/utils'

const Indicators = ({listTickets}) => {
    const stats = ['urgent','high','normal','low']

    return(   
      <StatGroup p='2rem'>
          <Stat>
              <StatLabel><Badge colorScheme="teal">Tickets</Badge></StatLabel>
              <StatNumber fontSize="xxx-large">{listTickets ? listTickets.length : <Spinner/>}</StatNumber>              
          </Stat>
          {stats.map( (stat) => {
            return(<Stat>
                <StatLabel>{priority(stat)}</StatLabel>
                <StatNumber fontSize="xxx-large">{listTickets ? listTickets.filter(ticket => ticket.priority === stat).length : <Spinner/>}</StatNumber>       
            </Stat>)
          })}       
      </StatGroup>
    )
}

export default Indicators
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
    return(   
      <StatGroup p='2rem'>
          <Stat>
              <StatLabel><Badge colorScheme="teal">Tickets</Badge></StatLabel>
              <StatNumber>{listTickets ? listTickets.length : <Spinner/>}</StatNumber>              
          </Stat>
          <Stat>
              <StatLabel>{priority("urgent")}</StatLabel>
              <StatNumber>{listTickets ? listTickets.filter(ticket => ticket.priority === 'urgent').length : <Spinner/>}</StatNumber>       
          </Stat>
          <Stat>
              <StatLabel>{priority("high")}</StatLabel>
              <StatNumber>{listTickets ? listTickets.filter(ticket => ticket.priority === 'high').length : <Spinner/>}</StatNumber>                
          </Stat>
          <Stat>
              <StatLabel>{priority("normal")}</StatLabel>
              <StatNumber>{listTickets ? listTickets.filter(ticket => ticket.priority === 'normal').length : <Spinner/>}</StatNumber>
          </Stat>
          <Stat>
              <StatLabel>{priority("low")}</StatLabel>
              <StatNumber>{listTickets ? listTickets.filter(ticket => ticket.priority === 'low').length : <Spinner/>}</StatNumber>       
          </Stat>            
      </StatGroup>
    )
}

export default Indicators
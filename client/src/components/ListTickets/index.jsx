import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,  
    Stack,
    Skeleton,
    Badge
  } from '@chakra-ui/react'
import { formatDataHora, priority, status } from '../../utils/utils'

const ListTickets = ({listTickets}) => {
    return(<div>
      <Table>
          <Thead>
            <Tr>
              <Th>Ticket</Th>
              <Th>Status</Th>
              <Th>Prioridade</Th>
              <Th>Descrição</Th>
              <Th>Criado Em</Th>
              <Th>Atualizado Em</Th>
              <Th>Tags</Th>
            </Tr>
          </Thead>
          
          {listTickets ? 
            <Tbody>
                {listTickets.map((ticket) =>  
                  <Tr key={ticket.id}>                
                    <Td>{ticket.id}</Td>
                    <Td>{status(ticket.status)}</Td>
                    <Td>{ticket.priority ? priority(ticket.priority) : null}</Td>
                    <Td>{ticket.raw_subject}</Td>
                    <Td>{formatDataHora(ticket.created_at)}</Td>
                    <Td>{formatDataHora(ticket.updated_at)}</Td> 
                    <Td>                
                        {ticket.tags.length > 0 ? 
                          ticket.tags.map( tag => <Badge m={1}>{tag}</Badge> ): 
                          <span>N/a</span>}                
                    </Td> 
                  </Tr> )}    
                </Tbody>
              
        : null            
        }  
      </Table> 
      {!listTickets ?
        <Stack width="100%">              
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack>
      : null}
    </div>)
}

export default ListTickets
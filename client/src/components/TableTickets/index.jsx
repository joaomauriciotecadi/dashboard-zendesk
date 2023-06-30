import { FcClock, FcCustomerSupport } from "react-icons/fc";
import { Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Icon, Tag, TagLabel, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export const TableTickets = ({ tickets, priority }) => {
    const [ticketsFiltered, setTicketsFiltered] = useState([])
    const [totalHideTickets, setTotalHideTickets] = useState()
    const titlePriority = priority[0].toUpperCase() + priority.substring(1);

    useEffect(() => {
        if (tickets) {
            const totalShowTickets = 7
            const newTicketsFiltered = tickets?.filter(ticket => ticket.priority === priority)
            if (newTicketsFiltered.length > totalShowTickets) {
                setTotalHideTickets(newTicketsFiltered.length - totalShowTickets);
            } else {
                setTotalHideTickets()
            }

            setTicketsFiltered(newTicketsFiltered.slice(0, totalShowTickets))
        }


    }, [tickets, priority])

    const colors = {
        urgent: "red.300",
        high: "orange.300",
        normal: "green.300",
        low: "blue.300",
    }
    return (
        <Flex h='100%' flexDirection={'column'} d>
            <Heading p={'1'} size="md" textAlign={'center'} borderRadius={5} bg={colors[priority]}>{titlePriority}</Heading>
            <Flex flexDirection={'column'} justifyContent='space-between' h='100%'>
                <TableContainer>
                    <Table variant='striped' size='md'>
                        <Thead>
                            <Tr>
                                <Th>Ticket</Th>
                                <Th textAlign={'center'}>Description</Th>
                                <Th textAlign={'center'}>Assigned</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {ticketsFiltered?.map(
                                ticket => {
                                    return (
                                        <Tr key={ticket.id} h="90px">
                                            <Td>
                                                <Tag size={'lg'} variant='outline' colorScheme='telegram'>
                                                    <TagLabel>{ticket.id}</TagLabel>
                                                </Tag>
                                            </Td>
                                            <Td whiteSpace="pre-wrap">{ticket.raw_subject}</Td>
                                            <Td textAlign={'center'}>{ticket.assignee_id ?
                                                <Icon as={FcCustomerSupport} boxSize={6} /> :
                                                <Icon as={FcClock} boxSize={6} />}</Td>
                                        </Tr>
                                    )
                                }
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
                {totalHideTickets && <Heading size="sm" textAlign={'center'}>More {totalHideTickets} Ticket(s)...</Heading>}

            </Flex>

        </Flex>

    )
}

import { Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ChartPriority from '../ChartPriority';

export default function Indicators({ tickets }) {
    const totalTickets = JSON.parse(localStorage.getItem('totalTickets'));

    return (
        <Flex h='100%'>
            {totalTickets ? <Grid
                templateAreas={`"ind1 chart"
                                "ind2 chart"`}
                gridTemplateRows={'1fr 1fr'}
                gridTemplateColumns={'1fr 1fr'}
                gap='2'
                w='100%'
                color='blackAlpha.700'
                bg='gray.300'
            >
                <GridItem p='2' bg='whiteAlpha.900' area={'ind1'} borderRadius={'5'}>
                    <Flex flexDirection={'column'} alignItems="center" justifyContent={"center"} h='100%'>
                        <Heading size={'md'}>Total Tickets</Heading>
                        <Heading size={'4xl'}>{totalTickets[totalTickets.length - 1]?.total}</Heading>
                    </Flex>

                </GridItem>
                <GridItem p='2' bg='whiteAlpha.900' area={'ind2'} borderRadius={'5'} >
                    <Flex flexDirection={'column'} alignItems="center" justifyContent={"center"} h='100%'>
                        <Heading size={'md'}>Assigned Tickets</Heading>
                        <Heading size={'4xl'}>{totalTickets[totalTickets.length - 1]?.assignedTickets}</Heading>
                    </Flex>
                </GridItem>
                <GridItem p='2' bg='whiteAlpha.900' area={'chart'} borderRadius={'5'}>
                    <ChartPriority tickets={tickets} />
                </GridItem>
            </Grid> : <Text>No Data yet</Text>}

        </Flex>

    )
}

import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'


export default function Header({ currentTime }) {
    return (
        <Flex flexDirection={'column'} justifyContent="center" alignItems={'center'} h='100%'>
            <Heading>Tecadi.Labs</Heading>
            <Heading>Dashboard - TI</Heading>
            <Text>Updated at {currentTime}</Text>
        </Flex>
    )
}

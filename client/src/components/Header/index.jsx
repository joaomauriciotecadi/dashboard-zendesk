import {Flex,Box, Text} from '@chakra-ui/react'

const Header = ({currentDateTime}) => {
  return(
    <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="blue.400"
        color="white"
      >
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Dashboard - Tickets TI
          </Text>
        </Box>
        <Flex align="center" justify="center">
        <Box marginLeft="2">
          <Text>Última atualização: {currentDateTime.toLocaleString()}</Text>
        </Box>
    </Flex>
  </Flex>)
}

export default Header
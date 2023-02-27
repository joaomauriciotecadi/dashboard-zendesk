import {Box, Heading} from '@chakra-ui/react'

const Header = ({currentDateTime}) => {
    return(<Box display={"flex"} justifyContent={"space-between"} p='1rem'>
    <Heading as='h4' size='md'>
      Dashboard - Tickets TI
    </Heading> 
    <Heading as='h4' size='md'>
      Última atualização: {currentDateTime.toLocaleString()}
    </Heading> 
  </Box>)
}

export default Header
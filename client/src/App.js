import { useEffect, useState } from 'react';
import Header from './components/Header';
import ListTickets from './components/ListTickets';
import Indicators from './components/Indicators';
import api from './services/api';
import { Box } from '@chakra-ui/react';

function App() {
  const [listTickets, setListTickets] = useState()
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalTime = 60000 * 5;
    const fetchData = async () => {
      const response = await api.get("/tickets");;
      setListTickets(response.data.results);
    };

    // inicializa a chamada da API quando o componente for montado
    fetchData();

    // inicia o intervalo de tempo para a chamada da API
    const intervalId = setInterval(() => {
      fetchData();
      setCurrentDateTime(new Date());
    }, intervalTime);

    // limpa o intervalo de tempo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (

    <Box bg="gray.500" h={'100vh'}>
      <Header currentDateTime={currentDateTime} />
      <Indicators listTickets={listTickets} />
      <ListTickets listTickets={listTickets} />
    </Box>

  );
}

export default App;

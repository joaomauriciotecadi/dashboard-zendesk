import { useEffect, useState } from 'react';
import axios from 'axios'
import Header from './components/Header';
import ListTickets from './components/ListTickets';
import Indicators from './components/Indicators';

function App() {
  const [listTickets, setListTickets] = useState()
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const intervalTime = 5000;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/tickets');     
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
    <div className="App">
      <Header currentDateTime={currentDateTime}/>
      <Indicators listTickets={listTickets}/>
      <ListTickets listTickets={listTickets}/>
    </div>
  );
}

export default App;

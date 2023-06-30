import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChartTickets } from "./components/ChartTickets";
import Header from "./components/Header";
import Indicators from "./components/Indicators";
import { TableTickets } from "./components/TableTickets";
import api from "./services/api";
import indicatorsStoragedData from "./utils/IndicatorsData";

function App() {
  const [tickets, setTickets] = useState()
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalTime = 1000 * 60 * 15;

    const fetchData = async () => {
      try {
        const response = await api.get("/tickets/360016972274");

        setTickets(response.data);

        indicatorsStoragedData(response.data)


      } catch (error) {
        alert(error.message)
      }
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
      <Grid
        templateAreas={`"header chart indicators indicators"
                  "list1 list2 list3 list4"`}
        gridTemplateRows={'0.3fr 1fr'}
        gridTemplateColumns={'1fr 1fr 1fr 1fr'}
        h='100vh'
        gap='2'
        color='blackAlpha.700'
        bg='gray.300'
      >
        <GridItem p='2' bg='whiteAlpha.900' area={'chart'} borderRadius={'5'}>
          <ChartTickets />
        </GridItem>
        <GridItem p='2' bg='whiteAlpha.900' area={'header'} borderRadius={'5'}>
          <Header currentTime={currentDateTime.toLocaleString()} />
        </GridItem>
        <GridItem bg='whiteAlpha.900' area={'indicators'} borderRadius={'5'}>
          <Indicators />
        </GridItem>
        <GridItem p='2' bg='whiteAlpha.900' area={'list1'} borderRadius={'5'}>
          <TableTickets tickets={tickets} priority={"low"} />
        </GridItem>
        <GridItem p='2' bg='whiteAlpha.900' area={'list2'} borderRadius={'5'}>
          <TableTickets tickets={tickets} priority={"normal"} />
        </GridItem>
        <GridItem p='2' bg='whiteAlpha.900' area={'list3'} borderRadius={'5'}>
          <TableTickets tickets={tickets} priority={"high"} />
        </GridItem>
        <GridItem p='2' bg='whiteAlpha.900' area={'list4'} borderRadius={'5'}>
          <TableTickets tickets={tickets} priority={"urgent"} />
        </GridItem>

      </Grid>
    </div>
  );
}

export default App;

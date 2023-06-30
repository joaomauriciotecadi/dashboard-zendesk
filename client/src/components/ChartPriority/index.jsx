import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Flex, Heading } from '@chakra-ui/react';
import api from '../../services/api';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function ChartPriority() {
    const [dataTickets, setDataTickets] = useState([])

    useEffect(() => {
        const intervalTime = 6000 * 10;

        const fetchData = async () => {
            try {
                const response = await api.get("/tickets/360016972274");
                if (response) {
                    const filters = [
                        { total: response.data.filter(ticket => ticket.priority === 'low').length },
                        { total: response.data.filter(ticket => ticket.priority === 'normal').length },
                        { total: response.data.filter(ticket => ticket.priority === 'high').length },
                        { total: response.data.filter(ticket => ticket.priority === 'urgent').length },
                    ]
                    setDataTickets(filters);
                }

            } catch (error) {
                alert(error.message)
            }
        };

        // inicializa a chamada da API quando o componente for montado
        fetchData();

        // inicia o intervalo de tempo para a chamada da API
        const intervalId = setInterval(() => {
            fetchData();
        }, intervalTime);

        // limpa o intervalo de tempo quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, [])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    font: {
                        size: 14
                    }
                }
            },
            title: {
                display: true,
                text: 'Priority',
                font: {
                    size: '30px'
                }
            },
            datalabels: {
                font: {
                    size: 18,
                    weight: 'bold'
                }
            },

        }
    }


    const data = {
        labels: [
            'Low',
            'Normal',
            'High',
            'Urgent'
        ],
        datasets: [{
            data: dataTickets.map(data => {
                if (data.total > 0) {
                    return data.total
                }
                return null
            }),
            backgroundColor: [
                '#63B3ED',
                '#68D391',
                '#F6AD55',
                '#FC8181',
            ],
            hoverOffset: 4
        }]
    };

    return (
        <Flex maxW="100%" maxH="100%" alignContent="center" justifyContent={"center"} >
            <Doughnut id="2" options={options} plugins={[ChartDataLabels]} data={data} />
        </Flex>

    )
}

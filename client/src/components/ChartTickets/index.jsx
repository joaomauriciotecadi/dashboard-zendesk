import React from 'react';
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
import { Line } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';
import 'chart.js/auto'; // ADD THIS


export const ChartTickets = () => {

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
        plugins: {
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 20,
                grid: {
                    display: false
                }
            }
        }
    };

    const dataStoraged = JSON.parse(localStorage.getItem('totalTickets'))
    const labels = dataStoraged?.map(data => data.currentTime);
    const data = {
        labels,
        datasets: [
            {
                label: "Total Tickets",
                data: dataStoraged?.map(data => data.total),
                borderColor: 'blue',
                pointStyle: false

            },
            {
                label: "Assigned Tickets",
                data: dataStoraged?.map(data => data.assignedTickets),
                borderColor: 'green',
                pointStyle: false
            }
        ],
    };
    return <Box>
        <Heading size={'md'}>Total x Assigned</Heading>
        <Line options={options} data={data} />
    </Box >;
}

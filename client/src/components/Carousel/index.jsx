import { Text, Flex, Card, CardBody, Badge, Box } from '@chakra-ui/react';
import React from 'react'
import Slider from "react-slick";
import { formatDataHora, priority, status } from '../../utils/utils'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ listTickets }) {
  const settings = {
    slidesToShow: 1,
    slidesPerRow: 1,
    rows: 5,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000,
    arrows: false,
    centerPadding: "60px",
  };

  return (
    <Flex flexDirection={'column'} bg="whiteAlpha.800">
      <Slider {...settings}>
        {listTickets?.map((ticket) => {
          return (
            <Card key={ticket.id} mt={5} >
              <CardBody height='auto'>
                <Flex justifyContent={'space-between'} fontWeight={'black'}>
                  <Text> Ticket: {ticket.id}</Text>
                  <Text>Created At: {formatDataHora(ticket.created_at)}</Text>
                  <Text>Updated At: {formatDataHora(ticket.updated_at)}</Text>

                  <Flex justifyContent={'space-between'} w={'30%'} >
                    <Text>Status: {ticket.status}</Text>
                    <Text>Priority: {ticket.priority ? priority(ticket.priority) : 'N/a'}</Text>
                  </Flex>
                </Flex>



                <Flex justifyContent={'space-between'} mt={1}>
                  <Text>Description: {ticket.raw_subject}</Text>
                  <Flex>
                    {ticket.tags.length > 0 ?
                      ticket.tags.map(tag => <Badge m={1}>{tag}</Badge>) : null}
                  </Flex>
                </Flex>

              </CardBody>
            </Card>
          )
        })}
      </Slider>
    </Flex>
  );
}


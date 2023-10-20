"use client";

import React from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Button,
  Text,
  Box
} from "@chakra-ui/react";

type Props = {
  icons: JSX.Element;
  title: string;
  description: string;
};

export default function CardPoint(props: Props) {
  const { icons, title, description } = props;

  return (
    <Card variant='elevated'>
      <CardBody>
        <Box
          as='div'
          w='fit-content'
          py='3'
          px='3.5'
          bgColor={{ base: "orange.100" }}
          rounded='md'
          color='orange.700'
          border='1px solid orange'
        >
          {icons}
        </Box>
        <Heading
          my={{ base: 4 }}
          size='md'
        >
          {title}
        </Heading>
        <Text fontSize="sm" >{description}</Text>
      </CardBody>
    </Card>
  );
}

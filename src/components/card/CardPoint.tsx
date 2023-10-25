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
    <Card
      px={{ lg: 6 }}
      py={{ lg: 4 }}
      variant={{ base: "elevated", lg: "outline" }}
    >
      <CardBody>
        <Box
          as='div'
          w='fit-content'
          py='3'
          px='3.5'
          bgColor={{ base: "orange.50" }}
          rounded='md'
          color='orange.600'
        >
          {icons}
        </Box>
        <Heading
          my={{ base: 4 }}
          size='md'
        >
          {title}
        </Heading>
        <Text
          fontSize='sm'
          color='gray.500'
        >
          {description}
        </Text>
      </CardBody>
    </Card>
  );
}

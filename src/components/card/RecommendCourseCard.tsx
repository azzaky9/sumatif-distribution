"use client";

import React from "react";
import {
  Card,
  CardFooter,
  CardBody,
  Text,
  Box,
  Heading,
  Button
} from "@chakra-ui/react";
import { BiCartAdd } from "react-icons/bi";
import { usePrice } from "@/context/PriceContext";
import { useRouter } from "next/navigation";

export type Product = {
  title: string;
  description: string;
  price: string;
  cover?: string;
};

export default function ProductCard(props: Product) {
  const { setProductSelection } = usePrice();

  const router = useRouter();

  const { description, title, price, cover } = props;

  const handleClick = () => {
    setProductSelection({
      title,
      description,
      price: {
        after_discount: price,
        before_discount: price
      }
    });

    router.push("/payment");
  };

  return (
    <Card
      variant='elevated'
      rounded='3xl'
      maxW={360}
    >
      <CardBody>
        <Box
          display='flex'
          flexDir='column'
        >
          <Heading size={{ base: "md" }}>{title}</Heading>
          <Text
            color='gray.500'
            mt={2}
            fontSize='sm'
          >
            {description}
          </Text>
        </Box>
      </CardBody>

      <CardFooter
        justify='space-between'
        alignItems='center'
        sx={{
          "& > button": {
            minW: "136px"
          }
        }}
      >
        <Heading
          color='green.400'
          fontSize='2xl'
        >
          {price}
        </Heading>
        <Button
          onClick={handleClick}
          variant='solid'
          rightIcon={<BiCartAdd />}
          size='sm'
        >
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
}

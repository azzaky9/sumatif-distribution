"use client";

import React, { useState } from "react";
import {
  Card,
  CardFooter,
  CardBody,
  Text,
  Box,
  Heading,
  Button,
  List,
  ListItem,
  ListIcon,
  Flex,
  Tooltip
} from "@chakra-ui/react";
import RadioSelection from "../input/RadioRombel";
import { BiCartAdd } from "react-icons/bi";
import { usePrice } from "@/context/PriceContext";
import { useRouter } from "next/navigation";
import { MdCheckCircle } from "react-icons/md";
import { FaInfo } from "react-icons/fa6";

export type Product = {
  title: string;
  description: string;
  price: string;
  cover?: string;
  benefit?: string[];
  priceByCategories?: ["50" | "60", string][];
};

export default function ProductCard(props: Product) {
  const { setProductSelection } = usePrice();

  const { description, title, price, cover, benefit, priceByCategories } =
    props;

  const router = useRouter();

  const [currentSelectCategory, setCurrentSelectCategory] = useState("50");

  const getPriceByCategory = () => {
    if (priceByCategories) {
      return priceByCategories.find(
        (price) => price[0] === currentSelectCategory
      )?.[1];
    }

    return price;
  };

  const handleClick = () => {
    setProductSelection({
      title,
      description,
      price: {
        after_discount: getPriceByCategory() || "",
        before_discount: getPriceByCategory() || ""
      }
    });

    router.push("/payment");
  };

  return (
    <Card
      mx={{ base: "auto", lg: 0 }}
      variant='elevated'
      rounded='3xl'
      maxW={360}
      maxH={600}
      h='fit-content'
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
          <List
            spacing={3}
            mt={4}
          >
            {benefit &&
              benefit.map((b, index) => (
                <ListItem key={index}>
                  <ListIcon
                    as={MdCheckCircle}
                    color='green.500'
                  />
                  {b}
                </ListItem>
              ))}
          </List>
        </Box>
      </CardBody>

      <CardFooter
        display='flex'
        flexDirection='column'
        sx={{
          "& > button": {
            minW: "136px"
          }
        }}
      >
        <Flex
          flexDir='column'
          mb={4}
        >
          {priceByCategories && (
            <Flex
              gap={3}
              alignItems='center'
            >
              <RadioSelection
                parentState={currentSelectCategory}
                setParentState={setCurrentSelectCategory}
                priceOption={priceByCategories}
              />
              <BaseTooltip label='minimum peserta / kelompok dan harga yang tertera di tentukan dari pilihan category'>
                <span style={{ fontSize: "0.8rem" }}>
                  <FaInfo />
                </span>
              </BaseTooltip>
            </Flex>
          )}
          <Heading
            mt={4}
            color='green.400'
            fontSize='2xl'
          >
            {getPriceByCategory() || ""}
          </Heading>
        </Flex>
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

type Props = {
  label: string;
  children: React.ReactNode;
};

const BaseTooltip: React.FC<Props> = ({ label, children }) => (
  <Tooltip
    label={label}
    aria-label='Important message'
  >
    {children}
  </Tooltip>
);

"use client";

import React, { Fragment } from "react";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { productListCDNLink } from "./ProductProvide";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import CardPoint from "../card/CardPoint";
import CardPrice from "../card/CardPrice";

export type ResponseShema<T> = {
  data: T;
  status: "success" | "error";
};

type Feature = {
  heading: string;
  list_fitur: string[];
};

type Price = {
  after_discount: string;
  before_discount: string;
};

export type ProductPackage = {
  id: string;
  title: string;
  description: string;
  fitur: Feature[];
  discount: number;
  group_by_month: 1;
  price: Price;
};

export default function PriceHomepage() {
  const links = ["/ruang_belajar", "/brain_academy"];

  const { isLoading, isError, data } = useQuery({
    queryKey: ["price-discover"],
    queryFn: async () => {
      try {
        const url = process.env.NEXT_PUBLIC_API_URL;

        const response = await fetch(`${url}api/product/discover`);
        const dataJson = (await response.json()) as ResponseShema<
          ProductPackage[]
        >;

        return dataJson.data;
      } catch (error) {
        console.log(error);
      }
    },
    staleTime: Infinity
  });

  console.log(data);

  if (isLoading) <p>Loading...</p>;

  return (
    <Box
      id='price'
      my={{ base: 8, md: 14 }}
      px={{ base: 4 }}
      pb={{ base: 4, md: 10 }}
    >
      <Box
        display='grid'
        placeContent='center'
        w='full'
        py={{ base: 5 }}
      >
        <Heading
          fontSize='2xl'
          textAlign='center'
        >
          Price
        </Heading>
        <Box
          w='full'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Text
            textAlign='center'
            fontSize='sm'
            color='gray.500'
            w={{ md: "80%", lg: "60%" }}
          >
            Dengan harga terjangkau dan layanan komprehensif, kami bekerja sama
            untuk memberikan nilai maksimal untuk investasi dalam pendidikan.
          </Text>
        </Box>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap={{ base: "10px", lg: "40px" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        {data
          ? data.map((product) => (
              <Box
                key={product.id}
                maxW={{ base: "400px" }}
              >
                <CardPrice
                  data={product}
                  hideBuyButton={true}
                />
              </Box>
            ))
          : null}
      </Box>
      <Flex
        direction={{ base: "row" }}
        gap={{ base: 8 }}
        justifyContent='center'
        alignItems='center'
        mt={{ base: 8 }}
      >
        {productListCDNLink.map((item, index) => (
          <Fragment key={index}>
            {item.as === "image" && (
              <Link href={links[index]}>
                <Box
                  shadow='2xl'
                  p={5}
                  position='relative'
                  transition='all'
                  transitionDuration='300ms'
                  rounded='3xl'
                  _hover={{
                    cursor: "pointer",
                    transform: "scale(1.2)"
                  }}
                >
                  <Image
                    alt={item.alt}
                    src={item.link}
                    height={130}
                    width={130}
                  />
                </Box>
              </Link>
            )}
          </Fragment>
        ))}
      </Flex>
    </Box>
  );
}

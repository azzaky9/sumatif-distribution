"use client";

import React from "react";
import { Box, Heading, } from "@chakra-ui/react";
import { LoadIndicator } from "../utils/LoadIndicator";
import SliderDiscoverProducts from "../carousel/RecommendCarousel";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { usePrice } from "@/context/PriceContext";
import ProductMenu from "../navbar/ProductMenu";

export default function RecommendedCourse() {
  const { priceDiscoverQ } = usePrice();

  const { isLoading, data, isRefetching } = priceDiscoverQ;

  return (
    <Box
      id='products'
      py={24}
      px={{ base: 8, lg: 24 }}
    >
      <Box
        w='full'
        py={4}
      >
        <Box
          display='flex'
          pb={12}
          px={{ base: 4, lg: 24 }}
          justifyContent='space-between'
          alignItems='center'
        >
          <Heading>Products</Heading>
          <Box zIndex='2'>
            <ProductMenu
              color='orange.500'
              displayText='View More'
            />
          </Box>
        </Box>
        {isLoading || isRefetching ? (
          <LoadIndicator />
        ) : (
          <SliderDiscoverProducts dataFromQuery={data ? data : []} />
        )}
      </Box>
    </Box>
  );
}




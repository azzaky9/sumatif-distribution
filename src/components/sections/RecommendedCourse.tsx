"use client";

import React, { useRef } from "react";
import { Box, Heading, IconButton, useMediaQuery } from "@chakra-ui/react";
import RecommendCourseCard from "../card/RecommendCourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { LoadIndicator } from "@/components/sections/PriceList";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { usePrice } from "@/context/PriceContext";
import { ProductPackage } from "@/context/PriceContext";
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

type Props = {
  dataFromQuery: ProductPackage[];
};

const SliderDiscoverProducts = ({ dataFromQuery }: Props) => {
  const swiperRef = useRef<SwiperType>();

  const [isBetweenMobileDevices] = useMediaQuery("(max-width: 425px)");
  const [isMinTabletDevices, isMaxTabletDevices] = useMediaQuery([
    "(min-width: 425px)",
    "(max-width: 768px)"
  ]);

  return (
    <>
      <Swiper
        pagination={{
          type: "bullets"
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={
          isBetweenMobileDevices
            ? 1
            : isMinTabletDevices && isMaxTabletDevices
            ? 2
            : 3
        }
        className='mySwiper'
        modules={[Pagination, Navigation]}
      >
        {dataFromQuery.map((data) => (
          <SwiperSlide key={data.id}>
            <RecommendCourseCard productData={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        w={{ base: "100%", lg: "95%" }}
        mt='6'
        display='grid'
        placeContent={{ base: "center", lg: "end" }}
      >
        <Box
          display='flex'
          gap={8}
        >
          <IconButton
            colorScheme='gray'
            size='md'
            icon={<GrFormPrevious />}
            aria-label='slide-prev'
            onClick={() => swiperRef.current?.slidePrev()}
          >
            Prev
          </IconButton>
          <IconButton
            colorScheme='gray'
            size='md'
            icon={<GrFormNext />}
            aria-label='slide-next'
            onClick={() => swiperRef.current?.slideNext()}
          >
            Next
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

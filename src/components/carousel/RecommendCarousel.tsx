"use client";

import { useRef } from "react";
import { ProductPackage } from "@/context/PriceContext";
import { useMediaQuery } from "@chakra-ui/react";

import Carousel from "./Carousel";
import SliderButton from "../button/SliderButton";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { useSwiperSlide } from "@/hooks/useSwiperSlide";

type Props = {
  dataFromQuery: ProductPackage[];
};

const SliderDiscoverProducts = ({ dataFromQuery }: Props) => {
  const [swiperRef, slidePrev, slideNext] = useSwiperSlide();

  const [isBetweenMobileDevices] = useMediaQuery("(max-width: 425px)");
  const [isMinTabletDevices, isMaxTabletDevices] = useMediaQuery([
    "(min-width: 425px)",
    "(max-width: 768px)"
  ]);

  const getSlide = isBetweenMobileDevices
    ? 1
    : isMinTabletDevices && isMaxTabletDevices
    ? 2
    : 3;

  const createConfig: SwiperProps = {
    pagination: {
      type: "bullets"
    },
    onBeforeInit: (swiper) => {
      swiperRef.current = swiper;
    },
    slidesPerView: getSlide,
    className: "mySwiper",
    modules: [Pagination, Navigation],
    style: {
      width: "85%",
      height: "100%"
    }
  };

  return (
    <>
      <Carousel
        config={createConfig}
        displayModel='DISCOVER'
        customButton={{
          nextButton: (
            <SliderButton
              direction='next'
              clickHandler={slideNext}
            />
          ),
          previousButton: (
            <SliderButton
              direction='prev'
              clickHandler={slidePrev}
            />
          )
        }}
        dataToDisplay={dataFromQuery}
      />
    </>
  );
};

export default SliderDiscoverProducts;

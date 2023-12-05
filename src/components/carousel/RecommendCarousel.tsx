"use client";

import { ProductPackage } from "@/context/PriceContext";
import { useMediaQuery } from "@chakra-ui/react";

import Carousel from "./Carousel";
import SliderButton from "../button/SliderButton";

import { SwiperProps } from "swiper/react";
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
      width: "95%",
      height: "100%",
      paddingBottom: "40px"
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

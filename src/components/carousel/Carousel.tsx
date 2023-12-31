"use client";

import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { ProductPackage } from "@/context/PriceContext";
import { Heading, Box } from "@chakra-ui/react";
import CardPrice from "../card/CardPrice";
import RecommendCourseCard from "../card/RecommendCourseCard";

type CustomButton = {
  previousButton: JSX.Element;
  nextButton: JSX.Element;
};

type Props = {
  config: SwiperProps;
  dataToDisplay?: ProductPackage[];
  customButton: CustomButton;
  displayModel: "DISCOVER" | "PRICELIST";
};

export default function Carousel(props: Props) {
  const { config, dataToDisplay, customButton, displayModel } = props;

  // const getConfig: SwiperProps = config ? config : {};

  const getDisplayerComp = (
    modelType: Props["displayModel"],
    data: ProductPackage,
  ) => {
    return modelType === "DISCOVER" ? (
      <RecommendCourseCard
        linkedTo=""
        description={data.description}
        price={data.price.after_discount}
        title={data.title}
      />
    ) : (
      <CardPrice data={data} hideBuyButton={false} />
    );
  };

  if (!dataToDisplay) {
    return <Heading>No data to display</Heading>;
  }

  return (
    <Swiper {...config}>
      {dataToDisplay.map((data, index) => (
        <SwiperSlide key={index}>
          {getDisplayerComp(displayModel, data)}
        </SwiperSlide>
      ))}
      <Box
        position="absolute"
        bottom={{ base: "-50px", lg: "5px" }}
        left={{ lg: "-20px", base: "0" }}
        w={{ base: "100%" }}
        display="grid"
        placeContent={{ base: "center", lg: "end" }}
        zIndex={20}
      >
        <Box display="flex" gap={8}>
          {customButton.previousButton}
          {customButton.nextButton}
        </Box>
      </Box>
    </Swiper>
  );
}

"use client";

import { useRef, MutableRefObject } from "react";
import { Swiper as SwiperType } from "swiper";

type ClickHandler = () => void
type ReturnType = [MutableRefObject<SwiperType | undefined>, ClickHandler, ClickHandler] 

const useSwiperSlide = (): ReturnType => {
  const swiperRef = useRef<SwiperType>();

  const slidePrev = () => swiperRef.current?.slidePrev();
  const slideNext = () => swiperRef.current?.slideNext();

  return [swiperRef, slidePrev, slideNext];
};

export { useSwiperSlide };

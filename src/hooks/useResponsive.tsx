"use client";

import { useMediaQuery } from "@chakra-ui/react";

const useResponsive = () => {
  const [isGreaterThan375px] = useMediaQuery("(min-width: 375px)");

  const [isGreaterThan425px] = useMediaQuery("(min-width: 425px)");

  const [isGreaterThan768px] = useMediaQuery("(min-width: 768px)");

  const [isGreaterThan1024px] = useMediaQuery("(min-width: 1024px)");

  return {
    isGreaterThan1024px,
    isGreaterThan375px,
    isGreaterThan768px,
    isGreaterThan425px
  };
};

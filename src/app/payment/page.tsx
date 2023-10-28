"use client";

import CardPrice from "@/components/card/CardPrice";
import { Box, Flex } from "@chakra-ui/react";
import { usePrice } from "@/context/PriceContext";
import FormBuyProduct from "@/components/forms/FormBuyProduct";

export default function Page() {
  const { productSelection } = usePrice();

  return (
    <Box
      px={{ base: 4 }}
      py={{ base: 4 }}
      pb={{ lg: "28" }}
      mt={{ base: 8 }}
    >
      <Flex
        gap={8}
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center" }}
      >
        {/* {productSelection ? (
          <CardPrice
            data={productSelection}
            hideBuyButton
          />
        ) : null} */}
        <FormBuyProduct />
      </Flex>
    </Box>
  );
}

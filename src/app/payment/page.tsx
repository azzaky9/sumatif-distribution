"use client";

import CardPrice from "@/components/card/CardPrice";
import { Box, Flex } from "@chakra-ui/react";
import { usePrice } from "@/context/PriceContext";
import FormBuyProduct from "@/components/forms/FormBuyProduct";
import ReviewProductModal from "@/components/modal/ReviewProductModal";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { productSelection } = usePrice();
  const route = useRouter();

  useEffect(() => {
    if (!productSelection) route.push("/");
  }, [productSelection, route]);

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
        <ReviewProductModal />
        <FormBuyProduct />
      </Flex>
    </Box>
  );
}

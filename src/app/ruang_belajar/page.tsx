import { Box, Image, Stack, Text } from "@chakra-ui/react";
import PriceList from "@/components/sections/PriceList";
import TopCardRuangBelajar from "@/components/card/TopCardRuangBelajar";

export default function Page() {
  return (
    <>
      <TopCardRuangBelajar />

      <Box
        px={{ base: 2 }}
        bg='gray.50'
        py={{ base: 24 }}
      >
        <PriceList />
      </Box>
    </>
  );
}

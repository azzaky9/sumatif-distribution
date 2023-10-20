import { Box } from "@chakra-ui/react";
import ProductProvide from "@/components/sections/ProductProvide";
import Benefit from "@/components/sections/Benefit";
import WhyUs from "@/components/sections/WhyUs";
import PriceList from "@/components/sections/PriceList";

export default function Home() {
  return (
    <Box
      as='main'
      pb={5}
    >
      <ProductProvide />
      <Benefit />
      <WhyUs />
      <PriceList />
    </Box>
  );
}

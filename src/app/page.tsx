import { Box } from "@chakra-ui/react";
import ProductProvide from "@/components/sections/ProductProvide";
import Header from "@/components/sections/Header";
import Benefit from "@/components/sections/Benefit";
import WhyUs from "@/components/sections/WhyUs";
import PriceHomepage from "@/components/sections/PriceHomepage";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <Box
      as='main'
    >
      <Header />
      <ProductProvide />
      <Benefit />
      <WhyUs />
      <PriceHomepage />
      <Footer />
    </Box>
  );
}

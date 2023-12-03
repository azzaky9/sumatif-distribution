import { Box } from "@chakra-ui/react";
import ProductProvide from "@/components/sections/ProductProvide";
import Header from "@/components/sections/Header";
import Benefit from "@/components/sections/Benefit";
import WhyUs from "@/components/sections/WhyUs";
import RecommendedCourse from "@/components/sections/RecommendedCourse";
import OnsiteLearning from "@/components/sections/OnsiteLearning";

export default function Home() {
  return (
    <Box as='main'>
      <Header />
      <Benefit />
      <RecommendedCourse />
      <OnsiteLearning />
      <WhyUs />
    </Box>
  );
}

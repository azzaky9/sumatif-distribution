import { Box, Button } from "@chakra-ui/react";
import Navbar from "@/components/navbar/Navbar";
import { BsArrowRightShort } from "react-icons/bs";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <Box as="main" px={{ base: 8, md: 10, lg: 16 }} py={5} >
      <Navbar />
      <Header />
    </Box>
  );
}

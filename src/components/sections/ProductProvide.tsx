"use client";

import React, { Fragment } from "react";
import { Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
import brainacademyLogo from "../../../public/images/logo_BA.svg";
import { FaChalkboardTeacher } from "react-icons/fa";

export const productListCDNLink = [
  {
    link: "https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/OPTIMIZE/rb.svg",
    alt: "ruang-belajar-logo",
    as: "image"
  },
  {
    link: brainacademyLogo.src,
    alt: "brain-academy-logo",
    as: "image"
  }
];

export default function ProductProvide() {
  return (
    <SimpleGrid
      backgroundColor='gray.50'
      px={{ base: 6, lg: "24" }}
      py={{ base: "16" }}
      column={{ base: 1, lg: 2 }}
      gap={{ base: 4, lg: 12 }}
      gridTemplateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
      placeContent='center'
    >
      <Box>
        <Text
          w={{ lg: "75%" }}
          fontSize={{ base: "2xl", lg: "3xl" }}
          fontWeight='semibold'
        >
          Kami Menyediakan Product pilihan terbaik.
        </Text>
      </Box>

      <Box
        pt={{ base: 18 }}
        display={{ base: "flex" }}
        gap={{ base: 4, lg: 12 }}
        mb={{ base: 12 }}
        flexDirection={{ base: "column", md: "row" }}
      >
        {["Pelatihan PPG (Pendidikan Profesi Guru", "Super Parenting Training and Family Gathering"].map((product, index) => (
          <Box key={index} as="h5" fontSize="lg" >
            {product}
          </Box>
        ))}
      </Box>
    </SimpleGrid>
  );
}

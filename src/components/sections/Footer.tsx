"use client";

import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SiGmail } from "react-icons/si";
import { TiLocation } from "react-icons/ti";

const renderingLoopMapping = [
  {
    icons: <SiGmail style={{ fontSize: "1.4rem", color: "white" }} />,
    text: "ptsumatif@gmail.com"
  },

  {
    icons: <TiLocation style={{ fontSize: "1.4rem", color: "white" }} />,
    text: "Jalan Suka Eka Medan Johor Nomor 11 Medan Sumatera Utara"
  }
];

export default function Footer() {
  return (
    <Box
      bg={{ base: "gray.700" }}
      px={{ base: 8 }}
      py={{ base: 16 }}
      mt={{ base: 2 }}
      display={{ base: "grid" }}
      placeContent={{ base: "center" }}
    >
      <Heading
        fontSize='2xl'
        mb={{ base: 4 }}
        color='gray.400'
        textAlign={{ base: "center" }}
      >
        Sumatif
      </Heading>
      <Flex
        width='full'
        maxWidth={{ base: "320px" }}
        direction='column'
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
        gap={{ base: 2 }}
      >
        {renderingLoopMapping.map((item, index) => (
          <Box
            display="flex"

            key={index}
          >
            <Text
              color={{ base: "gray.500" }}
              fontSize='sm'
              textAlign="center"
            >
              {item.text}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

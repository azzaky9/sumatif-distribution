"use client";

import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SiGmail } from "react-icons/si";
import { TiLocation } from "react-icons/ti";

const renderingLoopMapping = [
  {
    icons: <SiGmail style={{ fontSize: "1.4rem", color: "white" }}  />,
    text: "ptsumatif@gmail.com"
  },

  {
    icons: <TiLocation style={{ fontSize: "2.3rem", color: "white" }} />,
    text: "Jalan Suka Eka Medan Johor Nomor 11 Medan Sumatera Utara"
  }
];

export default function Footer() {
  return (
    <Box
      bg={{ base: "gray.700" }}
      px={{ base: 8 }}
      py={{ base: 8 }}
      mt={{ base: 2 }}
    >
      <Heading
        fontSize='2xl'
        mb={{ base: 4 }}
        color='gray.400'
      >
        Sumatif
      </Heading>
      <Flex
        width='full'
        maxWidth={{ base: "320px" }}
        direction='column'
        gap={{ base: 6 }}
      >
        {renderingLoopMapping.map((item, index) => (
          <Flex
            key={index}
            gap={4}
          >
            {item.icons}
            <Text
              color={{ base: "gray.500" }}
              fontSize='sm'
            >
              {item.text}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}

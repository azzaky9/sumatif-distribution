"use client";

import React, { Fragment } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { productListCDNLink } from "./ProductProvide";
import Image from "next/image";
import Link from "next/link";

export default function PriceHomepage() {
  const links = ["/ruang_belajar", "/brain_academy"];

  return (
    <Box
      my={{ base: 8, md: 14 }}
      px={{ base: 4 }}
      pb={{ base: 4, md: 10 }}
      display='grid'
      placeContent='center'
      textAlign='center'
    >
      <Heading fontSize='2xl'>Price</Heading>
      <Box
        w={{ base: "full" }}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Text
          fontSize='sm'
          color='gray.500'
          w={{ md: "80%" }}
        >
          Dengan harga terjangkau dan layanan komprehensif, kami bekerja sama
          untuk memberikan nilai maksimal untuk investasi dalam pendidikan.
        </Text>
      </Box>
      <Flex
        direction={{ base: "row" }}
        gap={{ base: 8 }}
        justifyContent='center'
        alignItems='center'
        mt={{ base: 8 }}
      >
        {productListCDNLink.map((item, index) => (
          <Fragment key={index}>
            {item.as === "image" && (
              <Link href={links[index]}>
                <Box
                  shadow='2xl'
                  p={5}
                  position='relative'
                  transition='all'
                  transitionDuration='300ms'
                  rounded='3xl'
                  _hover={{
                    cursor: "pointer",
                    scale: 1.2
                  }}
                >
                  <Image
                    alt={item.alt}
                    src={item.link}
                    height={130}
                    width={130}
                  />
                </Box>
              </Link>
            )}
          </Fragment>
        ))}
      </Flex>
    </Box>
  );
}

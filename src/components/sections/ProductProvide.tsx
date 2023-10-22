"use client";

import React, { Fragment } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import brainacademyLogo from "../../../public/images/logo_BA.svg";
import { LiaSchoolSolid } from "react-icons/lia";

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
  },
  {
    alt: "onsite_learning",
    link: LiaSchoolSolid,
    as: "icon"
  }
];

export default function ProductProvide() {
  return (
    <Box
      backgroundColor='gray.50'
      px={{ base: 6 }}
      py={{ base: "16" }}
    >
      <Text
        fontSize={{ base: "xl" }}
        fontWeight='semibold'
      >
        Kami menyediakan produk pilihan terbaik dari Ruang Guru
      </Text>
      <Box
        pt={{ base: 18 }}
        display={{ base: "flex" }}
        gap={{ base: 2 }}
        flexDirection={{ base: "column", md: "row" }}
      >
        {productListCDNLink.map((product, index) => (
          <Fragment key={index}>
            {product.as === "image" && (
              <Image
                filter='grayscale(1)'
                width={{ base: "160px" }}
                height={{ base: "80px" }}
                alt={product.alt}
                src={product.link}
              />
            )}
          </Fragment>
        ))}
      </Box>
    </Box>
  );
}

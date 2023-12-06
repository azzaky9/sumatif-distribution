"use client";

import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { usePrice } from "@/context/PriceContext";
import MarkText from "../mark/MarkText";
import ProductCard from "../card/RecommendCourseCard";
import { type Product } from "../card/RecommendCourseCard";

const productData: Product[] = [
  {
    title: "Super Parenting Training and Family Gathering:",
    description:
      "Program unik yang menghadirkan pelatihan super untuk orangtua dengan ajang kumpul keluarga. Temukan di sini cara-cara baru dalam membesarkan anak dan mempererat hubungan keluarga Anda,",
    price: "Rp 1.600.000"
  },
  {
    title: "Pelatihan Tatap muka harga per rombel / modul.",
    description:
      "Minimal 50 orang per rombel/modul. Ada 3 modul pelatihan lengkap yang disediakan.",
    price: "-",
    benefit: [
      "Materi pelatihan",
      "Tools Pelatihan",
      "Konsumsi",
      "Akomodasi",
      "Sertifikat"
    ],
    priceByCategories: [
      ["50", "Rp 3.600.000"],
      ["60", "Rp 3.300.000"]
    ]
  }
];

export default function RecommendedCourse() {
  return (
    <Box
      id='products'
      py={24}
      px={{ base: 0, lg: 24 }}
    >
      <Flex
        w='full'
        py={4}
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Heading
          mb={5}
          textAlign='center'
        >
          <MarkText
            text='Product unggulan.'
            mark='unggulan.'
            variant='brand'
          />
        </Heading>
        <Text
          color='gray.400'
          maxW={520}
          textAlign='center'
        >
          Jelajahi pilihan produk terbaik kami dan temukan kesempurnaan kualitas
          dengan harga yang sesuai dengan kebutuhan Anda. Kami siap membantu
          Anda menemukan solusi terbaik tanpa harus mengorbankan kualitas.
        </Text>
      </Flex>

      <Flex
        h={{ base: "fit-content", lg: 500 }}
        w='full'
        direction={{ base: "column", lg: "row" }}
        pt={4}
        pb={10}
        justifyContent='center'
        alignContent={{ base: "center", lg: "baseline" }}
        gap={5}
      >
        {productData.map((product, index) => (
          <ProductCard
            {...product}
            key={index}
          />
        ))}
      </Flex>
    </Box>
  );
}

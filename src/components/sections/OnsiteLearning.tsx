"use client";

import {
  Box,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  Flex
} from "@chakra-ui/react";
import bgOnsiteContent from "../../../public/images/middle-section-teacher.webp";
import { MdCheckCircle } from "react-icons/md";
import MarkText from "../mark/MarkText";

const onsiteLearningBenefit = [
  {
    title: "Konsultasi Mendalam",
    description:
      "Kami melakukan konsultasi yang mendalam untuk memahami masalah yang dihadapi klien secara spesifik."
  },
  {
    title: "Analisis Produk Khusus",
    description:
      "Menyediakan beragam produk unggulan yang sesuai dengan kebutuhan solusi spesifik klien."
  },
  {
    title: "Solusi yang Disesuaikan",
    description:
      "Menggabungkan produk-produk kami dalam solusi yang disesuaikan untuk menyelesaikan masalah yang dihadapi klien."
  },
  {
    title: "Panduan Implementasi",
    description:
      "Memberikan panduan yang jelas dan terarah dalam implementasi solusi yang diberikan."
  },
  {
    title: "Evaluasi Berkelanjutan",
    description:
      "Menawarkan evaluasi secara terus-menerus untuk memastikan kesesuaian solusi dengan perubahan yang terjadi."
  }
];

export default function OnsiteLearning() {
  return (
    <Box
      px={{ base: "20px", lg: "120px" }}
      py={{ base: "120px" }}
      bg='gray.50'
      display='grid'
      placeContent='center'
    >
      <Heading
        textAlign={{ base: "start", lg: "center" }}
        fontSize='3xl'
      >
        <MarkText
          mark='Adaptif'
          text='Transformasi Klien Melalui Solusi Adaptif'
          variant='brand'
        />
      </Heading>
      <Box
        w='full'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Text
          w={{ base: "100%", lg: "80%" }}
          size='sm'
          textAlign={{ base: "start", lg: "center" }}
        >
          Dalam mencari solusi yang presisi dan terfokus terhadap masalah yang
          dihadapi, pendekatan sumatif kami menjadi tombak utama. Dari pemahaman
          yang mendalam hingga implementasi solusi yang terukur, kami menawarkan
          pendekatan yang spesifik dan efektif yang didukung oleh produk-produk
          unggulan kami. Dengan solusi yang dirancang khusus untuk setiap
          tantangan, kami memastikan transformasi nyata bagi klien kami.
        </Text>
      </Box>

      <Box
        mt={{ base: 10 }}
        display='grid'
        placeContent='center'
      >
        <Image
          rounded='2xl'
          src={bgOnsiteContent.src}
          alt='bg-vector-illustrate'
        />
      </Box>
      <Box
        w='full'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box w={{ lg: "80%", base: "100%" }}>
          <Heading
            py={8}
            fontSize='xl'
            color='whiteAlpha.200'
            textAlign='center'
          >
            Benefit yang bisa kalian dapatkan:
          </Heading>
          <List
            spacing={4}
            display='grid'
            gridTemplateColumns={{ base: "100%", lg: "repeat(2, 1fr)" }}
            gap={5}
          >
            {onsiteLearningBenefit.map((benefit, index) => (
              <ListItem
                bg='blackAlpha.50'
                p={4}
                rounded='xl'
                key={index}
              >
                <Flex
                  flexDir='column'
                  gap={4}
                >
                  <ListIcon
                    as={MdCheckCircle}
                    color='green.500'
                  />
                  <Heading
                    color='gray.800'
                    fontSize='md'
                  >
                    {benefit.title}
                  </Heading>
                </Flex>
                <Text color="gray.600" >{benefit.description}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

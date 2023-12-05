"use client";

import {
  Box,
  Button,
  Heading,
  Flex,
  Image,
  Img,
  Highlight
} from "@chakra-ui/react";
import BenefitTabs from "../tabs/BenefitTabs";
import BenefitsImage from "../../../public/images/second-section.webp";
import MarkText from "../mark/MarkText";

export default function Benefit() {
  return (
    <Flex
      position='relative'
      id='benefits'
      px={{ base: "20px", md: "52px" }}
      py={{ base: "58px", lg: "120px" }}
      direction={{ base: "column", lg: "row" }}
      justifyContent='center'
      alignItems='center'
      gap={{ base: "40px", lg: "80px" }}
    >
      <Box
        position='relative'
        display={{ base: "none", lg: "block" }}
      >
        <Box
          w={650}
          h={450}
          zIndex='-1'
          bg='gray.100'
          rounded='xl'
          position='absolute'
          left='-10'
          top='12'
        />

        <Img
          rounded='xl'
          alt='Benefit_section_picture'
          src={BenefitsImage.src}
          objectFit='contain'
          width={650}
          height={500}
        />
      </Box>
      <Box w={{ lg: "35%" }}>
        <Box
          display='flex'
          flexDirection={{ base: "column" }}
          justifyContent={{ base: "center", md: "start" }}
          alignItems={{ base: "center" }}
        >
          <Heading
            fontSize={{ base: "2xl", lg: "3xl" }}
            textAlign={{ base: "start", lg: "start" }}
            w={{ md: "85%", lg: "full" }}
          >
            <MarkText
              text='Pilihan pelatihan berkualitas'
              mark='berkualitas'
              variant='brand'
            />
          </Heading>
        </Box>

        <BenefitTabs />
        <a href='#price'>
          <Button
            variant={{ base: "outline", md: "solid" }}
            size='md'
          >
            Berlanggan Sekarang
          </Button>
        </a>
      </Box>
    </Flex>
  );
}

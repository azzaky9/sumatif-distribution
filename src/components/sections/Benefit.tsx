"use client";

import { Box, Button, Heading, Flex, Image } from "@chakra-ui/react";
import BenefitTabs from "../tabs/BenefitTabs";
import BenefitsImage from "../../../public/images/benefit_section.webp";

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
          h={500}
          border='2px'
          zIndex='-1'
          borderColor='orange.500'
          rounded='2xl'
          position='absolute'
          left='-10'
          top='12'
        />

        <Image
          alt='Benefit_section_picture'
          src={BenefitsImage.src}
          width={650}
          height={500}
        />
      </Box>
      <Box w={{ lg: "42%" }}>
        <Box
          display='flex'
          flexDirection={{ base: "column" }}
          justifyContent={{ base: "center", md: "start" }}
          alignItems={{ base: "center" }}
        >
          <Heading
            fontSize={{ base: "lg", lg: "2xl" }}
            textAlign={{ base: "center", lg: "start" }}
            w={{ md: "85%", lg: "full" }}
          >
            Setiap product memiliki keunggulan dan benefit tersendiri yang dapat
            di sesuaikan dengan keinginan Siswa / Mahasiswa
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

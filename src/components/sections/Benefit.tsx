"use client";

import { Box, Button, Heading, Flex, Image, Highlight } from "@chakra-ui/react";
import BenefitTabs from "../tabs/BenefitTabs";
import BenefitsImage from "../../../public/images/pretty-asian-teacher-smiling-camera-back-classroom-elementary-school-vintage-effect-style-pictures.jpg";

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

        <Image
          rounded="xl"
          alt='Benefit_section_picture'
          src={BenefitsImage.src}
          objectFit="contain"
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
            <Highlight
              query='Berkualitas'
              styles={{
                bg: "orange.50",
                px: 2,
                py: 1,
                rounded: "xl",
                color: "orange.500"
              }}
            >
              Pilihan Pelatihan Berkualitas
            </Highlight>
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

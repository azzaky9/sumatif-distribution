"use client";

import { Button, Stack, Text, Box, useMediaQuery } from "@chakra-ui/react";
import { HiArrowRight as ArrowRightIcon } from "react-icons/hi2";
import illustration from "../../../public/images/content.jpg";
import { Image } from "@chakra-ui/react";
// import { motion } from "framer-motion";

export default function Header() {
  const [isGreaterThan800px] = useMediaQuery("(min-width: 800px)");

  return (
    <Box
      id='home'
      as='header'
      display={{ base: "static", lg: "flex" }}
      gap={15}
      gridTemplateColumns={{ lg: "70% 1fr" }}
      mt={{ lg: 5 }}
      mb={{ base: 16, lg: 16 }}
      px={{ base: 4, lg: 2 }}
      w='100%'
    >
      <Box
        as='div'
        mt={{ base: 12, md: 8, lg: 8 }}
        w={{ base: "100%", md: "80%", lg: "50%" }}
      >
        <Stack
          my={5}
          spacing={5}
        >
          <Text
            lineHeight={1.3}
            fontSize={{ base: "2.7rem", md: "6xl", lg: "7xl" }}
            fontWeight='bold'
            data-aos='fade-up'
          >
            Official Partner Bimbel Online & Offline Ruang Guru
          </Text>

          <Text
            borderLeft='4px'
            borderColor='orange'
            fontSize={{ base: "medium", md: "medium" }}
            paddingLeft={3}
          >
            Kami menawarkan program pendidikan terbaik dari tim ahli Ruangguru.
            Bantu siswa Anda memahami kurikulum sekolah dan siap menghadapi
            ujian standar.
          </Text>
          <Button
            mt={17}
            colorScheme='orange'
            rightIcon={<ArrowRightIcon />}
            w='fit-content'
          >
            Explore More
          </Button>
        </Stack>
      </Box>
      {isGreaterThan800px && (
        <Box
          w='50%'
          display='grid'
          placeContent='center'
          position='relative'
        >
          <Image
            data-aos='fade-down'
            ml={20}
            rounded='lg'
            h='380px'
            src={illustration.src}
            alt='freepik-two-entreprenur-happy'
          />
        </Box>
      )}
    </Box>
  );
}

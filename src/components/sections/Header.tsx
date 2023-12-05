"use client";

import {
  Button,
  Stack,
  Text,
  Box,
  useMediaQuery,
  Highlight
} from "@chakra-ui/react";
import { HiArrowRight as ArrowRightIcon } from "react-icons/hi2";
import illustration from "../../../public/images/header-right-discover.webp";
import { Image, Img } from "@chakra-ui/react";
import { Image as NextImage } from "@chakra-ui/next-js";
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
      px={{ base: 4, md: 8, lg: 20 }}
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
            fontSize={{ base: "2.7rem", md: "5xl", lg: "5xl" }}
            fontWeight='bold'
          >
            <Highlight
              query='Partner'
              styles={{
                bg: "orange.50",
                px: 2,
                py: 1,
                rounded: "xl",
                color: "orange.500"
              }}
            >
              Kemajuan Profesional & Keluarga Berkualitas dengan Sumatif!
            </Highlight>
          </Text>

          <Text
            borderLeft='4px'
            borderColor='orange'
            color='gray.500'
            fontSize={{ base: "medium", md: "medium" }}
            paddingLeft={3}
          >
            Selamat datang di Sumatif, tempatnya peningkatan kompetensi bagi
            para Guru dan pelatihan super bagi orangtua! Kami menyediakan
            pelatihan tatap muka yang intensif, didukung oleh tema yang relevan
            dan modul yang komprehensif.
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
          <Box
            position='absolute'
            w='100%'
            h={310}
            left={5}
            top={5}
            p={10}
            bg='gray.100'
            rounded='xl'
            zIndex={-10}
          />
          <Img
            ml={20}
            width="auto"
            height={310}
            rounded='lg'
            src={illustration.src}
            alt='freepik-two-entreprenur-happy'
          />
        </Box>
      )}
    </Box>
  );
}

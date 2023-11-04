"use client";

import { Box, Stack, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import brainacademyLogo from "../../../public/images/logo_BA.svg";

export default function NavbarLogo() {
  const path = usePathname();

  return (
    <Stack
      direction='row'
      spacing={3}
    >
      <Text
        as={Link}
        href='/'
        fontSize={{ base: "1.4rem", md: "1.7rem", lg: "1.9rem" }}
        fontWeight='bold'
      >
        Sumatif
      </Text>
      {path === "/ruang_belajar" ? (
        <Image
          w={{ base: "36" }}
          h={{ base: "16" }}
          src='https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/OPTIMIZE/rb.svg'
          alt='ruang_belajar_icons'
        />
      ) : null}
    </Stack>
  );
}

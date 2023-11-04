"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileDrawer from "./mobile-nav/MobileDrawer";
import NavbarLogo from "./NavbarLogo";
import DesktopMenuList from "./desktop-nav/DesktopMenuList";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGreaterThan800px] = useMediaQuery("(min-width: 800px)");

  const path = usePathname();

  const handleClose = () => setIsOpen(false);

  const handleOpen = () => setIsOpen(true);

  return (
    <Box
      px={{ base: 4, md: 10, lg: 16 }}
      pt={5}
      bg={{ base: path === "/ruang_belajar" || path === "/brain_academy" ? "orange.50" : "white" }}
    >
      <Flex
        as='div'
        w='full'
        justifyContent='space-between'
        alignItems='center'
        py={{ md: "20px", lg: "18px" }}
      >
        <NavbarLogo />
        {isGreaterThan800px ? (
          <DesktopMenuList />
        ) : (
          <IconButton
            onClick={handleOpen}
            aria-label='open-navigation-mobile'
            variant='solid'
            size='lg'
            icon={<RxHamburgerMenu />}
          />
        )}
      </Flex>
      <MobileDrawer
        isOpen={isOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </Box>
  );
}

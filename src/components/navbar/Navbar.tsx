"use client";

import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileDrawer from "./mobile-nav/MobileDrawer";
import NavbarLogo from "./NavbarLogo";
import DesktopMenuList from "./desktop-nav/DesktopMenuList";

export default function Navbar() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [isGreaterThan800px] = useMediaQuery("(min-width: 800px)");

  return (
    <Box>
      <Flex
        as='div'
        w='full'
        justifyContent='space-between'
        alignItems='center'
        py={{ lg: "18px" }}
      >
        <NavbarLogo />
        {isGreaterThan800px ? (
          <DesktopMenuList />
        ) : (
          <IconButton
            onClick={onOpen}
            aria-label='open-navigation-mobile'
            variant='solid'
            size='lg'
            icon={<RxHamburgerMenu />}
          />
        )}
      </Flex>
      <MobileDrawer
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
}

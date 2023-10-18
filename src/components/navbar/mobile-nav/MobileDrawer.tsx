"use client";

import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  UseDisclosureProps,
  Button,
  Flex,
  Link as ChakraLink,
  Box
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import NavbarLogo from "../NavbarLogo";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const createListMenu = (displayName: string, to: string) => ({
  displayName,
  to
});

export const menuListData = [
  createListMenu("Home", "#home"),
  createListMenu("Introduction", "#introduction"),
  createListMenu("Why us?", "#wys"),
  createListMenu("Price", "#price")
];

export default function MobileDrawer({ isOpen, onClose }: Props) {
  return (
    <Drawer
      size='xs'
      placement='left'
      onClose={onClose}
      isOpen={isOpen}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton variant='ghost' />
        <DrawerHeader>
          <NavbarLogo />
        </DrawerHeader>
        <DrawerBody
          display='flex'
          flexDirection='column'
          gap={18}
        >
          {menuListData.map((data, index) => (
            <ChakraLink
              as={Link}
              key={index}
              href={data.to}
            >
              {data.displayName}
            </ChakraLink>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

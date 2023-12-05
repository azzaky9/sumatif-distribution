"use client";

import React, { useEffect, useRef, useState } from "react";
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
import Link from "next/link";
import NavbarLogo from "../NavbarLogo";
import { useRouter } from "next/navigation";
import ProductMenu from "../ProductMenu";

type Props = {
  handleClose: () => void;
  handleOpen: () => void;
  isOpen: boolean;
};

const createListMenu = (displayName: string, to: string) => ({
  displayName,
  to
});

export const menuListData = [
  createListMenu("Home", "#home"),
  createListMenu("Benefits", "#benefits"),
  createListMenu("Why us", "#why-us"),
  createListMenu("Product", "#product")
];

export default function MobileDrawer(props: Props) {
  const { handleClose, handleOpen, isOpen } = props;

  const [keepPosition, setKeepPosition] = useState("");

  const anchorEl = useRef<HTMLAnchorElement | null>(null);

  const route = useRouter();

  const handleLinkClick = (linkTo: string) => {
    const specificSection = document.querySelector(linkTo);
    handleClose();

    setTimeout(() => {
      if (specificSection) {
        specificSection?.scrollIntoView({ behavior: "smooth" });
      } else {
        route.push("/");
      }
    }, 200);
  };

  return (
    <Drawer
      size='xs'
      placement='left'
      onClose={handleClose}
      isOpen={isOpen}
      closeOnOverlayClick={false}
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
              onClick={() => handleLinkClick(data.to)}
              key={index}
            >
              {data.displayName}
            </ChakraLink>
          ))}
          <ProductMenu />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

"use client";

import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { menuListData } from "../mobile-nav/MobileDrawer";
import ProductMenu from "../ProductMenu";

export default function DesktopMenuList() {
  return (
    <Box
      display='flex'
      w='35%'
      justifyItems='center'
      alignItems='center'
      gap={{ base: "2rem", lg: "3rem" }}
    >
      {menuListData.map((data, index) => (
        <ChakraLink
          key={index}
          as={Link}
          href={data.to}
          fontSize={{ base: 15, lg: 17 }}
        >
          {data.displayName}
        </ChakraLink>
      ))}
      <ProductMenu />
    </Box>
  );
}

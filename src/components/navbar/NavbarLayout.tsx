"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Header from "../sections/Header";

export default function NavbarLayout() {
  return (
    <Box px={{ base: 8, md: 10, lg: 16 }}>
      <Navbar />
      <Header />
    </Box>
  );
}

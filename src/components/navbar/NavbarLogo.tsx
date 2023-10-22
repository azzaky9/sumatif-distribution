"use client"

import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function NavbarLogo() {
  return (
    <Text as={Link} href="/" fontSize={{ base: '1.4rem', md: '1.7rem', lg: '1.9rem' }} fontWeight="bold" >
      Sumatif 
    </Text>
  )
}

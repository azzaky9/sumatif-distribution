"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import BenefitTabs from "../tabs/BenefitTabs";
import { FaRegSmileBeam } from "react-icons/fa";

export default function Benefit() {
  return (
    <Box
      px={{ base: "25px" }}
      py={{ base: "58px" }}
    >
      <Box
        display='flex'
        flexDirection={{ base: "column" }}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
      >
        <FaRegSmileBeam style={{ fontSize: "1.5rem", color: "orange" }} />
        <Text
          mt={4}
          fontSize='2xl'
          textAlign='center'
          fontWeight='semibold'
        >
          Benefit & Keunggulan
        </Text>
        <Text
          fontSize='md'
          textAlign='center'
        >
          Setiap product memiliki keunggulan dan benefit tersendiri yang dapat
          di sesuaikan dengan keinginan Siswa / Mahasiswa
        </Text>
      </Box>

      <BenefitTabs />
    </Box>
  );
}

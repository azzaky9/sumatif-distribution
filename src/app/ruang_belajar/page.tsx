"use client";

import React, { useEffect } from "react";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import PriceList from "@/components/sections/PriceList";
import { useRouter } from "next/navigation";

export default function Page() {

  const route = useRouter()

  useEffect(() => {
    route.push(`/ruang_belajar?jenjang=sd&kelas=1&month_duration=1`)    
  }, [])

  return (
    <Box
      pt={{ base: 8 }}
      px={{ base: 2 }}
    >
      <Box px={{ base: 4 }}>
        <Image
          w='36'
          h='16'
          src='https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/OPTIMIZE/rb.svg'
          alt='ruang_belajar_icons'
        />
        <Text fontSize='small'>
          Temukan berbagai pilihan paket pembelajaran online di Ruangbelajar
          yang terjangkau dan komprehensif. Mulai dari Paket SD hingga persiapan
          UTBK-SNBT untuk seleksi PTN, Ruangbelajar memberikan akses ke ribuan
          video pembelajaran, rangkuman materi yang disesuaikan, serta kontrol
          orangtua untuk memantau perkembangan belajar siswa. Jadikan proses
          belajar lebih menyenangkan dan efisien dengan harga yang terjangkau.
        </Text>
      </Box>
      <Stack
        mt={{ base: 4 }}
        direction={{ base: "column" }}
        gap={8}
      >
        <PriceList />
      </Stack>
    </Box>
  );
}

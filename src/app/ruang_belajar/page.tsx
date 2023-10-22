import { Box, Image, Stack, Text } from "@chakra-ui/react";
import PriceList from "@/components/sections/PriceList";
 
export default function Page() {
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

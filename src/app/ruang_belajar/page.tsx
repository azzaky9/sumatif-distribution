import { Box, Image, Stack, Text } from "@chakra-ui/react";
import PriceList from "@/components/sections/PriceList";
import TopCardRuangBelajar from "@/components/card/TopCardRuangBelajar";

export default function Page() {
  return (
    <>
      <TopCardRuangBelajar />
      {/* <Box
        px={{ base: 4, lg: 24 }}
        display={{ lg: "flex" }}
        flexDirection={{ lg: "column" }}
      >
        <Image
          w={{ base: "36" }}
          h={{ base: "16" }}
          src='https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/OPTIMIZE/rb.svg'
          alt='ruang_belajar_icons'
        />
        <Text
          fontSize={{ base: "small" }}
          w={{ lg: "80%" }}
        >
          Temukan berbagai pilihan paket pembelajaran online di Ruangbelajar
          yang terjangkau dan komprehensif. Mulai dari Paket SD hingga persiapan
          UTBK-SNBT untuk seleksi PTN, Ruangbelajar memberikan akses ke ribuan
          video pembelajaran, rangkuman materi yang disesuaikan, serta kontrol
          orangtua untuk memantau perkembangan belajar siswa. Jadikan proses
          belajar lebih menyenangkan dan efisien dengan harga yang terjangkau.
        </Text>
      </Box> */}
      <Box
        px={{ base: 2 }}
        bg='gray.50'
        py={{ base: 24 }}
      >
        <PriceList />
      </Box>
    </>
  );
}

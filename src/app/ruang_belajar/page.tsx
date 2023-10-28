import { Box, Image, Stack, Text } from "@chakra-ui/react";
import PriceList from "@/components/sections/PriceList";

export default function Page() {
  return (
    <Box
      pt={{ base: 8 }}
      px={{ base: 2 }}
    >
      <Box
        px={{ base: 4, lg: 8 }}
        display={{ lg: "flex" }}
        flexDirection={{ lg: "column" }}
        justifyContent={{ lg: "center" }}
        alignItems={{ lg: "center" }}
      >
        <Image
          w={{ base: "36", lg: "56" }}
          h={{ base: "16", lg: "16" }}
          src='https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/OPTIMIZE/rb.svg'
          alt='ruang_belajar_icons'
        />
        <Text
          fontSize={{ base: "small" }}
          w={{ lg: "80%" }}
          textAlign={{ lg: "center" }}
        >
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
        direction={{ base: "column", lg: "row" }}
        gap={8}
        display={{ lg: "grid" }}
        placeContent={{ lg: "center" }}
      >
        <PriceList />
      </Stack>
    </Box>
  );
}

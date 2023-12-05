"use client";

import {
  Box,
  Heading,
  Highlight,
  Image,
  SimpleGrid,
  Text,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import bgOnsiteContent from "../../../public/images/middle-section-teacher.webp";
import { MdCheckCircle } from "react-icons/md";

const onsiteLearningBenefit = [
  "Bimbingan diadakan di sekolah, sehingga pihak sekolah dapat mengontrol langsung proses pembelajarannya.",
  "Guru-gurunya berasal dari PTN ternama dan usianya relatif masih muda, sehingga akan lebih akrab dengan siswa",
  "Materi disampaikan dengan cara yang menyenangkan, sehingga akan mudah dicerna oleh siswa",
  "Secara finansial, siswa akan relatif lebih hemat karena tidak perlu mengeluarkan biaya tambahan untuk ongkos ke luar sekolah",
  "Siswa akan merasa relatif lebih aman, karena tidak perlu pergi ke luar sekolah untuk melakukan bimbingan belajar",
  "Siswa juga tidak akan capek dan tidak perlu buang waktu lagi untuk mencari pembelajaran tambahan, karena semuanya telah difasilitasi di sekolah",
  "Siswa juga bisa berdiskusi langsung ke guru-guru Sumatif diluar jam belajarnya, termasuk juga dilokasi kantor Sumatif.",
  "Selain menyampaikan materi pembelajaran, guru-guru Sumatif juga bertanggung jawab mengajarkan moral kepada siswa. Sehingga siswa diharapkan tidak hanya pintar secara intelektual, tetapi juga pintar secara emosional dan spiritual",
  "Belajar akan terasa menyenangkan karena dilakukan dengan komunikasi dua arah"
];

export default function OnsiteLearning() {
  return (
    <Box
      px={{ base: "20px", lg: "120px" }}
      py={{ base: "120px" }}
      bg='gray.50'
      display='grid'
      placeContent='center'
    >
      <Heading
        textAlign={{ base: "start", lg: "center" }}
        fontSize='3xl'
      >
        <Highlight
          query='adipisicing elit'
          styles={{
            bg: "blackAlpha.200",
            px: 2,
            py: 1,
            rounded: "xl",
            color: "orange.500"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Highlight>
      </Heading>
      <Box
        w='full'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Text
          w={{ base: "100%", lg: "80%" }}
          size='sm'
          textAlign={{ base: "start", lg: "center" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni numquam
          corrupti quas rem voluptatem sunt praesentium. Necessitatibus ad
          laudantium fugit.
        </Text>
      </Box>

      <Box
        mt={{ base: 10 }}
        display='grid'
        placeContent='center'
      >
        <Image
          rounded='2xl'
          src={bgOnsiteContent.src}
          alt='bg-vector-illustrate'
        />
      </Box>
      <Box
        w='full'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box w={{ lg: "80%", base: "100%" }}>
          <Heading
            py={8}
            fontSize='xl'
            color='whiteAlpha.200'
            textAlign='center'
          >
            Benefit yang bisa kalian dapatkan:
          </Heading>
          <List
            spacing={4}
            display='grid'
            gridTemplateColumns={{ base: "100%", lg: "repeat(2, 1fr)" }}
            gap={5}
          >
            {onsiteLearningBenefit.map((benefit, index) => (
              <ListItem
                bg='blackAlpha.50'
                p={4}
                rounded='xl'
                key={index}
              >
                <ListIcon
                  as={MdCheckCircle}
                  color='green.500'
                />

                {benefit}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

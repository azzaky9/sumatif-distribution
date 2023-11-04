import { Box, Grid, Heading, Highlight, List } from "@chakra-ui/react";
import PriceListBrAcademy from "@/components/sections/PriceListBrAcademy";
import PriceList from "@/components/sections/PriceList";
import { GenerateChildList } from "@/components/card/TopCardRuangBelajar";

const brainAcademyListBenefit = [
  "Releavant dengan Kurikulum Merdeka dan K-13 Revisi",
  "Konsultasi PR Lewat video call dan forum tanya jawab",
  "Kelas interaktif Koselingnya melalui chat atau video call"
];

export default async function Page() {
  return (
    <Box pt={16}>
      <Grid
        px={8}
        pt={82}
        pb={128}
        placeContent='center'
      >
        <Heading
          maxW='998px'
          fontSize={{ base: "3xl", lg: "5xl" }}
          mb={8}
          color='black'
          textAlign={{ base: "start", lg: "center" }}
        >
          <Highlight
            query='terbaik'
            styles={{
              bg: "orange.50",
              px: 4,
              py: 1,
              rounded: "xl",
              color: "orange.500",
              textTransform: "capitalize"
            }}
          >
            Bimbel online terbaik untuk SD, SMP, SMA, dan persiapan masuk PTN
          </Highlight>
        </Heading>
        <Box
          mt={8}
          w='full'
          display='grid'
          placeContent='center'
          gap={4}
        >
          <Heading
            fontSize='md'
            textAlign='center'
          >
            Benefit yang bisa kamu nikmati
          </Heading>
          <List
            maxW={682}
            spacing={4}
          >
            <GenerateChildList listValue={brainAcademyListBenefit} />
          </List>
        </Box>
      </Grid>
      <Box
        py={8}
        px={4}
        bg='gray.50'
      >
        <PriceListBrAcademy />
      </Box>
    </Box>
  );
}

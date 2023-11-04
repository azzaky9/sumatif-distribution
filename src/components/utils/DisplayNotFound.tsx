"use client";

import { Grid, Image, Text } from "@chakra-ui/react";
import notFoundImage from "../../../public/images/not-found-illustrate.svg";

export const DisplayNotFound = () => {
  return (
    <Grid
      w='full'
      h='full'
      placeContent='center'
    >
      <Image
        w={{ base: "80" }}
        h={{ base: "36" }}
        m={5}
        src={notFoundImage.src}
        alt='not_found_display'
      />
      <Text textAlign='center'>Tidak ada paket yang tersedia.</Text>
    </Grid>
  );
};

"use client";

import React from "react";
import {
  Box,
  Heading,
  Highlight,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { PiArrowBendRightDownBold } from "react-icons/pi";

const createListValue = [
  "96% nilai pengguna terbukti naik setelah 3 bulan berlangganan ruangbelajar",
  "98% pengguna terbantu dengan pemahaman konsep ala ruangbelajar",
  "9.3/10 pengguna puas belajar menggunakan ruangbelajar"
];

export default function TopCardRuangBelajar() {
  return (
    <Box
      w='100%'
      py={{ base: "80px" }}
      px={{ base: "20px" }}
      display='grid'
      placeContent='center'
    >
      <Box
        rounded='3xl'
        w={{ lg: "920px" }}
        h={{ lg: "620px", base: "fit-content" }}
      >
        <Heading
          fontSize={{ base: "3xl", lg: "5xl" }}
          color='black'
          textAlign={{ base: "start", lg: "center" }}
        >
          <Highlight
            query='Satu-satunya'
            styles={{
              bg: "orange.50",
              px: 2,
              py: 1,
              rounded: "xl",
              color: "orange.500"
            }}
          >
            Satu-satunya bimbingan belajar terlengkap dengan video adaptif
          </Highlight>
        </Heading>
        <Box mt='20'>
          <Heading
            fontSize='xl'
            color='black'
            mb={10}
            textAlign='center'
          >
            Pendapat Mereka:
          </Heading>
          <List spacing={10}>
            <GenerateChildList listValue={createListValue} />
          </List>
        </Box>
      </Box>
    </Box>
  );
}

type Props = {
  listValue: string[];
};

export const GenerateChildList = ({ listValue }: Props) => {
  return (
    <>
      {listValue.map((value, index) => (
        <ListItem
          key={index}
          bg='blackAlpha.50'
          p={4}
          rounded='xl'
          fontSize={{ lg: "2xl", base: "xl" }}
        >
          <ListIcon
            as={MdCheckCircle}
            color='green.500'
          />
          {value}
        </ListItem>
      ))}
    </>
  );
};

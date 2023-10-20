"use client";

import React, { ChangeEvent, useState, Dispatch, SetStateAction } from "react";
import { Box, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ProductOptions } from "../options/ProductOptions";
import { SubListProduct } from "../options/ProductOptions";
import ModalLevel from "../modal/ModalLevel";

type TSetStates<T> = Dispatch<SetStateAction<T>>;
type CurrentSelection = "Ruang Belajar" | "Brain Academy";
type SelectionLevel = "SD" | "SMP" | "SMA" | "UTBK/SNBT";

const selectionProductList = ["Ruang Belajar", "Brain Academy"];
const selectionLevelList = ["SD", "SMP", "SMA", "UTBK/SNBT"];

export default function PriceList() {
  const [currentSelection, setCurrentSelection] =
    useState<CurrentSelection>("Ruang Belajar");
  const [currentLevel, setCurrentLevel] = useState<SelectionLevel | null>(null);

  const disclosureProp = useDisclosure();

  const handleProductChange = (value: any) => {
    setCurrentSelection(value as CurrentSelection);
  };

  const handleLevelChange = (value: any) => {
    setCurrentLevel(value as SelectionLevel);
  };

  return (
    <Box py={{ base: 2 }}>
      <ModalLevel {...disclosureProp} />
      <Text
        fontWeight='semibold'
        textAlign='center'
        as='h5'
        fontSize='2xl'
      >
        Price List
      </Text>
      <Box
        mt={{ base: "20px" }}
        p={{ base: "20px" }}
        boxShadow='base'
        rounded='md'
      >
        <Stack
          direction='row'
          gap={4}
        >
          <SubListProduct
            modalProp={disclosureProp}
            currentProduct={currentSelection}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export { selectionLevelList, selectionProductList };

export type { TSetStates, CurrentSelection, SelectionLevel };

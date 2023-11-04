"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Flex,
  Box,
  Heading
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TRefetch } from "../sections/PriceList";

type Props = {
  isOpen: boolean;
  currentSelected: string;
  onOpen: () => void;
  onClose: () => void;
  handleSelectedChange: (value: string) => void;
  handleSavePrefference: (value: string) => void;
};

const listWithEachHeadings = [
  {
    heading: "Sekolah Dasar",
    list: ["1-sd", "2-sd", "3-sd", "4-sd", "5-sd", "6-sd"]
  },
  {
    heading: "Sekolah Menengah Pertama",
    list: ["7-smp", "8-smp", "9-smp"]
  },
  {
    heading: "Sekolah Menegah Atas / Kejuruan",
    list: ["10-sma", "11-sma", "12-sma", "10-smk", "11-smk", "12-smk"]
  },
  {
    heading: "Persiapan Masuk PTN / UTBK / SNBT",
    list: ["utbk"]
  }
];

export default function ModalBrAcademyKelas(props: Props) {
  const {
    isOpen,
    onClose,
    handleSavePrefference,
    handleSelectedChange,
    currentSelected
  } = props;

  const route = useRouter();

  const convertToReadable = (text: string) => {
    return text.split("-").join(" ").toUpperCase();
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <Flex
          direction='column'
          px={8}
          pt={10}
          pb={6}
          gap={4}
        >
          {listWithEachHeadings.map((item, index) => (
            <Box key={index}>
              <Heading
                fontSize='sm'
                mb={3}
              >
                {item.heading}
              </Heading>
              <Flex
                wrap='wrap'
                gap={4}
              >
                {item.list.map((option, idxOption) => (
                  <Button
                    key={option}
                    size='sm'
                    fontWeight='normal'
                    colorScheme='gray'
                    variant={option === currentSelected ? "solid" : "outline"}
                    onClick={() => handleSelectedChange(option)}
                  >
                    Kelas {convertToReadable(option)}
                  </Button>
                ))}
              </Flex>
            </Box>
          ))}
          <Button
            mt={5}
            rounded='3xl'
            colorScheme='orange'
            onClick={() => handleSavePrefference(currentSelected)}
          >
            Save Prefference
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

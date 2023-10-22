"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  UseDisclosureProps,
  Box,
  Heading,
  Text,
  Stack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  StatesTypes,
  TSetStates,
  selectionLevelList
} from "../sections/PriceList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  setter: TSetStates<StatesTypes>;
};

export default function ModalLevel(props: Props) {
  const { handleOpen, isOpen, handleClose, setter } = props;

  const path = usePathname();
  const route = useRouter();

  const [currentKelas, setCurrentKelas] = useState(1);

  const updateQueryParams = () => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.href.split("/")[3];

      setter((prev) => ({ ...prev, kelas: String(currentKelas) }));

      route.push(
        `/ruang_belajar?jenjang=sd&kelas=${currentKelas}&month_duration=1`,
        { scroll: false }
      );

      handleClose();
    }
  };

  return (
    <Modal
      isCentered
      onClose={handleClose}
      size='md'
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text
            textAlign='center'
            fontSize='md'
          >
            Pilih Jenjang
          </Text>
        </ModalHeader>
        <ModalBody>
          <Box
            display='grid'
            gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            rowGap={6}
            columnGap={4}
          >
            {[1, 2, 3, 4, 5, 6].map((kelas, index) => (
              <Button
                key={index}
                variant='ghost'
                colorScheme='orange'
                onClick={() => setCurrentKelas(kelas)}
              >
                Kelas {kelas}
              </Button>
            ))}
            {/* [1, 2, 3, 4, 5, 6].map((item) => (
                <Button
                  key={item}
                  variant='ghost'
                  colorScheme='orange'
                  onClick={() =>
                    console.log("any")
                  }
                >
                  Kelas {item}
                </Button> */}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Stack
            direction='row'
            gap='2'
          >
            <Button
              size='md'
              colorScheme='orange'
              onClick={() => updateQueryParams()}
            >
              Save
            </Button>
            <Button
              onClick={handleClose}
              size='md'
              colorScheme='red'
              variant='solid'
            >
              Close
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

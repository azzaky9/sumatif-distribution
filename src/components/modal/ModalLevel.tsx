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
import { selectionLevelList } from "../sections/PriceList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type StateSelection = {
  jenjang: string;
  kelas: string;
};

export default function ModalLevel(props: UseDisclosureProps) {
  const { onClose, isOpen, onOpen } = props;

  const [currentSelection, setCurrentSelection] = useState<StateSelection>({
    jenjang: "",
    kelas: ""
  });

  const route = useRouter();
  const params = useSearchParams();
  const path = usePathname();

  const savePrefference = () => {
    console.log(currentSelection);
  };

  const setParamsandState = (jenjang: string, kelas?: string) => {
    if (kelas) {
      route.push(
        `/ruang_belajar?jenjang=${currentSelection.jenjang}&kelas=${kelas}`
      );

      return setCurrentSelection({ jenjang, kelas });
    }

    route.push(`/ruang_belajar?jenjang=${jenjang}`);

    setCurrentSelection((prev) => ({ ...prev, jenjang }));
  };

  const handleClose = () => {
    console.log("trigger");

    route.push("/ruang_belajar");
    onClose!();
  };

  useEffect(() => {
    if (path === "/ruang_belajar") {
      onOpen!();
    }
  }, [path]);

  return (
    <Modal
      isCentered
      onClose={handleClose}
      size='md'
      isOpen={isOpen!}
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
            {params.get("jenjang") !== "sd" &&
              selectionLevelList.map((list) => (
                <Button
                  onClick={() => setParamsandState(list.toLowerCase())}
                  colorScheme='orange'
                  variant='ghost'
                  rounded='3xl'
                  key={list}
                >
                  {list}
                </Button>
              ))}
            {params.get("jenjang") === "sd" &&
              [1, 2, 3, 4, 5, 6].map((item) => (
                <Button
                  key={item}
                  variant='ghost'
                  colorScheme='orange'
                  onClick={() =>
                    setParamsandState(currentSelection.jenjang, String(item))
                  }
                >
                  Kelas {item}
                </Button>
              ))}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Stack
            direction='row'
            gap='2'
          >
            <Button
              size='sm'
              variant='solid'
              colorScheme='orange'
              onClick={savePrefference}
            >
              Save
            </Button>
            <Button
              onClick={handleClose}
              size='sm'
              variant='ghost'
            >
              Close
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  UseDisclosureProps
} from "@chakra-ui/react";
import React from "react";

type ReusedModalTypes = {
  modalLabel: string;
  bodyContent: React.ReactNode;
  footerContent: React.ReactNode;
  interactProps: UseDisclosureProps;
};

export default function ReuseModal(props: ReusedModalTypes) {
  const { bodyContent, footerContent, interactProps, modalLabel } = props;

  const { isOpen, onOpen, onClose } = interactProps;

  return (
    <>
      {isOpen && onOpen && onClose ? (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent width='fit-content' >
            <ModalHeader>{modalLabel}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{bodyContent}</ModalBody>

            <ModalFooter>{footerContent}</ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
}

"use client";

import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react";
import { usePrice } from "@/context/PriceContext";
import CardPrice from "../card/CardPrice";

export default function ReviewProductModal() {
  const { handleCloseModal, isReviewModalOpen, productSelection } = usePrice();

  return (
    <Modal
      isOpen={isReviewModalOpen}
      onClose={handleCloseModal}
    >
      <ModalOverlay />
      <ModalContent bg="transparent" shadow="none" >
        <CardPrice
          hideBuyButton
          data={productSelection}
        />
        <ModalFooter >
          <Button
            
            colorScheme='red'
            mr={10}
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

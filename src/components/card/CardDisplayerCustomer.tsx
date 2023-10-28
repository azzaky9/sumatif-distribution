"use client";

import { FormSchema, StateListCustomer } from "../forms/FormBuyProduct";
import {
  Box,
  List,
  ListIcon,
  Button,
  ListItem,
  Text,
  Flex,
  ButtonGroup,
  IconButton,
  useToast
} from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { TSetStates } from "../sections/PriceList";
import { useState } from "react";
import { VscSend } from "react-icons/vsc";

type Props = {
  customerList: StateListCustomer[];
  setCustomerList: TSetStates<StateListCustomer[]>;
};

export default function CardDisplayerCustomer(props: Props) {
  const { customerList, setCustomerList } = props;

  const [isSender, setIsSender] = useState(false);

  const toast = useToast();

  const handleDelete = (id: string) => {
    const copyPreviousData = [...customerList];

    const deleteSpecificData = copyPreviousData.filter(
      (data) => data.id !== id
    );

    setCustomerList(deleteSpecificData);
  };

  const handleSubmit = async () => {
    try {
      setIsSender(true);

      if (customerList.length < 10) {
        throw new Error("Minimal harus 10 nama");
      }

      const res: { status: number; message: string } = await senderEmail();

      if (res.status === 200) {
        toast({
          position: "top",
          title: "Berhasil melakukan transaksi",
          status: "success",
          isClosable: true
        });
      }

      setCustomerList([]);

      setIsSender(false);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          position: "top",
          title: error.message,
          status: "error",
          isClosable: true
        });
      }

      setIsSender(false);
    }
  };

  const senderEmail = async () => {
    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(customerList)
    });
    const data = await res.json();

    return data;
  };

  return (
    <Box
      w={{ base: "full", md: "320px", lg: "420px" }}
      boxShadow='md'
      rounded='3xl'
      p={{ base: "23px" }}
      bg="white"
    >
      <Box
        px={2}
        h={{ base: "120px", lg: "80%" }}
        overflowY={{ base: "scroll", lg: "hidden" }}
        overflowX='hidden'
        
      >
        <Flex
          flexWrap='wrap'
          gap={3}
        >
          {customerList.map((customer, index) => (
            <ButtonGroup
              key={index}
              size='sm'
              isAttached
              variant='outline'
            >
              <Button leftIcon={<BsFillPersonFill />}>{customer.name}</Button>
              <IconButton
                onClick={() => handleDelete(customer.id)}
                aria-label='Add to friends'
                icon={<AiOutlineClose />}
              />
            </ButtonGroup>
          ))}
        </Flex>
      </Box>
      <Box
        p={3}
        display='flex'
        flexDirection='column'
      >
        <Text fontSize='sm'>Kapasitas minimum untuk melakukan transaksi </Text>
        <span>{customerList.length} / 10</span>
      </Box>
      <Box
        display='flex'
        justifyContent='end'
        alignItems='end'
      >
        <Button
          colorScheme='orange'
          onClick={handleSubmit}
          isLoading={isSender}
          loadingText='Sending..'
          rightIcon={<VscSend />}
        >
          Process
        </Button>
      </Box>
    </Box>
  );
}

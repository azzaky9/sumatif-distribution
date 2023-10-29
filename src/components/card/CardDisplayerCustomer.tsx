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
  useToast,
  Card,
  CardBody,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  FormControl,
  Input,
  FormLabel
} from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { TSetStates } from "../sections/PriceList";
import { ChangeEvent, useState } from "react";
import { VscSend } from "react-icons/vsc";
import PopoverBenefitProduct from "../popovers/Popover";
import { AiOutlineInfoCircle } from "react-icons/ai";

type Props = {
  customerList: StateListCustomer[];
  setCustomerList: TSetStates<StateListCustomer[]>;
};

export default function CardDisplayerCustomer(props: Props) {
  const { customerList, setCustomerList } = props;

  const [isSender, setIsSender] = useState(false);
  const [PICNames, setPICNames] = useState("");
  const [isPICError, setIsPICError] = useState(false);

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

      if (!PICNames) {
        setIsPICError(true);

        throw new Error("Nama PIC pendaftaran wajib di isi");
      }

      const res: { status: number; message: string } = await senderEmail();

      if (res.status === 200) {
        toast({
          position: "top",
          title: "Data kamu berhasil di kirim,",
          description: "harap menunggu update dari admin kami ya! 😉",
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
      body: JSON.stringify({
        studentData: customerList,
        picNames: PICNames
      })
    });
    const data = await res.json();

    return data;
  };

  return (
    <Card
      w={{ base: "full", md: "320px", lg: "420px" }}
      rounded='3xl'
      p={{ base: "23px" }}
      bg='white'
      variant='outline'
    >
      <CardBody
        display='flex'
        flexDir='column'
        justifyContent='space-between'
      >
        <Box
          px={2}
          overflowY={{ base: "scroll", lg: "hidden" }}
          overflowX='hidden'
          h={{ base: "250px", lg: "unset" }}
        >
          <Flex
            w='full'
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
          w='full'
          display='flex'
          flexDir='column'
          justifyContent='space-between'
        >
          <FormControl
            isInvalid={isPICError}
            mt={4}
          >
            <FormLabel fontSize='xs'>
              Nama PIC Pendaftaran (Nama yang bisa di hubungi)
            </FormLabel>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setIsPICError(false);
                setPICNames(e.target.value);
              }}
              value={PICNames}
              type='text'
              placeholder='Nama PIC '
            />
          </FormControl>
          <Box
            mt={4}
            w='full'
            display='flex'
            justifyContent='space-between'
          >
            <PopoverBenefitProduct
              triggerElement={
                <IconButton
                  variant='ghost'
                  colorScheme='facebook'
                  aria-label='information'
                  rounded='full'
                  size='sm'
                  icon={
                    <AiOutlineInfoCircle
                      style={{ color: "black", fontSize: "1.4rem" }}
                    />
                  }
                />
              }
            >
              <PopoverArrow />
              <PopoverHeader textAlign='start'>
                Informasi Transaksi
              </PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Text>
                  Untuk melakukan proses transaksi kamu harus mengisi 10 data
                  temanmu jika ingin membeli paket di Sumatif
                </Text>
              </PopoverBody>
              <PopoverFooter>
                <Text>Status: {customerList.length} / 10</Text>
              </PopoverFooter>
            </PopoverBenefitProduct>
            <Button
              colorScheme='green'
              variant='ghost'
              onClick={handleSubmit}
              isLoading={isSender}
              loadingText='Sending..'
              rightIcon={<VscSend />}
            >
              Process
            </Button>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}

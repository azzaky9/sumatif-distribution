"use client";

import { FormSchema, StateListCustomer } from "../forms/FormBuyProduct";
import {
  Box,
  Button,
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
import { useMutation } from "react-query";
import axios, { AxiosError } from "axios";
import BaseInput, { TBaseInputProps } from "../input/BaseInput";
import { FaBedPulse } from "react-icons/fa6";

type Props = {
  customerList: StateListCustomer[];
  setCustomerList: TSetStates<StateListCustomer[]>;
};

type PICData = {
  picNames: string;
  picNumber: string;
};

type OuterProps<T> = Omit<TBaseInputProps<T>, "isInvalid" | "names">;

export default function CardDisplayerCustomer(props: Props) {
  const { customerList, setCustomerList } = props;

  const [isSender, setIsSender] = useState(false);
  const [picData, setPicData] = useState<PICData>({
    picNames: "",
    picNumber: ""
  });
  const [isPICError, setIsPICError] = useState(false);

  const toast = useToast();

  const handleDelete = (id: string) => {
    const copyPreviousData = [...customerList];

    const deleteSpecificData = copyPreviousData.filter(
      (data) => data.id !== id
    );

    setCustomerList(deleteSpecificData);
  };

  const onPICDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsPICError(false);

    const names = e.target.name as keyof PICData;

    setPicData((prev) => ({
      ...prev,
      [names]: e.target.value as string
    }));
  };

  const handleSubmit = async () => {
    try {
      setIsSender(true);

      if (customerList.length < 10) {
        throw new Error("Minimal harus 10 nama");
      }

      if (!picData.picNames || !picData.picNumber) {
        setIsPICError(true);

        throw new Error("Data PIC pendaftaran wajib di isi");
      }

      const res: { status: "success" | "failed"; message: string } =
        await sendMail.mutateAsync();

      if (res.status === "success") {
        toast({
          position: "top",
          title: "Data kamu berhasil di kirim,",
          description: "harap menunggu update dari admin kami ya! 😉",
          status: "success",
          isClosable: true
        });

        setPicData({
          picNames: "",
          picNumber: ""
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

  const sendMail = useMutation({
    mutationKey: ["send-email"],
    mutationFn: async () => {
      try {
        const url = process.env.NEXT_PUBLIC_API_URL;

        const res = await axios.post(`${url}api/email`, {
          studentData: customerList,
          picData
        });

        const data = await res.data;

        return data;
      } catch (error) {
        if (error instanceof AxiosError) {
          console.error(error.message);
        }
      }
    }
  });

  const PICPropsNames: OuterProps<keyof PICData> = {
    name: "picNames",
    onChange: onPICDataChange,
    placeholder: "Names",
    value: picData.picNames
  };

  const PICPropsNumber: OuterProps<keyof PICData> = {
    name: "picNumber",
    onChange: onPICDataChange,
    placeholder: "Nomor aktif yang dapat di hubungi",
    value: picData.picNumber
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
          <BaseInput
            isInvalid={isPICError}
            {...PICPropsNames}
          />
          <BaseInput
            isInvalid={isPICError}
            {...PICPropsNumber}
          />

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
              colorScheme='orange'
              variant='solid'
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

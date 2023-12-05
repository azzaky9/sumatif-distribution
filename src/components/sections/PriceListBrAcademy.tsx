"use client";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Carousel from "../carousel/Carousel";
import axios, { AxiosError } from "axios";
import { ProductPackage } from "@/context/PriceContext";
import SliderButton from "../button/SliderButton";
import { useSwiperSlide } from "@/hooks/useSwiperSlide";
import { LoadIndicator } from "../utils/LoadIndicator";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import {
  Box,
  Button,
  useDisclosure,
  Image,
  Heading,
  GridItem,
  Flex
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import ModalBrAcademyKelas from "../modal/ModalBrAcademyKelas";
import { Grid, Text } from "@chakra-ui/react";
import brainacademyLogo from "../../../public/images/logo_BA.svg";
import { BsChevronDown } from "react-icons/bs";
import { DisplayNotFound } from "../utils/DisplayNotFound";
import CardPrice from "../card/CardPrice";

type ResponseAPI<TData> = {
  data: TData;
  status: "success" | "failed";
};

export default function PriceListBrAcademy() {
  const route = useRouter();
  const params = useSearchParams();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selected, setSelected] = useState("3-sd");

  const { data, isLoading, isError, isRefetching, refetch } = useQuery({
    queryKey: ["brain-academy"],
    queryFn: async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}api/product/ruang-guru/brain-acedemy?learnMethod=online&kelas=${selected}`;

        const response = await axios.get(url);

        const data = (await response.data) as ResponseAPI<ProductPackage[]>;

        console.log(data);

        if (data.status === "failed") {
          return [];
        }

        return data.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.message);
        }
      }
    },
    staleTime: Infinity
  });

  const handleSavePrefference = (value: string) => {
    if (selected) {
      route.push(`?kelas=${value}`, { scroll: false });

      refetch();
    }

    onClose();
  };

  const handleSelectedChange = (value: string) => {
    const splitValue = value.split("-");

    if (splitValue[1] === "sma") {
      return setSelected(`${splitValue[0]}-ipa`);
    }

    setSelected(value);
  };

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <ModalBrAcademyKelas
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        currentSelected={selected}
        handleSavePrefference={handleSavePrefference}
        handleSelectedChange={handleSelectedChange}
      />

      <Box
        w='full'
        p={10}
      >
        <Box mx='auto'>
          <Image
            w={{ base: "25" }}
            h={{ base: "14" }}
            m={5}
            src={brainacademyLogo.src}
            alt='brain_academy_icons'
          />
        </Box>

        <Grid
          mb='20'
          mt='10'
          rounded='xl'
          h='full'
          maxH={{ base: "828px" }}
          w='full'
          templateColumns='repeat(5, 1fr)'
          shadow='md'
        >
          <GridItem
            rounded='xl'
            colSpan={{ base: 5, lg: 1 }}
          >
            <Box
              display='flex'
              flexDir='column'
              alignContent='center'
              bg='white'
              borderRight='2px'
              borderRightColor='gray.100'
              borderTopLeftRadius={{ lg: "xl" }}
              borderBottomLeftRadius={{ lg: "xl" }}
              rounded={{ base: "xl", lg: "xl" }}
              h='full'
              px='4'
              py='6'
              bgGradient='linear-gradient(25deg, rgba(211,75,22,1) 6%, rgba(250,115,5,1) 68%)'
            >
              <Heading
                color='white'
                fontSize='lg'
              >
                Pilihan Paket dari Brain Academy
              </Heading>
              <Button
                onClick={() => onOpen()}
                mt={5}
                rightIcon={<BsChevronDown />}
              >
                Kelas {params.get("kelas")?.split("-").join(" ").toUpperCase()}
              </Button>
            </Box>
          </GridItem>

          <GridItem
            py={5}
            colSpan={{ base: 5, lg: 4 }}
            px={5}
            overflowX='scroll'
            h='680px'
            bg='white'
            rounded="xl"
          >
            <Box
              w='full'
              gap={{ base: 10, lg: 5 }}
              display='flex'
            >
              {data && data.length !== 0 ? (
                data.map((item, index) => (
                  <CardPrice
                    hideBuyButton={false}
                    data={item}
                    key={index}
                  />
                ))
              ) : isLoading || isRefetching ? (
                <LoadIndicator />
              ) : (
                <DisplayNotFound />
              )}
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

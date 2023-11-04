"use client";

import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Spinner,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import ModalLevel from "../modal/ModalLevel";
import CustomMenuBtn from "../button/button-menu/CustomMenuBtn";
import { useRouter, useSearchParams } from "next/navigation";
import { useMediaQuery } from "@chakra-ui/react";
import {
  useQuery,
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult
} from "react-query";
import { ResponseShema, ProductPackage } from "@/context/PriceContext";
import Carousel from "../carousel/Carousel";
import { useSwiperSlide } from "@/hooks/useSwiperSlide";
import SliderButton from "../button/SliderButton";
import { Pagination, Navigation } from "swiper/modules";
import { LoadIndicator } from "../utils/LoadIndicator";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { DisplayNotFound } from "@/components/utils/DisplayNotFound";

type TSetStates<T> = Dispatch<SetStateAction<T>>;
type CurrentSelection = "Ruang Belajar" | "Brain Academy";

const selectionProductList = ["Ruang Belajar", "Brain Academy"];
const selectionLevelList = ["SD", "SMP", "SMA", "UTBK/SNBT"];

type StatesTypes = {
  jenjang: string;
  kelas: string;
  monthDuration: string;
};

export type TRefetch = <TPageData>(
  options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
) => Promise<QueryObserverResult<ProductPackage[] | undefined, unknown>>;

export default function PriceList() {
  const route = useRouter();
  const params = useSearchParams();

  const [swiperRef, slidePrev, slideNext] = useSwiperSlide();
  const [isBetweenMobileDevices] = useMediaQuery("(max-width: 425px)");
  const [isMinTabletDevices, isMaxTabletDevices] = useMediaQuery([
    "(min-width: 425px)",
    "(max-width: 768px)"
  ]);

  const getSlide = isBetweenMobileDevices
    ? 1
    : isMinTabletDevices && isMaxTabletDevices
    ? 2
    : 3;

  const [currentSelection, setCurrentSelection] = useState<StatesTypes>({
    jenjang: "sd",
    kelas: "1",
    monthDuration: "1 Bulan"
  });
  const [isModalKelasOpen, setIsModalKelasOpen] = useState(false);

  const { data, isError, isLoading, isRefetching, refetch } = useQuery({
    queryKey: ["result-search-product"],
    queryFn: async () => {
      try {
        const URL = process.env.NEXT_PUBLIC_API_URL;

        const { jenjang, kelas, monthDuration } = currentSelection;

        const createQuery =
          jenjang === "sd"
            ? `${URL}api/product/search?jenjang=${jenjang}&kelas=${kelas}&group=rb&long_period=${
                monthDuration.split(" ")[0]
              }`
            : `${URL}api/product/search?jenjang=${jenjang}&group=rb&long_period=${
                monthDuration.split(" ")[0]
              }`;

        const res = await fetch(createQuery);
        const dataJson = (await res.json()) as ResponseShema<ProductPackage[]>;

        return dataJson.data;
      } catch (error) {
        console.log(error);
      }
    },
    staleTime: Infinity
  });

  const handleCloseModal = () => {
    setIsModalKelasOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalKelasOpen(true);
  };

  const kelasMenuProps = useDisclosure();
  const monthDurationProps = useDisclosure();

  const handleSelectionChange = (value: any, nameToset: string) => {
    setCurrentSelection((prev) => ({
      ...prev,
      [nameToset]: value
    }));
  };

  const saveMonthprefference = () => {
    if (currentSelection.jenjang === "sd") {
      route.push(
        `/ruang_belajar?jenjang=${currentSelection.jenjang}&kelas=${
          currentSelection.kelas
        }&month_duration=${currentSelection.monthDuration.split(" ")[0]}`,
        {
          scroll: false
        }
      );
    } else {
      route.push(
        `/ruang_belajar?jenjang=${currentSelection.jenjang}&month_duration=${
          currentSelection.monthDuration.split(" ")[0]
        }`,
        {
          scroll: false
        }
      );
    }

    monthDurationDisclosure.onClose();

    refetch({ throwOnError: true });
  };

  const savePrefference = () => {
    if (currentSelection.jenjang === "sd") {
      handleOpenModal();
    } else {
      route.push(
        `/ruang_belajar?jenjang=${currentSelection.jenjang}&month_duration=${
          currentSelection.monthDuration.split(" ")[0]
        }`,
        {
          scroll: false
        }
      );

      refetch({ throwOnError: true });
    }

    kelasMenuProps.onClose();
  };

  const kelasMenuDisclosure = { ...kelasMenuProps };
  const monthDurationDisclosure = { ...monthDurationProps };

  const modalProps = {
    isOpen: isModalKelasOpen,
    handleClose: handleCloseModal,
    handleOpen: handleOpenModal,
    setter: setCurrentSelection
  };

  useEffect(() => {
    route.push(`/ruang_belajar?jenjang=sd&kelas=1-2&month_duration=1`);
    handleOpenModal();
  }, []);

  // const disclosureProp = useDisclosure();

  return (
    <Box
      width={{ base: "100%" }}
      py={{ base: 2 }}
      rounded={{ base: "xl" }}
    >
      <ModalLevel
        {...modalProps}
        refetchProduct={refetch}
      />

      <Box
        h={{ lg: "720px", base: "790px" }}
        w={{ lg: "90%", base: "100%" }}
        rounded='lg'
        mx='auto'
        display='grid'
        border='2px'
        borderColor='gray.100'
        gridTemplateColumns={{ lg: "15% 1fr" }}
        bg='white'
        shadow='md'
      >
        <Stack
          borderTopStartRadius='lg'
          borderBottomStartRadius='lg'
          direction={{ base: "row", lg: "column" }}
          bgGradient='linear-gradient(25deg, rgba(22,182,211,1) 6%, rgba(5,130,250,1) 68%)'
          shadow='sm'
          borderRight='1px'
          borderRightColor='gray.100'
          gap={4}
          p={{ base: 4, lg: 8 }}
        >
          <CustomMenuBtn
            title='Jenjang'
            displaySelection={params.get("jenjang")?.toUpperCase() || ""}
            buttonAction={
              <Button
                colorScheme='orange'
                variant='solid'
                size='sm'
                onClick={savePrefference}
              >
                Save
              </Button>
            }
            currentSelection={currentSelection.jenjang}
            selectionChangeHandler={handleSelectionChange}
            stateKey='jenjang'
            listMenu={selectionLevelList}
            {...kelasMenuDisclosure}
          />
          <CustomMenuBtn
            title='Durasi Paket'
            displaySelection={`${params.get("month_duration")} Bulan` || ""}
            buttonAction={
              <Button
                colorScheme='orange'
                variant='solid'
                size='sm'
                onClick={saveMonthprefference}
              >
                Save
              </Button>
            }
            currentSelection={currentSelection.monthDuration}
            selectionChangeHandler={handleSelectionChange}
            stateKey='monthDuration'
            listMenu={["1 Bulan", "9 Bulan"]}
            {...monthDurationDisclosure}
          />
        </Stack>
        {data && data.length > 0 ? (
          <Carousel
            config={{
              pagination: {
                type: "progressbar"
              },
              onBeforeInit: (swiper) => {
                swiperRef.current = swiper;
              },
              slidesPerView: getSlide,
              className: "mySwiper",
              modules: [Pagination, Navigation],
              style: {
                width: "100%",
                backgroundColor: "transparent",
                borderRadius: "20px",
                paddingBottom: "45px"
              }
            }}
            displayModel='PRICELIST'
            dataToDisplay={data}
            customButton={{
              nextButton: (
                <SliderButton
                  direction='next'
                  clickHandler={slideNext}
                />
              ),
              previousButton: (
                <SliderButton
                  direction='prev'
                  clickHandler={slidePrev}
                />
              )
            }}
          />
        ) : isLoading || isRefetching ? (
          <LoadIndicator />
        ) : (
          <DisplayNotFound />
        )}
      </Box>
    </Box>
  );
}


export { selectionLevelList, selectionProductList };

export type { TSetStates, CurrentSelection, StatesTypes };

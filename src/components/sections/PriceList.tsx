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
import CardPrice from "../card/CardPrice";
import { usePrice, PricePackage } from "@/context/PriceContext";
import CustomMenuBtn from "../button-menu/CustomMenuBtn";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useQuery,
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult
} from "react-query";
import { ResponseShema, ProductPackage } from "./PriceHomepage";

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
  const { allData } = usePrice();

  const route = useRouter();
  const params = useSearchParams();

  const [currentSelection, setCurrentSelection] = useState<StatesTypes>({
    jenjang: "sd",
    kelas: "1",
    monthDuration: "1 Bulan"
  });
  const [isModalKelasOpen, setIsModalKelasOpen] = useState(false);

  const datas = allData as PricePackage;
  const getQueryJenjang = params.get("jenjang");
  const getQueryKelas = params.get("kelas");
  const getQueryMonth = params.get("month_duration");

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

        console.log(dataJson.data);

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
      py={{ base: 2 }}
      rounded={{ base: "xl" }}
      boxShadow={{ base: "md" }}
      mb={{ lg: "20" }}
    >
      <ModalLevel
        {...modalProps}
        refetchProduct={refetch}
      />

      <Box
        w={{ lg: "1150px" }}
        mt={{ base: "20px" }}
        p={{ base: "20px" }}
        rounded='md'
      >
        <Stack
          direction='row'
          gap={4}
          mb={{ base: "20px" }}
          p={{ lg: 4 }}
          boxShadow='lg'
          rounded={{ lg: "xl" }}
          bg='white'
        >
          <CustomMenuBtn
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
        <Box
          display={{ base: "flex" }}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: 18 }}
          overflowX='scroll'
          pb={{ lg: 8 }}
          h={{ base: "650px" }}
        >
          {data && data.length > 0 ? (
            data.map((product) => (
              <Box
                key={product.id}
                h='full'
                w='fit-content'
              >
                <CardPrice
                  hideBuyButton={false}
                  data={product}
                />
              </Box>
            ))
          ) : isLoading || isRefetching ? (
            <LoadIndicator />
          ) : (
            <p>Data not found</p>
          )}
        </Box>
      </Box>
    </Box>
  );
}

const LoadIndicator = () => {
  return (
    <Box
      display='grid'
      gap={5}
      placeContent='center'
      w='full'
      h='full'
    >
      <Flex
        direction='row'
        gap={8}
      >
        <Spinner size='lg' />
        <Text
          fontSize='xl'
          textAlign='center'
          mt={2}
        >
          Please wait...
        </Text>
      </Flex>
    </Box>
  );
};

export { selectionLevelList, selectionProductList };

export type { TSetStates, CurrentSelection, StatesTypes };

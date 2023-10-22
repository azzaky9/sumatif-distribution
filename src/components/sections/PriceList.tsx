"use client";

import React, {
  ChangeEvent,
  useState,
  Dispatch,
  SetStateAction,
  useEffect
} from "react";
import { Box, Button, Stack, Text, useDisclosure } from "@chakra-ui/react";
import ModalLevel from "../modal/ModalLevel";
import CardPrice from "../card/CardPrice";
import { usePrice, PricePackage } from "@/context/PriceContext";
import CustomMenuBtn from "../button-menu/CustomMenuBtn";
import { useRouter, useSearchParams } from "next/navigation";

type TSetStates<T> = Dispatch<SetStateAction<T>>;
type CurrentSelection = "Ruang Belajar" | "Brain Academy";

const selectionProductList = ["Ruang Belajar", "Brain Academy"];
const selectionLevelList = ["SD", "SMP", "SMA", "SNBT"];

type StatesTypes = {
  jenjang: string;
  kelas: string;
  monthDuration: string;
};

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

  console.log(typeof getQueryMonth);

  const filteredData =
    getQueryJenjang &&
    datas[getQueryJenjang][
      getQueryKelas ? `kelas_${getQueryKelas}` : getQueryJenjang
    ]
      ? datas[getQueryJenjang][
          getQueryKelas ? `kelas_${getQueryKelas}` : getQueryJenjang
        ].filter((data) => data.group_by_month === getQueryMonth ?? "1")
      : [];

  console.log(filteredData);

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
    if (params.get("sd")) {
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

  console.log(currentSelection.monthDuration);

  useEffect(() => {
    route.push(`/ruang_belajar?jenjang=sd&kelas=1&month_duration=1`);
    handleOpenModal();
  }, []);

  // const disclosureProp = useDisclosure();

  return (
    <Box py={{ base: 2 }}>
      <ModalLevel {...modalProps} />
      <Text
        fontWeight='semibold'
        textAlign='center'
        as='h5'
        fontSize='2xl'
      >
        Price List
      </Text>
      <Box
        mt={{ base: "20px" }}
        p={{ base: "20px" }}
        boxShadow='base'
        rounded='md'
      >
        <Stack
          direction='row'
          gap={4}
          mb={{ base: "20px" }}
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
        <Stack
          spacing={3}
          direction='column'
        >
          {filteredData.length !== 0 ? (
            filteredData.map((data, index) => (
              <CardPrice
                key={index}
                data={data}
              />
            ))
          ) : (
            <Text fontSize='md'>Product tidak di temukan</Text>
          )}
        </Stack>
      </Box>
    </Box>
  );
}

export { selectionLevelList, selectionProductList };

export type { TSetStates, CurrentSelection, StatesTypes };

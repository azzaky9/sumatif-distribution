"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Box,
  UseDisclosureProps
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import {
  type CurrentSelection,
  type SelectionLevel,
  type TSetStates
} from "../sections/PriceList";
import { selectionLevelList } from "../sections/PriceList";
import { useRouter } from "next/navigation";

type Props = {
  currentProduct: CurrentSelection | SelectionLevel | null;
  changeHandler: (value: any) => void;
  selectionList: string[];
};

function ProductOptions(props: Props) {
  const { changeHandler, currentProduct, selectionList } = props;

  return (
    <Menu closeOnSelect={true}>
      <MenuButton
        as={Button}
        size='sm'
        rightIcon={<BsChevronDown />}
      >
        {currentProduct ? currentProduct : "No Option"}
      </MenuButton>
      <MenuList minWidth='240px'>
        <MenuOptionGroup
          onChange={changeHandler}
          defaultValue={currentProduct ? currentProduct : "no option"}
          title='Product'
          type='radio'
        >
          {selectionList.map((item, index) => (
            <MenuItemOption
              value={item}
              key={index}
            >
              {item}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

type TPropsSubListProduct = {
  currentProduct: CurrentSelection;
  modalProp: UseDisclosureProps;
};

function SubListProduct({ currentProduct, modalProp }: TPropsSubListProduct) {
  const route = useRouter();

  // level = jenjang
  const [currentLevel, setCurrentLevel] = useState<SelectionLevel>("SD");
  const [savedPrefference, setSavedPrefference] =
    useState<SelectionLevel | null>("SD");

  const handleChange = (value: any) => {
    setCurrentLevel(value as SelectionLevel);
  };

  const savePrefference = () => {
    route.push("/ruang_belajar");
  };

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        size='sm'
        rightIcon={<BsChevronDown />}
      >
        {currentLevel}
      </MenuButton>
      <MenuList minWidth='240px'>
        <MenuOptionGroup
          onChange={handleChange}
          defaultValue={currentLevel ? currentLevel : ""}
          title='Product'
          type='radio'
        >
          {selectionLevelList.map((item, index) => (
            <MenuItemOption
              value={item}
              key={index}
            >
              {item}
            </MenuItemOption>
          ))}
          <MenuDivider />
          <Box
            p={2}
            display='flex'
            w='full'
          >
            <Button
              w='full'
              size='sm'
              colorScheme='orange'
              rounded='2xl'
              onClick={savePrefference}
            >
              Save
            </Button>
          </Box>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export { ProductOptions, SubListProduct };

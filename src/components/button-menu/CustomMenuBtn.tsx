"use client";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
  Box,
  MenuOptionGroup,
  MenuItemOption,
  UseDisclosureProps
} from "@chakra-ui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  listMenu: string[];
  buttonAction: JSX.Element;
  currentSelection: string;
  selectionChangeHandler: (value: any, nameToset: string) => void;
  stateKey: string;
  displaySelection: string
};

export default function CustomMenuBtn(props: Props & UseDisclosureProps) {
  const {
    buttonAction,
    currentSelection,
    listMenu,
    selectionChangeHandler,
    stateKey,
    isOpen,
    onOpen,
    displaySelection
  } = props;

  
  return (
    <Menu
      closeOnSelect={false}
      isOpen={isOpen}
    >
      <MenuButton
        onClick={onOpen}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {displaySelection}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          value={currentSelection}
          onChange={(value) => selectionChangeHandler(value, stateKey)}
          title='Jenjang'
          type='radio'
        >
          {listMenu.map((menuItem, index) => (
            <MenuItemOption
              key={index}
              value={menuItem.toLowerCase()}
            >
              {menuItem}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
        <Divider />
        <Box p={{ base: 2 }}>{buttonAction}</Box>
      </MenuList>
    </Menu>
  );
}

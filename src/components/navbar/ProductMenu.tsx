"use client";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

type Props = {
  displayText?: string;
  color?: "orange.500";
};

export default function ProductMenu({ displayText, color }: Props) {
  return (
    <Menu>
      <MenuButton
        w='fit-content'
        as={Button}
        variant='link'
        color={color ? color : "black"}
        rightIcon={<BiChevronDown />}
      >
        {displayText ? displayText : "Products"}
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link href='ruang_belajar' scroll={false} >Ruang Belajar</Link>
        </MenuItem>
        {/* {under development} */}
        {/* <MenuItem>
          <Link href='brain_academy'>Brain Academy</Link>
        </MenuItem>
        <MenuItem>
          <Link href='onsite_learning'>Onsite Learning</Link>
        </MenuItem> */}
      </MenuList>
    </Menu>
  );
}

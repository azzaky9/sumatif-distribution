"use client";

import React, { ReactElement, JSXElementConstructor } from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  OrderedList,
  ListItem,
  List,
  ListIcon,
  IconButton
} from "@chakra-ui/react";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { Link } from "@chakra-ui/react";
import { GrLocationPin } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

const pagesFooter: List[] = [
  {
    text: "Home",
    linkTo: "#home"
  },
  {
    text: "Benefit",
    linkTo: "#benefits"
  },
  {
    text: "Why Us",
    linkTo: "#why-us"
  },
  {
    text: "Products",
    linkTo: "#products"
  }
];

const productList: List[] = [
  {
    text: "Ruang Belajar",
    linkTo: "/ruang_belajar"
  },
  {
    text: "Brain Academy",
    linkTo: "/brain_academy"
  }
  // {
  //   text: "Onsite Learning",
  //   linkTo: "/onsite_learning"
  // }
];

export default function Footer() {
  return (
    <Box
      bg={{ base: "gray.800" }}
      px={{ base: 8, lg: "32" }}
      pb={{ base: 16 }}
      pt={{ base: 24 }}
      mt={{ base: 2 }}
    >
      <Box
        w='full'
        display='flex'
        flexDir={{ base: "column", lg: "row" }}
        gap={{ base: 8, lg: 20 }}
      >
        <Box
          display='flex'
          flexDir='column'
          gap={8}
        >
          <Heading
            color='white'
            fontSize='3xl'
          >
            Sumatif
          </Heading>
          <Box>
            <Box
              display='flex'
              alignItems='center'
              gap={2}
            >
              <FaLocationDot style={{ color: "white" }} />
              <Heading
                fontSize='md'
                color='whiteAlpha.700'
              >
                KANTOR UTAMA
              </Heading>
            </Box>
            <Text
              w='320px'
              color='whiteAlpha.700'
            >
              Jalan Suka Eka Medan Johor Nomor 11 Medan Sumatera Utara
            </Text>
          </Box>
        </Box>

        <FooterList
          heading='Sections'
          list={pagesFooter}
        />
        <Box
          justifySelf='end'
          ms={{ lg: 10 }}
        >
          <Heading
            fontSize='2xl'
            color='white'
            mb={4}
          >
            HUBUNGI KAMI
          </Heading>
          <Stack
            direction='column'
            spacing={4}
          >
            <a href='mailto:adm.sumatif@gmail.com?subject=ask'>
              <ButtonWithText
                icons={
                  <BiLogoGmail style={{ color: "white", fontSize: "1.1rem" }} />
                }
                displayText='adm.sumatif@gmail.com'
              />
            </a>
            <a href="https://wa.me/+6289521447395?text=Hello%20Admin">
            <ButtonWithText
              icons={
                <BsFillTelephoneFill
                  style={{ color: "white", fontSize: "0.8rem" }}
                />
              }
              displayText='+62 895-2144-7395'
            />
            </a>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

type TPropBtnWithText = {
  icons?: ReactElement<any, string | JSXElementConstructor<any>>;
  displayText: string;
};

const ButtonWithText: React.FC<TPropBtnWithText> = (props) => {
  const { icons, displayText } = props;

  return (
    <Flex
      gap={4}
      alignItems='center'
    >
      <IconButton
        size='sm'
        icon={icons}
        aria-label='email-icons'
        colorScheme='facebook'
        rounded='full'
      />
      <Text color='whiteAlpha.700'>{displayText}</Text>
    </Flex>
  );
};

type List = {
  text: string;
  linkTo: string | null;
  icons?: any;
};

type Props = {
  heading: string;
  list: List[];
};

const FooterList = ({ heading, list }: Props) => {
  return (
    <Box>
      <Heading
        fontSize={{ base: "2xl" }}
        mb={4}
        color='white'
      >
        {heading}
      </Heading>
      <Flex
        width='full'
        maxWidth={{ base: "320px" }}
        direction='column'
        gap={{ base: 2, lg: 8 }}
      >
        <List
          as='ul'
          role='list'
          listStyleType='none'
        >
          {list.map((item, index) => (
            <ListItem
              key={index}
              as='li'
            >
              <Link
                role='listitem'
                href={item.linkTo ?? undefined}
                color={{ base: "gray.500" }}
                fontSize={{ base: "sm", lg: "md" }}
              >
                {item.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Box>
  );
};

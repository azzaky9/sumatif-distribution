"use client";

import { Box, SimpleGrid, Text, useMediaQuery } from "@chakra-ui/react";
import CardPoint from "../card/CardPoint";
import { GiReceiveMoney } from "react-icons/gi";
import whyUsContent from "../../../public/cms_content/why_us.json";
import { FaMoneyBill } from "react-icons/fa";
import {
  BsPersonWorkspace,
  BsFolder2Open,
  BsPersonVideo3
} from "react-icons/bs";
import { TbFileLike } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { SlBookOpen } from "react-icons/sl";

export default function WhyUs() {
  const [isGreaterThan425px] = useMediaQuery("(min-width: 425px)");

  const iconList: JSX.Element[] = [
    <GiReceiveMoney
      style={{ fontSize: "1.2rem" }}
      key='id_one'
    />,
    <BsPersonWorkspace
      style={{ fontSize: "1.2rem" }}
      key='id_two'
    />,
    <BsFolder2Open
      style={{ fontSize: "1.2rem" }}
      key='id_three'
    />,
    <TbFileLike
      style={{ fontSize: "1.2rem" }}
      key='id_four'
    />,
    <SlBookOpen
      style={{ fontSize: "1.2rem" }}
      key='id_five'
    />,
    <GiTeacher
      style={{ fontSize: "1.2rem" }}
      key='id_six'
    />
  ];

  const bindIcons = whyUsContent.benefits.map((benefit, index) => {
    return { ...benefit, icon: iconList[index] };
  });

  return (
    <Box
      px={{ base: 8, md: 10, lg: 16 }}
      py={{ base: 16 }}
      id="why-us"
    >
      <Box>
        <Text
          fontSize='xl'
          textAlign='center'
          fontWeight='bold'
        >
          Alasan Mengapa Harus Berlangganan Di Sumatif
        </Text>
      </Box>
      <SimpleGrid
        pt={4}
        columns={{ base: 1 }}
        spacing={{ base: 10 }}
      >
        {!isGreaterThan425px
          ? bindIcons.slice(0, 3).map((benefitIcon, index) => (
              <CardPoint
                key={index}
                icons={benefitIcon.icon}
                title={benefitIcon.title}
                description={benefitIcon.description}
              />
            ))
          : bindIcons.map((benefitIcon, index) => (
              <CardPoint
                key={index}
                icons={benefitIcon.icon}
                title={benefitIcon.title}
                description={benefitIcon.description}
              />
            ))}
      </SimpleGrid>
    </Box>
  );
}

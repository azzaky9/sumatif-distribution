"use client";

import {
  Box,
  SimpleGrid,
  Text,
  useMediaQuery,
  Heading,
  Highlight
} from "@chakra-ui/react";
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
      key=''
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
      px={{ base: 4, md: 10, lg: 6 }}
      py={{ base: 20 }}
      id='why-us'
    >
      <Box
        w='full'
        display='grid'
        gridTemplateColumns={{ base: "100%", lg: "40% 60%" }}
        pb={{ base: 8 }}
        py={{ base: 10 }}
        placeContent='center'
      >
        <Box
          display='grid'
          placeContent='center'
          w={{ lg: "80%" }}
          ms={{ lg: "60px" }}
        >
          <Heading textAlign="center" mb={2} fontSize={{ base: "2xl", md: "xl", lg: "3xl" }}>
            <Highlight
              query='Mengapa?'
              styles={{
                bg: "orange.50",
                px: 2,
                py: 1,
                rounded: "xl",
                color: "orange.500",
                
              }}
            >
              Alasan Mengapa? Harus Berlangganan Di Sumatif
            </Highlight>
          </Heading>
        
        </Box>

        <SimpleGrid
          pt={4}
          px={5}
          columns={{ base: 1, lg: 2 }}
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
    </Box>
  );
}

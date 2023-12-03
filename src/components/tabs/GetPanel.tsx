"use client";

import { Fragment } from "react";
import {
  TabPanel,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import brain_academy from "../../../public/cms_content/brain_academy.json";
import ruang_belajar from "../../../public/cms_content/ruang_belajar.json";
import onsite_learning from "../../../public/cms_content/onsite_learing.json";

type Props = {
  panelType: "brain_academy" | "ruang_belajar" | "onsite_learning";
  includeTitle?: boolean;
};

export default function GetPanel(props: Props) {
  const { includeTitle, panelType } = props;

  const mapDataByKey = {
    brain_academy,
    ruang_belajar,
    onsite_learning
  };

  return (
    <TabPanel>
      {typeof includeTitle !== "undefined" && includeTitle ? (
        <Text
          fontSize='md'
          mb={4}
          fontWeight='semibold'
        >
          {mapDataByKey[panelType].title}
        </Text>
      ) : null}
      <Text fontSize={{ base: "sm", md: "md" }}>
        {mapDataByKey[panelType].description}
      </Text>
      <Box
        my={{ base: 8 }}
        overflowX='hidden'
        h={{ base: 300, md: "full", lg: 320 }}
        overflowY={{ base: "scroll", md: "unset", lg: "hidden" }}
      >
        <List
          spacing={{ base: 3, lg: 1 }}
          px={{ base: 2 }}
        >
          {mapDataByKey[panelType].benefits.map((benefit, index) => (
            <Fragment key={index}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                <Box
                  as='span'
                  color='gray.500  '
                  fontSize={{ base: "sm" }}
                >
                  {benefit.description}
                </Box>
              </ListItem>
            </Fragment>
          ))}
        </List>
      </Box>
    </TabPanel>
  );
}

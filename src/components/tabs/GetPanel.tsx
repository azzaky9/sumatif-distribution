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
import superParenting from "../../../public/cms_content/super-parenting-benefit.json";
import pendidikanProfesi from "../../../public/cms_content/pelatihan-profesi-guru.json"

type Props = {
  panelType: "superParenting" | "ppg" ;
  includeTitle?: boolean;
};

export default function GetPanel(props: Props) {
  const { includeTitle, panelType } = props;

  const mapDataByKey = {
    superParenting,
    "ppg": pendidikanProfesi,
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

"use client";

import { Fragment } from "react";
import {
  TabPanel,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider
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
      <Text fontSize='sm'>{mapDataByKey[panelType].description}</Text>
      <Box
        my={{ base: 8 }}
        h={300}
        overflow='scroll'
      >
        <List spacing={3}>
          {mapDataByKey[panelType].benefits.map((benefit, index) => (
            <Fragment key={index}>
              <ListItem>
                <ListIcon
                  fontSize='md'
                  as={MdCheckCircle}
                  color='green.500'
                />
                <Box
                  as='span'
                  color='gray.500  '
                  fontSize='sm'
                >
                  {benefit.description}
                </Box>
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Box>
    </TabPanel>
  );
}

"use client";

import { Tabs, TabList, Tab, TabPanels, Image, Button } from "@chakra-ui/react";
import { productListCDNLink } from "../sections/ProductProvide";
import GetPanel from "./GetPanel";

export default function BenefitTabs() {
  return (
    <>
      <Tabs
        pt={{ base: 10 }}
        variant='line'
        colorScheme='orange'
      >
        <TabList>
          {[
            "Pelatihan PPG (Pendidikan Profesi Guru)",
            "Super Parenting Training and Family Gathering"
          ].map((product, index) => (
            <Tab key={index} fontSize="sm" >{product}</Tab>
          ))}
        </TabList>
        <TabPanels>
          <GetPanel panelType='ruang_belajar' />
          <GetPanel panelType='brain_academy' />
        </TabPanels>
      </Tabs>
    </>
  );
}

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
          {productListCDNLink.map((product, index) => (
            <Tab key={index}>
              {product.as === "image" ? (
                <Image
                  key={index}
                  width='100px'
                  height='40px'
                  src={product.link}
                  alt={product.alt}
                />
              ) : (
                <product.link style={{ fontSize: "2rem" }} />
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <GetPanel panelType='ruang_belajar' />
          <GetPanel panelType='brain_academy' />
          <GetPanel
            panelType='onsite_learning'
            includeTitle
          />
        </TabPanels>
      </Tabs>
     
    </>
  );
}

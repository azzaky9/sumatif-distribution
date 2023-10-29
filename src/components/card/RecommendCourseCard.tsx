"use client";

import React from "react";
import {
  Card,
  Image,
  CardFooter,
  CardBody,
  Text,
  Box,
  Heading,
  Button,
  Stack,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import bgCover from "../../../public/images/office-tools-multicolored-surface.jpg";
import PopoverBenefitProduct from "../popovers/Popover";
import { ProductPackage } from "@/context/PriceContext";
import { DisplayDiscount } from "./CardPrice";
import { MdCheckCircle } from "react-icons/md";

type Props = {
  productData: ProductPackage;
};

export default function RecommendCourseCard({ productData }: Props) {
  return (
    <Card
      variant='outline'
      rounded='2xl'
    >
      <Box
        rounded='2xl'
        height={200}
        w='full'
      >
        <Image
          rounded='2xl'
          objectFit='cover'
          w='full'
          h={200}
          src={bgCover.src}
          alt='bg-vector-illustrate'
        />
      </Box>

      <CardBody>
        <Box
          display='grid'
          gridTemplateRows={{ base: "70px 60px" }}
          placeContent='center'
          alignContent='center'
        >
          <Heading size='sm'>{productData.title}</Heading>
          <Text>{productData.description}</Text>
        </Box>
      </CardBody>

      <CardFooter
        justify='space-between'
        sx={{
          "& > button": {
            minW: "136px"
          }
        }}
      >
        <Stack
          direction='column'
          gap={6}
        >
          <Box>
            <Box
              display='flex'
              flexDir='column'
            >
              <DisplayDiscount
                percent={productData.discount}
                priceDiscount={productData.price.before_discount}
              />
              <Text
                color='orange.500'
                fontWeight='bold'
                fontSize='lg'
              >
                {productData.price.after_discount}
              </Text>
            </Box>
            <PopoverBenefitProduct
              triggerElement={
                <Button
                  variant='link'
                  size='sm'
                  colorScheme='green'
                  rightIcon={<BsChevronDown />}
                >
                  Yang kamu dapatkan
                </Button>
              }
            >
              <PopoverArrow />
              <PopoverHeader textAlign='center'>Benefits</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <List spacing={3}>
                  {productData.fitur[0].list_fitur
                    .slice(0, 6)
                    .map((item, index) => (
                      <ListItem key={index}>
                        <ListIcon
                          as={MdCheckCircle}
                          color='green.500'
                        />
                        {item}
                      </ListItem>
                    ))}
                </List>
              </PopoverBody>
            </PopoverBenefitProduct>
          </Box>
        </Stack>
      </CardFooter>
    </Card>
  );
}

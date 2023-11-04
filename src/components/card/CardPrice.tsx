"use client";

import { usePrice } from "@/context/PriceContext";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MdCheckCircle } from "react-icons/md";
import { LiaCartPlusSolid } from "react-icons/lia";
import { ProductPackage } from "@/context/PriceContext";

type Props = {
  data: ProductPackage | null;
  hideBuyButton?: boolean;
  baseWidth?: boolean;
};

export default function CardPrice({ data, hideBuyButton, baseWidth }: Props) {
  const { setProductSelection } = usePrice();
  const route = useRouter();

  const handleBuyProduct = () => {
    setProductSelection(data);

    route.push("/payment", { scroll: false });
  };

  return (
    <>
      {data && (
        <Card
          maxW='368px'
          flex="none"
          width="360px"
          rounded='2xl'
          shadow='md'
          variant='outline'
          bg='white'
        >
          <CardBody>
            <Stack
              mt='6'
              spacing='3'
            >
              <Heading size='md'>{data.title}</Heading>
              <Text fontSize={{ base: "sm" }}>{data.description}</Text>
            </Stack>
            <Stack
              direction='column'
              gap={4}
              mt='3'
              h={240}
              overflow={{ base: "scroll" }}
              overflowX={{ base: "hidden" }}
            >
              {data.fitur.map((ft, index) => (
                <Box key={index}>
                  <Heading
                    fontSize='md'
                    mb={{ base: 4 }}
                  >
                    {ft.heading}
                  </Heading>
                  <List spacing={3}>
                    {ft.list_fitur.map((lf, index) => (
                      <ListItem
                        key={index}
                        fontSize={{ base: "sm" }}
                      >
                        <ListIcon
                          as={MdCheckCircle}
                          color='green.500'
                        />
                        {lf}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Stack>
            <Box mt={{ base: 5 }}>
              <DisplayDiscount
                percent={data.discount}
                priceDiscount={data.price.before_discount}
              />
              <Text
                fontWeight='bold'
                color='blue.600'
                fontSize='2xl'
              >
                {data.price.after_discount}
              </Text>
            </Box>
          </CardBody>
          <Divider color={{ base: "gray.300" }} />
          <CardFooter>
            {typeof hideBuyButton !== "undefined" && !hideBuyButton ? (
              <ButtonGroup spacing='2'>
                <Button
                  variant='solid'
                  colorScheme='telegram'
                  onClick={handleBuyProduct}
                  rightIcon={
                    <LiaCartPlusSolid style={{ fontSize: "1.3rem" }} />
                  }
                >
                  Buy now
                </Button>
              </ButtonGroup>
            ) : null}
          </CardFooter>
        </Card>
      )}
    </>
  );
}

type TPropsDisplayDiscount = {
  priceDiscount: string;
  percent: number;
};

export function DisplayDiscount({
  percent,
  priceDiscount
}: TPropsDisplayDiscount) {
  return (
    <Stack
      direction='row'
      spacing={3}
    >
      <Text
        fontWeight='bold'
        color='gray.400'
        fontSize={{ base: "sm" }}
        textDecoration='line-through'
      >
        {priceDiscount}
      </Text>
      <Button
        variant='ghost'
        colorScheme='red'
        size='xs'
      >
        -{percent}%
      </Button>
    </Stack>
  );
}

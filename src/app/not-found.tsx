import Link from "next/link";
import { headers } from "next/headers";
import {
  Box,
  Heading,
  Highlight,
  Link as ChakraLink
} from "@chakra-ui/react";

export default function NotFound() {
  const headerList = headers();

  console.log(`mark`, headerList.get("domain"));

  return (
    <Box
      sx={{
        position: "absolute",
        height: "100vh",
        width: "100%",
        zIndex: "10",
        top: 0
      }}
      backgroundColor='whitesmoke'
      display='grid'
      placeContent='center'
    >
      <Heading
        fontSize='5xl'
        fontWeight='bold'
        color='gray.400'
      >
        <Highlight
          query='404'
          styles={{
            bg: "red.100",
            px: 4,
            py: 1,
            rounded: "xl",
            color: "red.500",
            textTransform: "capitalize"
          }}
        >
          404 Not Found Page.
        </Highlight>
      </Heading>

      <ChakraLink mt={5} textAlign="center" color='oraneg.500'>
        <Link href='/'>Back to homepage.</Link>
      </ChakraLink>
    </Box>
  );
}

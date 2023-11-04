"use client"

import { Box, Flex, Spinner, Text } from "@chakra-ui/react";

export const LoadIndicator = () => {
  return (
    <Box
      display='grid'
      gap={5}
      placeContent='center'
      w='full'
      h='full'
    >
      <Flex
        direction='row'
        gap={8}
      >
        <Spinner size='lg' />
        <Text
          fontSize='xl'
          textAlign='center'
          mt={2}
        >
          Please wait...
        </Text>
      </Flex>
    </Box>
  );
};

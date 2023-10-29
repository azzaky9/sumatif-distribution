// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    orange: {
      100: "#fee6dc",
      200: "#fdcdb9",
      300: "#fdb597",
      400: "#fc9c74",
      500: "#fb8351",
      600: "#c96941",
      700: "#974f31",
      800: "#643420",
      900: "#321a10"
    },
    footer: {
      100: "#3C3A40"
    }
  }
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

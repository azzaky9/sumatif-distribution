// app/providers.tsx
"use client";

import { useEffect } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AOS from "aos";

const theme = extendTheme({
  colors: {}
});

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50
    });
  }, []);

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

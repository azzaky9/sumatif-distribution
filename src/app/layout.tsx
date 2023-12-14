import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers as ChakraUiProvider } from "@/provider-configs/chakraui/ChakraProvider";
import { PriceProvider } from "@/context/PriceContext";
import RQProviders from "@/provider-configs/reactquery/RQProvider";
import BaseLayout from "@/components/layout/BaseLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "reSumatif",
  description:
    "Di Sumatif, kami percaya bahwa momen berharga layak untuk dikenang selamanya. Kami hadir untuk mengubah setiap acara menjadi pengalaman yang tak terlupakan, mulai dari kehangatan family gathering hingga pentingnya kenaikan pangkat dan pendidikan profesi guru.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RQProviders>
          <ChakraUiProvider>
            <PriceProvider>
              <BaseLayout>{children}</BaseLayout>
            </PriceProvider>
          </ChakraUiProvider>
        </RQProviders>
      </body>
    </html>
  );
}

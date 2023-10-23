"use client";

import { useContext, createContext, useState } from "react";
import sdPriceList from "../../public/cms_content/product/rb_sd.json";
import smpPriceList from "../../public/cms_content/product/rb_smp.json";
import smaPriceList from "../../public/cms_content/product/rb_sma.json";
import utbksnbtPriceList from "../../public/cms_content/product/rb_utbk_snbt.json";
import { useSearchParams } from "next/navigation";
import { TSetStates } from "@/components/sections/PriceList";

type InitialPriceCtx = {
  allData: unknown;
  productSelection: PackageSchema | null;
  setProductSelection: TSetStates<PackageSchema | null>;
};

const PriceContext = createContext({} as InitialPriceCtx);

type Feature = {
  heading: string;
  list_fitur: string[];
};

type Price = {
  before_discount: string;
  after_discount?: string;
};

type PackageSchema = {
  title: string;
  description: string;
  discount: string;
  fitur: Feature[];
  group_by_month: string;
  price: Price;
};

type PricePackage = {
  [x: string]: {
    [x: string]: PackageSchema[];
  };
};

type Props = {
  children: React.ReactNode;
};

function PriceProvider({ children }: Props) {
  const allData = {
    sd: sdPriceList,
    smp: smpPriceList,
    sma: smaPriceList,
    snbt: utbksnbtPriceList
  };

  const [productSelection, setProductSelection] =
    useState<PackageSchema | null>(null);

  return (
    <PriceContext.Provider
      value={{
        allData,
        productSelection,
        setProductSelection
      }}
    >
      {children}
    </PriceContext.Provider>
  );
}

const usePrice = () => useContext(PriceContext);

export type { PricePackage, PackageSchema };

export { PriceProvider, usePrice };

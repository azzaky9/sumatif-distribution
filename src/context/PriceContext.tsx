"use client";

import { useContext, createContext, useState } from "react";
import { TSetStates } from "@/components/sections/PriceList";
import { useQuery, UseQueryResult } from "react-query";

export type ResponseShema<T> = {
  data: T;
  status: "success" | "error";
};

export type Feature = {
  heading: string;
  list_fitur: string[];
};

export type Price = {
  after_discount: string;
  before_discount: string;
};

export type ProductPackage = {
  id: string;
  title: string;
  description: string;
  fitur: Feature[];
  discount: number;
  group_by_month: 1;
  price: Price;
};

type InitialPriceCtx = {
  productSelection: ProductPackage | null;
  setProductSelection: TSetStates<ProductPackage | null>;
  priceDiscoverQ: UseQueryResult<ProductPackage[] | undefined, unknown>;
  isReviewModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

const PriceContext = createContext({} as InitialPriceCtx);

type Props = {
  children: React.ReactNode;
};

function PriceProvider({ children }: Props) {
  const [productSelection, setProductSelection] =
    useState<ProductPackage | null>(null);

  const [isModalReviewProductOpen, setIsModalReviewProductOpen] =
    useState(false);

  const handleOpenModal = () => setIsModalReviewProductOpen(true);
  const handleCloseModal = () => setIsModalReviewProductOpen(false);

  const priceDiscoverQ = useQuery({
    queryKey: ["price-discover"],
    queryFn: async () => {
      try {
        const url = process.env.NEXT_PUBLIC_API_URL;

        const response = await fetch(`${url}api/product/discover`);
        const dataJson = (await response.json()) as ResponseShema<
          ProductPackage[]
        >;

        return dataJson.data;
      } catch (error) {
        console.log(error);
      }
    },
    staleTime: Infinity
  });

  return (
    <PriceContext.Provider
      value={{
        productSelection,
        setProductSelection,
        priceDiscoverQ,
        handleCloseModal,
        handleOpenModal,
        isReviewModalOpen: isModalReviewProductOpen
      }}
    >
      {children}
    </PriceContext.Provider>
  );
}

const usePrice = () => useContext(PriceContext);

export { PriceProvider, usePrice };

"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import Selects from "@/components/input/SelectInput";
import { TSetStates } from "@/components/sections/PriceList";
import { FormDataKeeper } from "@/app/payment/sup-parenting/page";

export type SIZED = "xs" | "s" | "m" | "l" | "xl" | "xxl";

const size: SIZED[] = ["xs", "s", "m", "l", "xl", "xxl"];

export type SupParentingTypes = {
  name: string;
  phone: string;
  alamat: string;
  size: SIZED;
  job?: string;
  submitHandling: {
    Element: HTMLButtonElement;
    onClick: () => void;
  };
};
export type Includes = keyof SupParentingTypes;

type Props = {
  includes: Includes[];
  selectProp?: {
    label: string;
    option: string[];
  };
  identifier: "Ayah" | "Ibu" | "Anak";
  setInformation: TSetStates<FormDataKeeper[]>;
};

export default function RenderMultipleInput({
  includes,
  setInformation,
  identifier,
}: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SupParentingTypes>();

  const getError = (errKey: keyof SupParentingTypes) => {
    return !!errors[errKey];
  };

  const createErrorMessage = (errKey: keyof SupParentingTypes) => {
    if (getError(errKey)) {
      return <FormErrorMessage>{errKey} is required</FormErrorMessage>;
    }

    return null;
  };

  console.log(errors);

  const onsubmit: SubmitHandler<SupParentingTypes> = (values) => {
    setInformation((prev) => [...prev, { ...values, identifier: identifier }]);

    return values;
  };

  return (
    <Box
      onSubmit={handleSubmit(onsubmit)}
      as="form"
      display="flex"
      flexDir="column"
      gap={3}
    >
      {includes.map((include, index) => (
        <FormControl key={index}>
          <FormLabel textTransform="capitalize">{include}</FormLabel>
          <Input
            _placeholder={{ textTransform: "capitalize" }}
            {...register(include, { required: true })}
            type="text"
            placeholder={include}
          />
          {createErrorMessage(include)}
        </FormControl>
      ))}

      <Selects
        options={size}
        placeholder="Pilih size baju"
        required
        {...register("size")}
      />
      <Box mt={4} display="flex" justifyContent="right">
        <Button
          type="submit"
          size="sm"
          colorScheme="orange"
          rightIcon={<MdAdd />}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}

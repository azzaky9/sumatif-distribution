"use client";

import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";

export type TBaseInputProps<T> = {
  isInvalid: boolean;
  name: T;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string
};

export default function BaseInput(props: TBaseInputProps<string>) {
  const { isInvalid, name, onChange, value, placeholder } = props;

  return (
    <FormControl
      isInvalid={isInvalid}
      mt={4}
    >
      <FormLabel fontSize='xs'>PIC (Person in charge)*</FormLabel>
      <Input
        onChange={onChange}
        value={value}
        type='text'
        name={name}
        placeholder={placeholder}
      />
    </FormControl>
  );
}

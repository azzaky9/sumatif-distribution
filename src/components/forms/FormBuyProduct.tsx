"use client";

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  FormErrorMessage,
  OrderedList,
  ListItem,
  useToast
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import CardDisplayerCustomer from "../card/CardDisplayerCustomer";
import { PricePackage, usePrice } from "@/context/PriceContext";
import { useRouter } from "next/navigation";

export type FormSchema = {
  name: string;
  noHp: string;
  schoolName: string;
  kelas: string;
  jurusan?: string; // Optional field if it's a high school equivalent
  email: string;
  parentName: string;
  packageName: string;
  namaKepalaSekolah: string;
  namePICPendaftaran: string;
};

export interface StateListCustomer extends FormSchema {
  id: string;
}

export default function FormBuyProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormSchema>();

  const route = useRouter();
  const { allData } = usePrice();
  const toast = useToast;

  const { setProductSelection } = usePrice();
  const [listCustomer, setListCustomer] = useState<StateListCustomer[]>([]);

  const kelasList = ["SD", "SMP", "SMA/SMK"];

  const onsubmit: SubmitHandler<FormSchema> = (data) => {
    if (listCustomer.length === 10) {
      console.log("Data sudah full");

      return;
    }

    const generateRandId = String(Math.floor(Math.random() * 9999));
    const bindId: StateListCustomer = { ...data, id: generateRandId };

    const result = [...listCustomer, bindId];

    setListCustomer(result);

    reset();
  };

  const datas = allData as PricePackage;
  const getAllNamedProduct = Object.entries(datas)
    .map(([key, value]) => {
      const result: string[] = [];

      Object.entries(value).map(([key, value]) => {
        return value.forEach((v) => result.push(v.title));
      });

      return result;
    })
    .flat();

  const selectProductList = getAllNamedProduct.filter(
    (item, index) => getAllNamedProduct.indexOf(item) === index
  );

  const createErrorMessage = (errKey: keyof FormSchema) => {
    if (getError(errKey)) {
      console.log(errors[errKey]);

      return <FormErrorMessage>{errKey} is required</FormErrorMessage>;
    }

    return null;
  };

  const getError = (errKey: keyof FormSchema) => {
    return errors[errKey] ? true : false;
  };

  const handleChangeProduct = () => {
    setListCustomer([]);
    setProductSelection(null);
    route.push("/ruang_belajar");
  };

  return (
    <>
      <Box
        w={{ base: "full", md: "320px", lg: "60%" }}
        boxShadow='md'
        rounded='3xl'
        p={{ base: "23px" }}
        bg='white'
      >
        <Heading
          py={{ base: 4 }}
          fontSize='2xl'
          textAlign='center'
        >
          Form Pendaftaran
        </Heading>
        <Box
          as='form'
          display='grid'
          gridTemplateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={{ lg: "20px" }}
          onSubmit={handleSubmit(onsubmit)}
        >
          <FormControl isInvalid={getError("name")}>
            <FormLabel>Nama :</FormLabel>
            <Input
              {...register("name", { required: true })}
              type='text'
              placeholder='Nama'
            />
            {createErrorMessage("name")}
          </FormControl>
          <FormControl
            isInvalid={getError("noHp")}
            mt={4}
          >
            <FormLabel>No. HP :</FormLabel>
            <Input
              {...register("noHp", { required: true })}
              type='tel'
              placeholder='No. HP'
            />
            {createErrorMessage("noHp")}
          </FormControl>
          <FormControl
            isInvalid={getError("schoolName")}
            mt={4}
          >
            <FormLabel>Nama Sekolah :</FormLabel>
            <Input
              {...register("schoolName", { required: true })}
              type='text'
              placeholder='Nama Sekolah'
            />
            {createErrorMessage("schoolName")}
          </FormControl>
          <FormControl
            isInvalid={getError("kelas")}
            mt={4}
          >
            <FormLabel>Kelas</FormLabel>
            <Select {...register("kelas", { required: true })}>
              {kelasList.map((kelas, index) => (
                <option
                  key={index}
                  value={kelas.toLowerCase()}
                >
                  {kelas}
                </option>
              ))}
            </Select>
            {createErrorMessage("kelas")}
          </FormControl>

          <FormControl
            isInvalid={getError("jurusan")}
            mt={4}
          >
            <FormLabel>Jurusan :</FormLabel>
            <Input
              {...register("jurusan", { required: true })}
              type='text'
              placeholder='Jurusan (jika SMA sederajat)'
            />
            {createErrorMessage("jurusan")}
          </FormControl>
          <FormControl
            isInvalid={getError("email")}
            mt={4}
          >
            <FormLabel>Email :</FormLabel>
            <Input
              {...register("email", { required: true })}
              type='email'
              placeholder='Email'
            />
            {createErrorMessage("email")}
          </FormControl>
          <FormControl
            isInvalid={getError("parentName")}
            mt={4}
          >
            <FormLabel>Nama Orangtua :</FormLabel>
            <Input
              {...register("parentName", { required: true })}
              type='text'
              placeholder='Nama Orangtua'
            />
            {createErrorMessage("parentName")}
          </FormControl>
          <FormControl
            isInvalid={getError("packageName")}
            mt={4}
          >
            <FormLabel>Paket yang dibutuhkan :</FormLabel>
            <Select {...register("packageName", { required: true })}>
              {selectProductList.map((prodName, index) => (
                <option
                  key={index}
                  value={prodName}
                >
                  {prodName}
                </option>
              ))}
            </Select>
          </FormControl>
          {/* <FormControl
            isInvalid={getError("packageName")}
            mt={4}
          >
            <FormLabel>Paket yang dibutuhkan :</FormLabel>
            <Input
              {...register("packageName", { required: true })}
              type='text'
              placeholder='Paket yang dibutuhkan'
            />
          </FormControl> */}
          <FormControl
            isInvalid={getError("namaKepalaSekolah")}
            mt={4}
          >
            <FormLabel>Nama Kepala Sekolah :</FormLabel>
            <Input
              {...register("namaKepalaSekolah", { required: true })}
              type='text'
              placeholder='Nama Kepala Sekolah'
            />
            {createErrorMessage("namaKepalaSekolah")}
          </FormControl>
          <FormControl
            isInvalid={getError("namePICPendaftaran")}
            mt={4}
          >
            <FormLabel>Nama PIC Pendaftaran :</FormLabel>
            <Input
              {...register("namePICPendaftaran", { required: true })}
              type='text'
              placeholder='Nama PIC Pendaftaran'
            />
            {createErrorMessage("namePICPendaftaran")}
          </FormControl>
        </Box>
          <Box
            display='flex'
            justifyContent='end'
            w='full'
            alignItems='end'
            gap={4}
          >
            <Button
              type='submit'
              size='sm'
              mt={4}
              onClick={handleChangeProduct}
            >
              Ganti Product
            </Button>
            <Button
              type='submit'
              mt={4}
              colorScheme='orange'
              size='sm'
            >
              Submit
            </Button>
          </Box>
      </Box>
      <CardDisplayerCustomer
        setCustomerList={setListCustomer}
        customerList={listCustomer}
      />
    </>
  );
}

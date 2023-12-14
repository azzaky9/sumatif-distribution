"use client";

import { Box, Grid, GridItem, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RenderMultipleInput from "@/components/forms/RenderInput";
import { Card } from "@chakra-ui/react";
import { type Includes } from "@/components/forms/RenderInput";
import ListCompleted from "@/components/list/RenderList";
import type { List } from "@/components/list/RenderList";
import type { SupParentingTypes } from "@/components/forms/RenderInput";
import { useMutation } from "react-query";
import axios from "axios";

type SELECTED = "Ayah" | "Ibu" | "Anak";

export interface FormDataKeeper
  extends Omit<SupParentingTypes, "submitHandling"> {
  identifier: SELECTED;
}

type FormKeeper = FormDataKeeper;

export default function Page() {
  const route = useRouter();
  const [parent, setParent] = useState<FormKeeper[]>([]);

  const sendMail = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}api/email`;

      await axios.post(url, {
        data: parent,
        subject: "test package",
      });
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
      }
    }
  };

  const { mutate, isLoading } = useMutation(["send-mail"], sendMail);

  const getInludes = (type: SELECTED): Includes[] => {
    const defaultRender: Includes[] = ["name", "alamat"];

    if (type === "Anak") {
      return [...defaultRender, "phone"];
    }

    return [...defaultRender, "job", "phone"];
  };

  const getStatusCompletion = (identifier: SELECTED): List["status"] => {
    if (parent.length > 0) {
      if (parent.find((p) => p.identifier === identifier)) return "filled";
    }

    return "unfilled";
  };

  const defaultStatus: List[] = [
    {
      label: "Ayah",
      status: getStatusCompletion("Ayah"),
    },
    {
      label: "Ibu",
      status: getStatusCompletion("Ibu"),
    },
    {
      label: "Anak",
      status: getStatusCompletion("Anak"),
    },
  ];

  const isDisabled =
    defaultStatus.filter((d) => d.status === "filled").length <= 3;

  console.log(isDisabled);

  return (
    <>
      <Box
        px={{ base: 4 }}
        py={{ base: 4 }}
        pb={{ lg: "28" }}
        mt={{ base: 8 }}
        w="full"
      >
        <Grid
          w="full"
          templateRows="auto"
          templateColumns="repeat(3, 1fr)"
          placeContent="center"
          px={10}
          gap={10}
        >
          <GridItem boxShadow="md" bg="white" px={5} py={8} gap={5}>
            <Heading textAlign="center" fontSize="lg" mb={10}>
              Informasi Ayah / Wali{" "}
            </Heading>

            <RenderMultipleInput
              identifier="Ayah"
              setInformation={setParent}
              includes={getInludes("Ayah")}
            />
          </GridItem>
          <GridItem boxShadow="md" bg="white" px={5} py={8} gap={5}>
            <Heading textAlign="center" fontSize="lg" mb={10}>
              Informasi Ibu / Wali{" "}
            </Heading>
            <RenderMultipleInput
              identifier="Ibu"
              setInformation={setParent}
              includes={getInludes("Ibu")}
            />
          </GridItem>
          <GridItem>
            <Card
              display="grid"
              shadow="sm"
              mt={8}
              variant="outline"
              py={5}
              background="white"
            >
              <Heading textAlign="center">Review</Heading>
              <Box px={10}>
                <Heading color="gray.500" fontSize="md" mb={4}>
                  Status
                </Heading>
                <ListCompleted list={defaultStatus} />
                <Button
                  onClick={() => mutate()}
                  mt={4}
                  size="sm"
                  disabled={isLoading}
                >
                  Submit
                </Button>
              </Box>
            </Card>
          </GridItem>
          <GridItem boxShadow="md" bg="white" px={5} py={8} gap={5}>
            <Heading textAlign="center" fontSize="lg" mb={10}>
              Informasi Anak-anak
            </Heading>
            <RenderMultipleInput
              identifier="Anak"
              setInformation={setParent}
              includes={getInludes("Anak")}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

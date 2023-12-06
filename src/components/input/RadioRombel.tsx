import { useRadio, Box, useRadioGroup, HStack } from "@chakra-ui/react";
import type { Product } from "../card/RecommendCourseCard";
import { TSetStates } from "../sections/PriceList";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box
      as='label'
      fontSize={14}
    >
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: "orange.500",
          color: "white",
          borderColor: "orange.200"
        }}
        _focus={{
          boxShadow: "outline"
        }}
        px={3}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
type Props = {
  priceOption: Product["priceByCategories"];
  parentState: string;
  setParentState: TSetStates<string>;
};

export default function RadioSelection(props: Props) {
  const { priceOption, setParentState } = props;

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "category",
    defaultValue: "50",
    onChange: (value) => setParentState(value)
  });

  const group = getRootProps();

  if (!priceOption) {
    return null;
  }

  return (
    <HStack {...group}>
      {priceOption.map((value, index) => {
        const radio = getRadioProps({ value: value[0] });
        return (
          <RadioCard
            key={index}
            {...radio}
          >
            {value[0]}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

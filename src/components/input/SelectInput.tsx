import { Stack, Select, SelectProps } from "@chakra-ui/react";
import { forwardRef } from "react";

type Props = {
  options: string[];
};

const Selects = forwardRef<
  HTMLSelectElement,
  Props & SelectProps & { label: string }
>((props, ref) => {
  return (
    <Stack mt={4} spacing={3}>
      <Select {...props} ref={ref}>
        {props.options.map((option, index) => (
          <option
            key={index}
            value={option}
            style={{ textTransform: "uppercase" }}
          >
            {option}
          </option>
        ))}
      </Select>
    </Stack>
  );
});

Selects.displayName = "Selects";

export default Selects;

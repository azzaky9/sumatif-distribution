import { Select } from "@chakra-ui/react";

type Props = {
  options: string[];
};

const Selects = (props, ref) => {
  return (
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
  );
};

export default Selects;

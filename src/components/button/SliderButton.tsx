"use client"

import { IconButton } from "@chakra-ui/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

type Props = {
  direction: "next" | "prev";
  clickHandler: () => void;
};


const SliderButton = (props: Props) => {
  const { clickHandler, direction } = props;

  const getIconsPrevOrNext =
    direction === "prev" ? <GrFormPrevious /> : <GrFormNext />;

  return (
    <IconButton
      colorScheme='gray'
      size='md'
      icon={getIconsPrevOrNext}
      aria-label='slide-prev'
      onClick={clickHandler}
    />
  );
};


export default SliderButton
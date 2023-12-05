import React from "react";
import { Highlight, ColorProps } from "@chakra-ui/react";

type Props = {
  text: string;
  mark: string;
  variant?: "brand" | "error";
};

export default function MarkText({ mark, text, variant }: Props) {
  const getVariant = () => {
    if (variant === "error") {
      return { bg: "red.100", color: "red.500" };
    }

    return { bg: "orange.50", color: "orange.500" };
  };

  return (
    <Highlight
      query={mark}
      styles={{
        ...getVariant(),
        px: 4,
        py: 1,
        rounded: "xl",
        textTransform: "capitalize"
      }}
    >
      {text}
    </Highlight>
  );
}

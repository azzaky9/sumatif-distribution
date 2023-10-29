"use client";

import {
  PopoverTrigger,
  Portal,
  PopoverContent,
  Popover
} from "@chakra-ui/react";

type Props = {
  triggerElement: JSX.Element | React.ReactNode;
  children: React.ReactNode;
};

export default function PopoverBenefitProduct({
  triggerElement,
  children
}: Props) {
  return (
    <Popover>
      <PopoverTrigger>{triggerElement}</PopoverTrigger>
      <Portal>
        <PopoverContent w='300px'>{children}</PopoverContent>
      </Portal>
    </Popover>
  );
}

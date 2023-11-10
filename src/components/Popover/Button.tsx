import { ComponentProps } from "react";

import { usePopoverActions } from "@/components/Popover/Provider";

interface Props extends Omit<ComponentProps<"button">, "onClick"> {}

function PopoverButton({ children, ...props }: Props) {
  const { onOpen } = usePopoverActions();
  return (
    <button {...props} onClick={onOpen}>
      {children}
    </button>
  );
}

export default PopoverButton;

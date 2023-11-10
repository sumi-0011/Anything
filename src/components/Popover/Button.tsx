import { ComponentProps } from "react";

import { usePopoverActions } from "@/components/Popover/Provider";

interface Props extends Omit<ComponentProps<"button">, "onClick"> {}

function PopoverButton({ children, ...props }: Props) {
  const { toggleOpen } = usePopoverActions();
  return (
    <button {...props} onClick={toggleOpen}>
      {children}
    </button>
  );
}

export default PopoverButton;

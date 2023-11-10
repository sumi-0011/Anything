import { PropsWithChildren } from "react";

import PopoverProvider from "@/components/Popover/Provider";

interface Props {}

function PopoverRoot({ children }: PropsWithChildren<Props>) {
  return <PopoverProvider>{children}</PopoverProvider>;
}

export default PopoverRoot;

import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

import PopoverProvider from "@/components/Popover/Provider";

interface Props {}

function PopoverRoot({ children }: PropsWithChildren<Props>) {
  return (
    <PopoverProvider>
      <div css={wrapperCss}>{children}</div>
    </PopoverProvider>
  );
}

const wrapperCss = () => css`
  position: relative;
  width: fit-content;
`;

export default PopoverRoot;

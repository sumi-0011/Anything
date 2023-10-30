import { css } from "@emotion/react";

import theme from "@/styles/theme";

export const scrimCss = css`
  position: fixed;
  z-index: ${theme.zIndex.backdrop};
  top: 0;
  left: 0;

  overflow: hidden;

  width: 100vw;
  height: 100%;
`;

export const mobileScrimCss = css`
  ${scrimCss}

  right: 0;
  left: 0;
  margin: 0 auto;
`;

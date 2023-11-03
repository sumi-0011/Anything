import { css, Theme } from "@emotion/react";

export const scrimCss = (theme: Theme) => css`
  position: fixed;
  z-index: ${theme.zIndex.backdrop};
  top: 0;
  left: 0;

  overflow: hidden;

  width: 100vw;
  height: 100%;

  background-color: rgb(0 0 0 / 50%);
`;

export const mobileScrimCss = (theme: Theme) => css`
  ${scrimCss(theme)}

  right: 0;
  left: 0;
  margin: 0 auto;
`;

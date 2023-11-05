import { css } from "@emotion/react";

const globalStyles = css`
  :root {
    --max-width: 1100px;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default globalStyles;
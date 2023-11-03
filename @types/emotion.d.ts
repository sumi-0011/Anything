import "@emotion/react";

import { darkTheme } from "../src/styles/theme";

type ThemeType = typeof darkTheme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

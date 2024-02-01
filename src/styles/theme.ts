import { darkThemeColors, lightThemeColors } from "@/styles/theme/colors";

const zIndex = {
  belowDefault: -1,
  default: 0,
  aboveDefault: 1,
  belowFixed: 99,
  fixed: 100,
  aboveFixed: 101,
  backdrop: 900,
  modal: 1000,
  toast: 2000,
  above: (n: number) => n + 1,
  below: (n: number) => n - 1,
} as const;

export const lightTheme = {
  colors: lightThemeColors,
  zIndex,
};

export const darkTheme = {
  colors: darkThemeColors,
  zIndex,
};
// TODO : 수정 필요
export const theme = darkTheme;

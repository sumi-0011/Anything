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

const colors = {
  rose: "#F7CAC9	",
  serenity: "#92A8D1",
  white: "#FFFFFF",
  black: "#454545",
  pantone: {
    100: "#92A8D1",
    200: "#c5b9cd",
    300: "#f7cac9",
    400: "#eaa8b3",
    500: "#dd869c",
  },
};

const theme = {
  zIndex,
  colors,
} as const;

export default theme;

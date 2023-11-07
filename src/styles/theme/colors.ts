const colors = {
  white: "#FFFFFF",
  black: "#0C0D0D",

  neutral: {
    25: "#FDFDFD",
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0A0A0A",
  },
  success: {
    50: "#EBFAF3",
    300: "#85E0B3",
    500: "#33CC80",
    700: "#1F7A4D",
    950: "#05140D",
  },
  alert: {
    50: "#FFF7E6",
    300: "#FFCC66",
    500: "#FFAA00",
    700: "#996600",
    950: "#1A1400",
  },
  error: {
    50: "#FFE6E6",
    300: "#F76E6E",
    500: "#F20D0D",
    700: "#910808",
    950: "#180101",
  },
  teal: {
    50: "#ADF0DD",
    100: "#0BD8B6",
    200: "#0EB39E",
    300: "#12A594",
    400: "#207E73",
    500: "#1C6961",
    600: "#145750",
    700: "#084843",
    800: "#023B37",
    900: "#111C1B",
    950: "#0D1514",
  },
};

const lightThemeBg = {
  canvas: colors.neutral[25],
  default: colors.white,
  subtitle: colors.neutral[100],
  muted: colors.neutral[200],
  disabled: colors.neutral[200],
};

const darkThemeBg = {
  canvas: colors.black,
  default: colors.neutral[950],
  subtitle: colors.neutral[100],
  muted: colors.neutral[200],
  disabled: colors.neutral[200],
};

export const lightThemeColors = {
  ...colors,
  bg: lightThemeBg,
};

export const darkThemeColors = {
  ...colors,
  bg: darkThemeBg,
};

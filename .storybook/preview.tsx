import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import React from "react";
import { useDarkMode } from "storybook-dark-mode";

import { darkTheme, lightTheme } from "../src/styles/theme";

const decorators = [
  (Story) => {
    const isDark = useDarkMode();
    document.documentElement.setAttribute(
      "color-theme",
      isDark ? "dark" : "light",
    );
    return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Story />
      </ThemeProvider>
    );
  },
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators,
};

export default preview;
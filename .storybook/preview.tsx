import {   Global, ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import React from "react";
import { useDarkMode } from "storybook-dark-mode";

import { darkTheme, lightTheme } from "../src/styles/theme";
import globalStyles from "../src/styles/globalStyles";
import { LazyMotion, domMax } from "framer-motion";

const decorators = [
  (Story) => {
    const isDark = useDarkMode(); 
    return (
      <LazyMotion features={domMax}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Global styles={globalStyles} />
            <Story />
          </ThemeProvider>
      </LazyMotion>
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
import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { useState } from "react";

import globalStyles from "@/styles/globalStyles";
import { darkTheme, lightTheme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

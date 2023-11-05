import { useEffect, useState } from "react";

function useGetDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    setIsDarkMode(isDarkMode);
  }, []);

  return isDarkMode;
}

export default useGetDarkMode;

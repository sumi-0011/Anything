import CloseIcon from "@/components/Icon/Close";
import useGetDarkMode from "@/hooks/useGetDarkMode";
import { darkTheme, lightTheme } from "@/styles/theme";

type IconType = "close";

export interface IconPropsType extends React.ComponentProps<"svg"> {
  theme: typeof darkTheme | typeof lightTheme;
}

interface Props {
  type: IconType;
}

function Icon({ type, ...props }: Props) {
  const isDarkMode = useGetDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  switch (type) {
    case "close":
      return <CloseIcon theme={theme} {...props} />;

    default:
      break;
  }
}

export default Icon;

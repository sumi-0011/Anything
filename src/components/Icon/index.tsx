import { useTheme } from "@emotion/react";

import CloseIcon from "@/components/Icon/Close";
import { darkTheme } from "@/styles/theme";

type IconType = "close";

export interface IconPropsType extends React.ComponentProps<"svg"> {
  theme: typeof darkTheme;
}

interface Props extends React.ComponentProps<"svg"> {
  type: IconType;
}

function Icon({ type, ...props }: Props) {
  const theme = useTheme();

  switch (type) {
    case "close":
      return <CloseIcon theme={theme} {...props} />;

    default:
      break;
  }
}

export default Icon;

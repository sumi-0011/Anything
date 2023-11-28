import { css, SerializedStyles } from "@emotion/react";
import { ComponentProps, ComponentType } from "react";

interface Props extends ComponentProps<"span"> {
  // linearGradient: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
  css?: SerializedStyles;

  direction: "right top" | "left top" | "right bottom" | "left bottom" | string;
  colors: [string, string];
}

function GradientText({
  as: Component = "span",
  direction,
  colors,
  css,
  ...props
}: Props) {
  return <Component {...props} css={[textCss({ direction, colors }), css]} />;
}

const textCss = ({
  direction,
  colors,
}: Pick<Props, "colors" | "direction">) => css`
  background: linear-gradient(to ${direction}, ${colors[0]}, ${colors[1]});

  -webkit-background-clip: text; //  background 를 어디까지 적용시키는지
  color: transparent; //  텍스트 원래의 색을 투명하게
`;

export default GradientText;

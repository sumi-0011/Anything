import { css, SerializedStyles } from "@emotion/react";
import { ComponentProps, ComponentType } from "react";

interface Props extends ComponentProps<"span"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
  css?: SerializedStyles;

  direction:
    | "to right top"
    | "to left top"
    | "to right bottom"
    | "to left bottom"
    | string;
  colors: [string, string];

  isAnimation?: boolean;
}

function GradientText({
  direction,
  colors,
  css,
  as: Component = "span",
  isAnimation,
  ...props
}: Props) {
  return (
    <Component
      {...props}
      css={[textCss({ direction, colors, isAnimation }), css]}
    />
  );
}

const textCss = ({
  direction,
  colors,
  isAnimation,
}: Pick<Props, "colors" | "direction" | "isAnimation">) => css`
  background: linear-gradient(${direction}, ${colors[0]}, ${colors[1]});
  -webkit-background-clip: text; //  background 를 어디까지 적용시키는지
  color: transparent; //  텍스트 원래의 색을 투명하게

  ${isAnimation &&
  css`
    animation: gradient 3s ease-in-out infinite;
    background-size: 150% 200%;

    @keyframes gradient {
      0% {
        background-position-x: 0%;
        background-position-y: 0%;
        transform: rotate(0deg);
      }
      50% {
        background-position-x: 50%;
        background-position-y: 100%;
        transform: rotate(90deg);
      }
      100% {
        background-position-x: 0%;
        background-position-y: 0%;
        transform: rotate(0deg);
      }
    }
  `}
`;

export default GradientText;

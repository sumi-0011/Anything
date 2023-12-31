import { css, Theme } from "@emotion/react";
import { ComponentProps } from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type ButtonVariant = "solid" | "outline" | "ghost" | "link" | "unstyled";

interface StyleProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  br?: string;
}

interface Props extends ComponentProps<"button">, StyleProps {}

function Button(props: Props) {
  return <button css={(theme) => buttonCss(theme, props)} {...props} />;
}

const buttonCss = (theme: Theme, props: StyleProps) => css`
  ${sizeCss[props.size || "md"]};
  ${variantCss(theme, props.variant || "solid")};
  border-radius: ${props.br || "4px"};

  &:disabled {
    background-color: ${theme.colors.bg.disabled};
    border: 1px solid ${theme.colors.bg.disabled};
    color: ${theme.colors.text.disabled};
    cursor: not-allowed;
  }
`;

const sizeCss = {
  xs: css`
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  `,
  sm: css`
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  `,
  md: css`
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  `,
  lg: css`
    font-size: 1.125rem;
    padding: 1rem 2rem;
  `,
  xl: css`
    font-size: 1.25rem;
    padding: 1.25rem 2.5rem;
  `,
  "2xl": css`
    font-size: 1.5rem;
    padding: 1.5rem 3rem;
  `,
};

const variantCss = (theme: Theme, variant: ButtonVariant) => {
  switch (variant) {
    case "solid":
      return css`
        background-color: ${theme.colors.primary.default};
        border: 1px solid ${theme.colors.primary.default};
        color: white;

        &:hover {
          background-color: ${theme.colors.primary[400]};
          border: 1px solid ${theme.colors.primary[400]};
        }
        &:active {
          background-color: ${theme.colors.primary[500]};
          border: 1px solid ${theme.colors.primary[500]};
        }
      `;
    case "outline":
      return css`
        background-color: transparent;
        border: 1px solid ${theme.colors.primary.default};
        color: ${theme.colors.primary.default};

        &:hover,
        &:active {
          background-color: ${theme.colors.bg.light};
        }
      `;
    case "ghost":
      return css`
        background-color: transparent;
        border: none;
        color: ${theme.colors.primary.default};
        font-weight: 500;

        &:hover,
        &:active {
          background-color: ${theme.colors.bg.light};
        }
      `;
    case "link":
      return css`
        background-color: transparent;
        border: none;
        color: ${theme.colors.primary.default};

        &:hover,
        &:active {
          background-color: ${theme.colors.bg.light};
        }
      `;
    default:
      return css``;
  }
};

export default Button;

import { css } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";

import GradientText from "./GradientText";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "component/GradientText",
  component: GradientText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    css: {
      disabled: true,
    },
  },
} satisfies Meta<typeof GradientText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: "right top",
    css: css`
      font-size: 60px;
      font-weight: 800;
    `,
    colors: ["#861657", "#ffa69e"],
    children: "Hello World",
  },
};

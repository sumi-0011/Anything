import type { Meta, StoryObj } from "@storybook/react";

import Button from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "md",
  },
};

export const Disabled: Story = {
  args: {
    variant: "solid",
    size: "md",
    disabled: true,
  },
};

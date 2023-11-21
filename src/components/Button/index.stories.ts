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
  args: {
    children: "Button",
  },
  argTypes: {
    children: { control: "text", description: "Button text", name: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    size: "md",
  },
  argTypes: {
    variant: {
      disabled: true,
    },
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
  argTypes: {
    variant: {
      disabled: true,
    },
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

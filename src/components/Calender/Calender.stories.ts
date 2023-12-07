import type { Meta, StoryObj } from "@storybook/react";

import Calender from "./Calender";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "component/Calender",
  component: Calender,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Calender>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {},
  argTypes: {},
};

import { Meta } from "@storybook/react";
import { ComponentProps } from "react";

import Task from "./";

const meta: Meta<typeof Task> = {
  component: Task,
  title: "Task",
};
export default meta;

const Template = (args: ComponentProps<typeof Task>) => <Task {...args} />;

export const Default = Template.bind({});

Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

// export const Pinned = Template.bind({});
// Pinned.args = {
//   task: {
//     ...Default.args.task,
//     state: "TASK_PINNED",
//   },
// };

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...Default.args.task,
//     state: "TASK_ARCHIVED",
//   },
// };

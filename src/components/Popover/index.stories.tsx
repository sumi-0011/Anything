import { type Meta, StoryObj } from "@storybook/react";

import Button from "@/components/Button";

import Popover from "./index";

const meta: Meta<typeof Popover> = {
  title: "component/Popover",
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultComponent({ list }: { list: string[] }) {
  return (
    <Popover>
      <Popover.Button>
        <Button>Popover</Button>
      </Popover.Button>
      <Popover.Panel>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {list.map((item) => (
            <Button key={item}>{item}</Button>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export const Default = {
  title: "component/Popover",
  render: ({ list }: { list: string[] }) => <DefaultComponent list={list} />,
  args: {
    list: ["Item 1", "Item 2", "Item 3", "Item 4"],
  },
  argTypes: {
    list: {
      control: {
        type: "array",
      },
    },
  },
};

function OverlayComponent() {
  return (
    <Popover>
      <Popover.Overlay />
      <Popover.Button>
        <Button>Popover</Button>
      </Popover.Button>
      <Popover.Panel>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <Button key={item}>Item {item}</Button>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export const Overlay: Story = {
  render: OverlayComponent,
  args: {},
};

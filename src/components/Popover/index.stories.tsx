import { type Meta } from "@storybook/react";
import { domMax, LazyMotion } from "framer-motion";

import Popover from "./index";

const meta: Meta<typeof Popover> = {
  title: "component/Popover",
  component: Popover,
};

export default meta;

export function Default() {
  return (
    <LazyMotion features={domMax}>
      <Popover>
        <Popover.Button>Popover</Popover.Button>
        <Popover.Panel>
          <div>Popover Panel</div>
        </Popover.Panel>
      </Popover>
    </LazyMotion>
  );
}

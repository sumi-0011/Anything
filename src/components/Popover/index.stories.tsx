import { css, Theme } from "@emotion/react";
import { type Meta } from "@storybook/react";

import Popover from "./index";

const meta: Meta<typeof Popover> = {
  title: "component/Popover",
  component: Popover,
};

export default meta;

export function Default() {
  return (
    <Popover>
      <Popover.Button>Popover</Popover.Button>
      <Popover.Panel>
        <div css={liCss}>Item 1</div>
        <div css={liCss}>Item 2</div>
        <div css={liCss}>Item 3</div>
        <div css={liCss}>Item 4</div>
      </Popover.Panel>
    </Popover>
  );
}

const liCss = (theme: Theme) => css`
  font-size: 12px;
  padding: 4px 8px;
  background-color: ${theme.colors.text.default};
  color: ${theme.colors.bg.default};

  & + & {
    margin-top: 8px;
  }
`;

export function Overlay() {
  return (
    <Popover>
      <Popover.Button>Popover</Popover.Button>
      <Popover.Overlay />
      <Popover.Panel>
        <div>Popover Panel</div>
      </Popover.Panel>
    </Popover>
  );
}

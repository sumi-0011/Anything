import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { type Meta } from "@storybook/react";
import { domMax, LazyMotion } from "framer-motion";

import useBoolean from "@/hooks/useBoolean";

import BottomSheet from "./BottomSheet";

const meta: Meta<typeof BottomSheet> = {
  title: "component/BottomSheet",
  component: BottomSheet,
};

export default meta;

export function Default() {
  const [isShowing, toggleShowing] = useBoolean(false);

  return (
    <LazyMotion features={domMax}>
      <Button type="button" onClick={toggleShowing}>
        toggle
      </Button>
      <BottomSheet onClickOutside={toggleShowing} isShowing={isShowing}>
        bottom sheet content asd
      </BottomSheet>
    </LazyMotion>
  );
}

const Button = styled.button`
  background-color: red;
  color: white;
`;

import { css } from "@emotion/react";
import { type Meta } from "@storybook/react";

import useBoolean from "@/hooks/useBoolean";
import { lightTheme } from "@/styles/theme";

import BottomSheet from "./BottomSheet";

const meta: Meta<typeof BottomSheet> = {
  title: "component/BottomSheet",
  component: BottomSheet,
};

export default meta;

export function Default() {
  const [isShowing, toggleShowing] = useBoolean(false);

  return (
    <>
      <button css={buttonCss} type="button" onClick={toggleShowing}>
        toggle
      </button>
      <BottomSheet
        onClickOutside={toggleShowing}
        isShowing={isShowing}
        overrideCss={bottomSheetCss}
      >
        <BottomSheet.Header
          title="Bottom Sheet"
          desc="Bottom Sheet Description"
        />
      </BottomSheet>
    </>
  );
}

const bottomSheetCss = css``;

const buttonCss = css`
  background-color: ${lightTheme.colors.black};
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

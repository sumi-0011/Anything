import { css, SerializedStyles, Theme } from "@emotion/react";
import { type Variants, m } from "framer-motion";
import { type ComponentProps, type MouseEventHandler } from "react";

import BottomSheetProvider from "@/components/BottomSheet/BottomSheetProvider";
import BottomSheetHeader from "@/components/BottomSheet/Header";
import { defaultEasing, defaultFadeInVariants } from "@/constants/motions";
import { mobileScrimCss } from "@/styles/scrim";

import AnimatePortal from "../Portal/AnimatePortal";

/*
 * @param onClickOutside : scrim을 클릭했을 때 실행되는 함수이며, 기본적으로 target을 확인한 후 실행됩니다
 */
interface Props extends ComponentProps<typeof AnimatePortal> {
  onClickOutside?: VoidFunction;
  overrideCss?: SerializedStyles;
}

const BottomSheet = ({
  onClickOutside,
  isShowing,
  children,
  mode,
  overrideCss,
}: Props) => {
  const onClickOutsideDefault: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return;
    if (onClickOutside) onClickOutside();
  };

  return (
    <AnimatePortal isShowing={isShowing} mode={mode}>
      <m.div
        onClick={onClickOutsideDefault}
        css={mobileScrimCss}
        variants={defaultFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <m.div css={[contentCss, overrideCss]} variants={bottomSheetVariants}>
          <BottomSheetProvider onClose={() => onClickOutside?.()}>
            {children}
          </BottomSheetProvider>
        </m.div>
      </m.div>
    </AnimatePortal>
  );
};

export default Object.assign(BottomSheet, { Header: BottomSheetHeader });

const contentCss = (theme: Theme) => css`
  position: absolute;
  z-index: ${theme.zIndex.modal};
  top: 100%;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  min-height: 300px;
  max-height: 99%;
  padding-top: 6px;

  color: ${theme.colors.text.default};
  background-color: ${theme.colors.bg.default};
`;

const bottomSheetVariants: Variants = {
  initial: {
    y: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "transform",
  },
  animate: {
    y: "-100%",
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "transform",
  },
  exit: {
    y: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "transform",
  },
};

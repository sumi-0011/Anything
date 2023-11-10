import { css, SerializedStyles, Theme } from "@emotion/react";
import { AnimatePresence, m, Variants } from "framer-motion";
import { PropsWithChildren } from "react";

import { usePopoverValue } from "@/components/Popover/Provider";
import { defaultEasing } from "@/constants/motions";

interface Props {
  overrideCss?: SerializedStyles;
}

export default function PopoverPanel({
  children,
  overrideCss,
}: PropsWithChildren<Props>) {
  const { isOpen } = usePopoverValue();
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <m.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            css={[containerCss, overrideCss]}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const positionCss = (theme: Theme) => css`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  z-index: ${theme.zIndex.modal};
`;

const containerCss = (theme: Theme) => css`
  ${positionCss(theme)}

  color: ${theme.colors.text.default};
  background-color: ${theme.colors.bg.default};
  padding: 12px;
  width: fit-content;
`;

const variants: Variants = {
  initial: {
    y: -5,
    transition: { duration: 0.1, ease: defaultEasing },
    willChange: "transform",
  },
  animate: {
    y: 0,
    transition: { duration: 0.1, ease: defaultEasing },
    willChange: "transform",
  },
  exit: {
    y: -5,
    transition: { duration: 0.1, ease: defaultEasing },
    willChange: "transform",
  },
};

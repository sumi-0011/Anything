import { css } from "@emotion/react";
import { AnimatePresence, m, Variants } from "framer-motion";
import { ComponentProps } from "react";

import { usePopoverValue } from "@/components/Popover/Provider";
import { defaultEasing } from "@/constants/motions";

interface Props extends ComponentProps<"div"> {}

export default function PopoverPanel({ children, ...props }: Props) {
  const { isOpen } = usePopoverValue();
  return (
    <div css={containerCss}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div {...props}>{children}</div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const containerCss = () => css`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
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

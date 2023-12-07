import { AnimatePresence, m, Variants } from "framer-motion";

import {
  usePopoverActions,
  usePopoverValue,
} from "@/components/Popover/Provider";
import { defaultEasing } from "@/constants/motions";
import { scrimCss } from "@/styles/scrim";

export default function PopoverOverlay() {
  const { isOpen } = usePopoverValue();
  const { onClose } = usePopoverActions();

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          css={scrimCss}
          onClick={onClose}
        />
      )}
    </AnimatePresence>
  );
}

const variants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.1, ease: defaultEasing },
    willChange: "opacity",
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.1, ease: defaultEasing },
    willChange: "opacity",
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1, ease: defaultEasing },
    willChange: "opacity",
  },
};

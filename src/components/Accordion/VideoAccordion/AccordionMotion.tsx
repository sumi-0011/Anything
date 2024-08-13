import { AnimatePresence, m, motion } from "framer-motion";
import * as React from "react";

type AccordionProps = {
  i: number;
  expanded: number;
  setExpanded: (i: number) => void;
  headerElement: React.ReactNode;
  children: React.ReactNode;
};

const Accordion = ({
  i,
  expanded,
  setExpanded,
  headerElement,
  children,
}: AccordionProps) => {
  const isOpen = i === expanded;

  return (
    <>
      <m.div initial={false} onClick={() => setExpanded(i)}>
        {headerElement}
      </m.div>
      <AnimatePresence initial={false} exitBeforeEnter>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;

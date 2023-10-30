import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface Props {
  isShowing: boolean;
  onClose?: VoidFunction;
  isBlur?: boolean;
}

function Content({ children, isShowing }: PropsWithChildren<Props>) {
  if (!isShowing) return <></>;

  return <Wrapper>{children}</Wrapper>;
}

export default Content;

function Wrapper({ children, ...props }: PropsWithChildren) {
  return (
    <WrapperStyled
      {...props}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={defaultFadeInUpVariants}
      transition={{ duration: 0.3 }}
    >
      {children}
    </WrapperStyled>
  );
}

export const WrapperStyled = styled(motion.div)`
  background-color: #353535;
  position: absolute;

  color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 9999;

  margin-top: 8px;

  @media screen and (max-width: 500px) {
    width: 100%;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    margin-top: 0;
    padding: 0;
  }
`;

const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const defaultFadeInUpVariants = {
  initial: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};

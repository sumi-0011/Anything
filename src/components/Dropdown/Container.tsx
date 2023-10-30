import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

import useOutsideClick from "@/hooks/useOutsideClick";

/**
 * @param onClickOutside 외부영역 클릭시 호출될 함수
 * */
interface Props {
  onClickOutside?: VoidFunction;
}

function Container({ children, onClickOutside }: PropsWithChildren<Props>) {
  const onClickOutsideRef = useOutsideClick(() => onClickOutside?.());

  return <Wrapper ref={onClickOutsideRef}>{children}</Wrapper>;
}

export default Container;

const Wrapper = styled.div`
  position: relative;
`;

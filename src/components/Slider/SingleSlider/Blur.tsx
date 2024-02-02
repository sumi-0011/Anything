import styled from "@emotion/styled";

import { useSliderContext } from "@/components/Slider/Slider.context";

function Blur() {
  const { page, totalPageCount, isBlur } = useSliderContext();
  const isLastPage = page === totalPageCount - 1;
  const isFirstPage = page === 0;

  if (!isBlur) return <></>;

  return (
    <>
      {!isFirstPage && <LeftBlur />}
      {!isLastPage && <RightBlur />}
    </>
  );
}

export default Blur;

const BlurBase = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  width: 84px;
  height: 100%;
`;

const LeftBlur = styled(BlurBase)`
  left: -16px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 18.45%, #fff 100%);
`;

const RightBlur = styled(BlurBase)`
  right: -16px;
  background: linear-gradient(270deg, #fff 18.45%, rgba(255, 255, 255, 0) 100%);
`;

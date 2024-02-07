import styled from "@emotion/styled";
import { Children, PropsWithChildren, useState } from "react";

import Blur from "@/components/Slider/SingleSlider/Blur";
import { SliderContext } from "@/components/Slider/Slider.context";

interface RootProps {
  slidesToShow: number;
  sliderSize: number;

  isBlur?: boolean;
  stepperGap?: number;
}

function FullSliderRoot({
  stepperGap = 16,
  ...props
}: PropsWithChildren<RootProps>) {
  const [totalSliderCount, setTotalSliderCount] = useState(0);
  const [page, setPage] = useState(0);
  const [elementSize, setElementSize] = useState<[number, number]>([0, 0]);

  const cardCount = Children.count(props.children);
  // full 슬라이드 다른 점
  const totalPageCount =
    cardCount <= props.slidesToShow
      ? 1
      : Math.ceil(cardCount / props.slidesToShow);
  // console.log("totalPageCount: ", totalPageCount);

  const sliderValue = {
    page,
    totalPageCount,
    setPage,
    slidesToShow: props.slidesToShow,
    isBlur: props.isBlur,
    stepperGap,
    setElementSize,
    elementSize,
  };

  return (
    <SliderContext.Provider value={sliderValue}>
      <Wrapper height={elementSize[1]}>
        {props.children}

        <Blur />
      </Wrapper>
    </SliderContext.Provider>
  );
}

export default FullSliderRoot;

const Wrapper = styled.div<{ height: number }>`
  position: relative;
  width: fit-content;
  height: ${({ height }) => height}px;
`;

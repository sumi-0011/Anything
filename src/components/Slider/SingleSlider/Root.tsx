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

function SingleSliderRoot({
  stepperGap = 16,
  ...props
}: PropsWithChildren<RootProps>) {
  const [page, setPage] = useState(0);
  const [elementSize, setElementSize] = useState<[number, number]>([0, 0]);

  const cardCount = Children.count(props.children);
  const totalPageCount =
    cardCount === props.slidesToShow ? 1 : cardCount - (props.slidesToShow - 2);

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

export default SingleSliderRoot;

const Wrapper = styled.div<{ height: number }>`
  position: relative;
  width: fit-content;
  height: ${({ height }) => height}px;
`;

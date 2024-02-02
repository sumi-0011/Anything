import styled from "@emotion/styled";
import {
  Children,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import React from "react";

import { useSliderContext } from "@/components/Slider/Slider.context";

/**
 * @description 한 slide씩 넘어가는 슬라이더입니다.
 * @param {ResponsiveSizeType} sliderSize - slider의 너비
 * @param {number} [slidesToShow = 4] - 한 화면에 보이는 slider 개수
 * @param {ResponsiveSizeType} [gap] - slider 사이 gap
 */
type SliderType = {
  // slider style
  gap?: number;

  // stepper
  stepperGap?: number;
  isStepper?: boolean;
};

type SliderStyleType = SliderType & { page: number; totalPage: number };

function SingleSliderInner({
  children: _children,
  ...props
}: PropsWithChildren<SliderType>) {
  const { page, slidesToShow, isBlur } = useSliderContext();
  const { children, sliderSize } = useGetChildElementWidth(_children);

  const cardCount = Children.count(_children);
  const totalPageCount =
    cardCount === slidesToShow ? 1 : cardCount - (slidesToShow - 2);

  return (
    <Container
      slidesToShow={slidesToShow}
      page={page}
      totalPage={totalPageCount}
      blur={isBlur}
      sliderSize={sliderSize[0]}
      {...props}
    >
      <Slider>
        <SliderInner page={page}>{children}</SliderInner>
      </Slider>
    </Container>
  );
}

export default SingleSliderInner;

const useGetChildElementWidth = (children: ReactNode) => {
  const childRef = useRef<HTMLDivElement>();
  const { elementSize, setElementSize } = useSliderContext();

  // 컴포넌트가 마운트된 후에 width를 계산합니다.
  useEffect(() => {
    if (childRef.current) {
      const width = childRef.current.offsetWidth;
      const height = childRef.current.offsetHeight;
      setElementSize([width, height]);
    }
  }, []);

  // 첫 번째 자식 요소에만 ref를 부여합니다.
  const childrenWithRef = React.Children.map(children, (child, index) => {
    if (index === 0) {
      return React.cloneElement(
        <div style={{ width: "fit-content" }}>{child}</div>,
        { ref: childRef },
      );
    } else {
      return child;
    }
  });

  return { children: childrenWithRef, sliderSize: elementSize };
};

const Container = styled.div<
  SliderStyleType & { sliderSize: number; slidesToShow: number; blur?: boolean }
>`
  ${({
    page,
    slidesToShow,
    sliderSize,
    blur,
    totalPage,
    stepperGap = 16,
    gap = 16,
  }) => {
    // 레이아웃에 배치되는 영역
    let viewBoxWidth = sliderSize * slidesToShow + gap * (slidesToShow - 1);
    if (blur) viewBoxWidth += sliderSize / 2;

    // 슬라이드되는 영역
    const sliderArea = getSliderArea({
      sliderSize,
      totalPage,
      page,
      gap,
      blur,
    });

    return `
      width: ${viewBoxWidth}px;

      ${Slider} {
        width: ${viewBoxWidth}px; 
        padding-bottom: ${stepperGap}px;
      }

      ${SliderInner} {
        transform: translateX(-${sliderArea}px);
        gap: ${gap}px;
 
        & > * {
          width: ${sliderSize}px;
        }
      }
     .slider-next-arrow{
        right: -${gap}px;
        bottom: ${stepperGap ?? 0}px;

      }
     .slider-prev-arrow {
        left: -${gap}px;
        bottom: ${stepperGap ?? 0}px;
      }
    `;
  }}

  position: relative;
`;

const getSliderArea = ({
  sliderSize,
  totalPage,
  page,
  gap,
  blur,
}: {
  sliderSize: number;
  totalPage: number;
  page: number;
  gap: number;
  blur?: boolean;
}) => {
  const lastSliderArea =
    sliderSize * (totalPage - 3) + sliderSize / 2 + gap * (totalPage - 1);
  const midSliderArea = sliderSize * (page - 1) + gap * page + sliderSize / 2;

  if (page === totalPage - 1) {
    if (!blur) return lastSliderArea + sliderSize / 2;
    return lastSliderArea;
  }
  return midSliderArea;
};

const Slider = styled.div`
  overflow: hidden;
  position: relative;
`;

const SliderInner = styled.div<{ page: number }>`
  display: flex;
  flex-wrap: nowrap;
  transition: all 0.7s;

  & > * {
    flex-shrink: 0;
  }
`;

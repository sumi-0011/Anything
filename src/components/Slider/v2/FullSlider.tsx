import styled from "@emotion/styled";
import React, { Children, useEffect, useState } from "react";

import PrevArrow from "./_ArrowLeft";
import NextArrow from "./_ArrowRight";

type SliderType = {
  slidesToShow: number;
  // sliderSize: number;
  gap?: number;
  stepperGap?: number;
  blur?: boolean;

  isStepper?: boolean;
  children: React.ReactNode;
};

type SliderStyleType = SliderType & {
  page: number;
  totalPage: number;
  sliderSize: number;
};

// blur false 인 경우 수정
function FullSlider({
  children: _children,
  slidesToShow,
  blur = true,
  isStepper = true,
  ...props
}: SliderType) {
  const [page, setPage] = useState(0);

  const { children, sliderSize } = useGetChildElementWidth(_children);
  const cardCount = Children.count(children);
  const totalPageCount =
    cardCount <= slidesToShow ? 1 : Math.ceil(cardCount / slidesToShow);

  const isFirstPage = page === 0;
  const isLastPage = page === totalPageCount - 1;

  const onNext = () => {
    if (isLastPage) return;
    setPage((prev) => prev + 1);
  };

  const onPrev = () => {
    if (isFirstPage) return;
    setPage((prev) => prev - 1);
  };

  return (
    <Container
      slidesToShow={slidesToShow}
      page={page}
      totalPage={totalPageCount}
      blur={blur}
      sliderSize={sliderSize[0]}
      {...props}
    >
      <Slider>
        <SliderInner page={page}>{children}</SliderInner>
      </Slider>

      {!isFirstPage && <PrevArrow onClick={onPrev} />}
      {!isFirstPage && blur && <LeftBlur />}
      {!isLastPage && <NextArrow onClick={onNext} />}
      {!isLastPage && blur && <RightBlur />}

      {isStepper && (
        <StepperWrapper>
          {[...Array(totalPageCount)].map((_, idx) =>
            idx === page ? (
              <ActiveStepper key={`stepper-active-${idx}`} />
            ) : (
              <Stepper onClick={() => setPage(idx)} key={`stepper-${idx}`} />
            ),
          )}
        </StepperWrapper>
      )}
    </Container>
  );
}

export default FullSlider;

const useGetChildElementWidth = (children: React.ReactNode) => {
  const childRef = React.useRef<HTMLDivElement>();
  const [elementSize, setElementSize] = useState<[number, number]>([0, 0]); //[width, height]

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

const Container = styled.div<SliderStyleType>`
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
    // full
    let viewBoxWidth = sliderSize * slidesToShow + gap * (slidesToShow - 1);
    if (blur) viewBoxWidth += sliderSize / 2;

    // 슬라이드되는 영역
    const sliderArea = getSliderArea({
      sliderSize,
      totalPage,
      page,
      gap,
      blur,
      type: "full",
      slidesToShow,
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
      ${NextArrowContainer} {
        right: -${gap}px;
        bottom: ${stepperGap ?? 0}px;

      }
      ${PrevArrowContainer} {
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
  type,
  slidesToShow,
}: {
  sliderSize: number;
  totalPage: number;
  page: number;
  gap: number;
  blur?: boolean;
  type?: "full";
  slidesToShow: number;
}) => {
  if (type === "full") {
    const lastSliderArea = (sliderSize + gap) * slidesToShow * (totalPage - 1);
    const midSliderArea = (sliderSize + gap) * slidesToShow * page;

    if (page === 0) {
      return 0;
    }
    if (page === totalPage - 1) {
      return lastSliderArea;
    }
    return midSliderArea;
  }
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

// function NextArrow(props: ComponentProps<"div">) {
//   const { onClick } = props;
//   return (
//     <NextArrowContainer onClick={onClick}>
//       <Icon type="arrow-right" width={16} height={16} color="#808080" />
//     </NextArrowContainer>
//   );
// }

// function PrevArrow(props: ComponentProps<"div">) {
//   const { onClick } = props;
//   return (
//     <PrevArrowContainer onClick={onClick}>
//       <Icon type="arrow-left" width={16} height={16} color="#808080" />
//     </PrevArrowContainer>
//   );
// }

const ArrowContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;

  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  overflow: visible;
  border: 1px solid gray;
  background-color: #fff;
  box-shadow: 0px 1px 5px -3px rgba(0, 0, 0, 0.04);

  cursor: pointer;
  z-index: 1;
`;

const NextArrowContainer = styled(ArrowContainer)``;
const PrevArrowContainer = styled(ArrowContainer)``;

const StepperWrapper = styled.div`
  position: absolute;
  bottom: 0px;

  display: flex;
  gap: 4px;
  justify-content: center;
  margin: auto;
  left: 0;
  right: 0;
`;

const Stepper = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 100px;

  background-color: gray;
  cursor: pointer;
`;

const ActiveStepper = styled.div`
  width: 12px;
  height: 6px;
  border-radius: 100px;

  background-color: gray;
  cursor: pointer;
`;

const Blur = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  width: 84px;
  height: 100%;
  /* height: 150px; */
`;
const LeftBlur = styled(Blur)`
  left: -16px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 18.45%, #fff 100%);
`;

const RightBlur = styled(Blur)`
  right: -16px;
  background: linear-gradient(270deg, #fff 18.45%, rgba(255, 255, 255, 0) 100%);
`;
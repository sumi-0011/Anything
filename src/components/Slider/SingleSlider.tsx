import styled from "@emotion/styled";
import { Children, PropsWithChildren, useState } from "react";

import PrevArrow from "@/components/Slider/Slider.components/_ArrowLeft";
import NextArrow from "@/components/Slider/Slider.components/_ArrowRight";
import Stepper from "@/components/Slider/Slider.components/_Stepper";

/**
 * @description 한 slide씩 넘어가는 슬라이더입니다.
 * @param {ResponsiveSizeType} sliderSize - slider의 너비
 * @param {number} [slidesToShow = 4] - 한 화면에 보이는 slider 개수
 * @param {ResponsiveSizeType} [gap] - slider 사이 gap
 */
type SliderType = {
  // slider logic
  slidesToShow: number;
  sliderSize: number;

  // slider style
  gap?: number;

  // blur
  blur?: boolean;

  // stepper
  stepperGap?: number;
  isStepper?: boolean;
};

type SliderStyleType = SliderType & { page: number; totalPage: number };

function SingleSlider({
  children,
  slidesToShow,
  blur = true,
  isStepper = true,
  ...props
}: PropsWithChildren<SliderType>) {
  const [page, setPage] = useState(0);

  const cardCount = Children.count(children);
  const totalPageCount =
    cardCount === slidesToShow ? 1 : cardCount - (slidesToShow - 2);

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
        <Stepper
          totalPageCount={totalPageCount}
          currentPage={page}
          setPage={setPage}
        />
      )}
    </Container>
  );
}

export default SingleSlider;

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

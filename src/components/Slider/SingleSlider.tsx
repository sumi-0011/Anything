import styled from "@emotion/styled";
import { Children, ComponentProps, PropsWithChildren, useState } from "react";

import Stepper from "@/components/Slider/_Stepper";
import SvgArrowLeft from "@/components/Slider/ArrowLeft";
import SvgArrowRight from "@/components/Slider/ArrowRight";

/**
 * @description 한 slide씩 넘어가는 슬라이더입니다.
 * @param {ResponsiveSizeType} sliderSize - slider의 너비
 * @param {number} [slidesToShow = 4] - 한 화면에 보이는 slider 개수
 * @param {ResponsiveSizeType} [gap] - slider 사이 gap
 */
type SliderType = {
  slidesToShow: number;
  sliderSize: number;
  gap?: number;
  stepperGap?: number;
  blur?: boolean;
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

function NextArrow(props: ComponentProps<"div">) {
  const { onClick } = props;
  return (
    <NextArrowContainer onClick={onClick}>
      <SvgArrowRight width={16} height={16} color="#808080" />
    </NextArrowContainer>
  );
}

function PrevArrow(props: ComponentProps<"div">) {
  const { onClick } = props;
  return (
    <PrevArrowContainer onClick={onClick}>
      <SvgArrowLeft width={16} height={16} color="#808080" />
    </PrevArrowContainer>
  );
}

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

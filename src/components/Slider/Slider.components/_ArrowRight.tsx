import styled from "@emotion/styled";
import { SVGProps } from "react";

import { useSliderContext } from "@/components/Slider/Slider.context";
import { ArrowContainer } from "@/components/Slider/Slider.styles";

function NextArrow() {
  const { page, totalPageCount, setPage } = useSliderContext();
  const isLastPage = page === totalPageCount - 1;

  const onNext = () => {
    if (isLastPage) return;
    setPage((prev) => prev + 1);
  };

  if (isLastPage) return <></>;

  return (
    <NextArrowContainer onClick={onNext} className="slider-next-arrow">
      <ArrowWrapper>
        <SvgArrowRight width={16} height={16} color="#808080" />
      </ArrowWrapper>
    </NextArrowContainer>
  );
}

const NextArrowContainer = styled(ArrowContainer)`
  right: 0;
`;

const ArrowWrapper = styled.div`
  position: relative;
  left: 50%;

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

export default NextArrow;

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M8.435 5.435a.8.8 0 0 0 0 1.13L13.869 12l-5.434 5.434a.8.8 0 0 0 1.13 1.132l6-6a.8.8 0 0 0 0-1.132l-6-6a.8.8 0 0 0-1.13 0Z"
      clipRule="evenodd"
    />
  </svg>
);
